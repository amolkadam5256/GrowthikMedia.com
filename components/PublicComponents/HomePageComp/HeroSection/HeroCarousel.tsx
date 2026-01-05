import React, { useState, useRef, useEffect, useCallback } from "react";
import Card from "@/components/ui/Card";

interface CarouselItem {
  id: number;
  image: string;
  alt: string;
}

interface HeroCarouselProps {
  items: CarouselItem[];
}

const HeroCarousel = ({ items }: HeroCarouselProps) => {
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1000);

  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  const lastScrollTime = useRef<number>(0);
  const autoScrollSpeed = 0.5; // Pixels per frame

  // Create circular buffer: [items, items, items, items] to ensure smoothness
  // We need enough items to cover the viewport + buffer for seamless looping
  const repeatedItems = [...items, ...items, ...items, ...items];
  // Constants - Responsive Widths
  // Mobile: w-52 (208px) + gap-4 (16px) = 224px
  // Desktop: w-64 (256px) + gap-4 (16px) = 272px
  const [itemWidth, setItemWidth] = useState(272);
  const [totalSetWidth, setTotalSetWidth] = useState(items.length * 272);
  const [paddingX, setPaddingX] = useState(0);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      const vw = window.innerWidth;
      setViewportWidth(vw);

      const isDesktop = vw >= 768;
      const newItemWidth = isDesktop ? 272 : 224;
      const newPaddingX = vw * (isDesktop ? 0.4 : 0.25);

      setItemWidth(newItemWidth);
      setPaddingX(newPaddingX);
      setTotalSetWidth(items.length * newItemWidth);
    };

    updateDimensions(); // Initial call

    // Resize handler
    window.addEventListener("resize", updateDimensions);

    // Initial centering logic needs to run after dimensions are set
    if (carouselRef.current) {
      // We can't easily center perfectly on first render if width changes,
      // but we can set a safe initial scroll.
      const initialWidth = window.innerWidth >= 768 ? 272 : 224;
      const initialTotalWidth = items.length * initialWidth;
      carouselRef.current.scrollLeft = initialTotalWidth;
      setScrollPosition(initialTotalWidth);
    }

    // Start loop
    startAutoScroll();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      stopAutoScroll();
    };
  }, [items.length]);

  const startAutoScroll = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    const animate = () => {
      if (carouselRef.current && !isDragging) {
        carouselRef.current.scrollLeft += autoScrollSpeed;
        checkScrollLoop();
        setScrollPosition(carouselRef.current.scrollLeft);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  }, [isDragging, autoScrollSpeed]);

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  // Adjust checkScrollLoop to use state
  const checkScrollLoop = () => {
    if (!carouselRef.current) return;

    // Use current state values or recalculate for latest closure
    const vw = typeof window !== "undefined" ? window.innerWidth : 1000;
    const itemW = vw < 768 ? 224 : 272;
    const totalW = items.length * itemW;

    const maxScroll = totalW * 2;
    const minScroll = totalW;

    if (carouselRef.current.scrollLeft >= maxScroll) {
      carouselRef.current.scrollLeft -= totalW;
    } else if (carouselRef.current.scrollLeft < minScroll - 100) {
      carouselRef.current.scrollLeft += totalW;
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
      // Only do loop check on manual scroll (auto-scroll handles it internally)
      if (isDragging) {
        checkScrollLoop();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    stopAutoScroll();
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
    startAutoScroll();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (carouselRef.current) {
        carouselRef.current.style.cursor = "grab";
      }
      startAutoScroll();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    stopAutoScroll();
    const touch = e.touches[0];
    setStartX(touch.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    startAutoScroll();
  };

  return (
    <div
      className="relative py-2"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        // Removed CSS px classes, using inline style for perfect sync
        className="flex gap-4 items-center overflow-x-scroll pb-5 select-none scrollbar-hide overflow-hidden perspective-container"
        style={{
          scrollbarWidth: "none",
          cursor: "grab",
          userSelect: "none",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          paddingLeft: paddingX,
          paddingRight: paddingX,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        // onMouseLeave is handled on container to resume auto-scroll
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {repeatedItems.map((item, index) => {
          let rotateY = 0;
          let translateZ = 0;
          let scale = 0.8;
          let opacity = 0.5;
          let zIndex = 0;

          if (mounted) {
            const currentItemWidth = itemWidth; // Use state

            // Calculate center based on centralized paddingX state
            const itemCenterPos =
              paddingX + index * currentItemWidth + currentItemWidth / 2;
            const containerCenter = scrollPosition + viewportWidth / 2;

            const dist = itemCenterPos - containerCenter;
            const absDist = Math.abs(dist);
            // Dynamic range based on viewport width
            const range = viewportWidth * (viewportWidth >= 768 ? 0.6 : 0.85);
            const normalizedDist = Math.min(1, absDist / range);

            // Create a "Rolodex" or "Fan" style scroll
            rotateY = -(dist / range) * 20;
            const rotateZ = (dist / range) * 10;

            translateZ = -absDist * 0.5;

            scale = 1 - normalizedDist * 0.2;
            opacity = 1 - normalizedDist * 0.3;
            zIndex = 100 - Math.floor(absDist / 10);

            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 w-52 md:w-64 transition-transform duration-75 ease-out will-change-transform"
                style={{
                  transform: `perspective(1000px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
              >
                <Card className="group h-full shadow-2xl border-4 border-white">
                  <div className="relative overflow-hidden rounded-xl h-80 md:h-96">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </Card>
              </div>
            );
          }

          return null; // Should not happen after mount, but safe fallback
        })}
      </div>

      {/* Scroll Hint */}
      <div className="flex justify-center items-center gap-2 text-gray-500 text-sm my-5">
        <span>Drag to explore</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
