import React, { useState, useRef, useEffect } from "react";
import FacebookCard from "@/components/ui/cards/FacebookCard";
import InstagramPostCard from "@/components/ui/cards/InstagramPostCard";
import LinkedInPost from "@/components/ui/cards/LinkedInPost";

interface CarouselItem {
  id: number;
  type: "facebook" | "instagram" | "linkedin";
  data?: any;
}

interface HeroCarouselProps {
  items?: CarouselItem[];
}

const HeroCarousel = ({ items: customItems }: HeroCarouselProps) => {
  // Default social media cards data
  const defaultItems: CarouselItem[] = [
    {
      id: 1,
      type: "facebook",
      data: {
        username: "Growthik Media",
        postTime: "2 hours ago",
        postContent:
          "🚀 Excited to share our latest digital marketing campaign results! Our client saw a 300% increase in engagement. Ready to transform your brand? Let's connect!",
        likes: 2847,
        comments: 156,
        shares: 89,
      },
    },
    {
      id: 2,
      type: "instagram",
      data: {
        username: "growthikmedia",
        location: "Digital Marketing Agency",
        likes: 3421,
        caption:
          "Creating stunning visual content that converts! 📸✨ Our creative team brings your brand vision to life.",
        commentsCount: 187,
        timeAgo: "3 hours ago",
      },
    },
    {
      id: 3,
      type: "linkedin",
      data: {
        pageName: "Growthik Media - Digital Solutions",
        followers: 25847,
        postTime: "1d",
        postContent:
          "Transforming businesses through innovative #digitalmarketing strategies. Our comprehensive approach delivers #results that matter. Connect with us to elevate your brand!",
        initialLikes: 542,
        commentsCount: 98,
        repostsCount: 67,
      },
    },
    {
      id: 4,
      type: "facebook",
      data: {
        username: "Digital Marketing Pro",
        postTime: "5 hours ago",
        postContent:
          "💡 Pro tip: Consistency is key in social media marketing! Our team helps you maintain a strong online presence across all platforms.",
        likes: 1923,
        comments: 94,
        shares: 56,
      },
    },
    {
      id: 5,
      type: "instagram",
      data: {
        username: "brandgrowth",
        location: "Creative Studio",
        likes: 2156,
        caption:
          "Behind the scenes of our latest photoshoot! 🎬 Quality content creation is our passion.",
        commentsCount: 143,
        timeAgo: "6 hours ago",
      },
    },
    {
      id: 6,
      type: "linkedin",
      data: {
        pageName: "Marketing Excellence Hub",
        followers: 18234,
        postTime: "2d",
        postContent:
          "Data-driven marketing strategies that deliver ROI. Our #analytics team ensures every campaign is optimized for #success.",
        initialLikes: 387,
        commentsCount: 76,
        repostsCount: 45,
      },
    },
    {
      id: 7,
      type: "facebook",
      data: {
        username: "Social Media Experts",
        postTime: "1 day ago",
        postContent:
          "🎯 Targeting the right audience is everything! Our advanced targeting strategies help you reach your ideal customers effectively.",
        likes: 3156,
        comments: 203,
        shares: 124,
      },
    },
  ];

  const items = customItems || defaultItems;

  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1000);

  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  const isDraggingRef = useRef<boolean>(false); // Ref for animation loop
  const dragThreshold = 5; // Pixels moved to consider it a drag
  const autoScrollSpeed = 0.5; // Pixels per frame

  // Create circular buffer for seamless looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  // Responsive widths - adjusted for card components
  const [itemWidth, setItemWidth] = useState(400);
  const [totalSetWidth, setTotalSetWidth] = useState(items.length * 400);
  const [paddingX, setPaddingX] = useState(0);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      const vw = window.innerWidth;
      setViewportWidth(vw);

      const isDesktop = vw >= 768;
      // Increased width for card components
      const newItemWidth = isDesktop ? 400 : 320;
      const newPaddingX = vw * (isDesktop ? 0.3 : 0.15);

      setItemWidth(newItemWidth);
      setPaddingX(newPaddingX);
      setTotalSetWidth(items.length * newItemWidth);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    if (carouselRef.current) {
      const initialWidth = window.innerWidth >= 768 ? 400 : 320;
      const initialTotalWidth = items.length * initialWidth;
      carouselRef.current.scrollLeft = initialTotalWidth;
      setScrollPosition(initialTotalWidth);
    }

    startAutoScroll();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      stopAutoScroll();
    };
  }, [items.length]);

  const startAutoScroll = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    const animate = () => {
      if (carouselRef.current && !isDraggingRef.current) {
        carouselRef.current.scrollLeft += autoScrollSpeed;
        checkScrollLoop();
        setScrollPosition(carouselRef.current.scrollLeft);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const checkScrollLoop = () => {
    if (!carouselRef.current) return;

    const vw = typeof window !== "undefined" ? window.innerWidth : 1000;
    const itemW = vw < 768 ? 320 : 400;
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
      if (isDragging) {
        checkScrollLoop();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;

    // Check if clicking on interactive elements (buttons, inputs, links)
    const target = e.target as HTMLElement;
    const isInteractive = target.closest(
      'button, input, a, textarea, select, [role="button"]'
    );

    if (isInteractive) {
      return; // Don't start dragging if clicking on interactive elements
    }

    stopAutoScroll();
    setIsDragging(true);
    isDraggingRef.current = true;
    setHasDragged(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    // Check if user has dragged beyond threshold
    if (Math.abs(walk) > dragThreshold) {
      setHasDragged(true);
    }

    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
    startAutoScroll();

    // Reset drag flag after a short delay
    setTimeout(() => setHasDragged(false), 100);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      isDraggingRef.current = false;
      if (carouselRef.current) {
        carouselRef.current.style.cursor = "grab";
      }
      startAutoScroll();
      setTimeout(() => setHasDragged(false), 100);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;

    // Check if touching interactive elements
    const target = e.target as HTMLElement;
    const isInteractive = target.closest(
      'button, input, a, textarea, select, [role="button"]'
    );

    if (isInteractive) {
      return; // Don't start dragging if touching interactive elements
    }

    stopAutoScroll();
    setHasDragged(false);
    const touch = e.touches[0];
    setStartX(touch.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    // Check if user has dragged beyond threshold
    if (Math.abs(walk) > dragThreshold) {
      setHasDragged(true);
    }

    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    startAutoScroll();
    setTimeout(() => setHasDragged(false), 100);
  };

  const renderCard = (item: CarouselItem) => {
    switch (item.type) {
      case "facebook":
        return <FacebookCard {...item.data} />;
      case "instagram":
        return <InstagramPostCard {...item.data} />;
      case "linkedin":
        return <LinkedInPost {...item.data} />;
      default:
        return null;
    }
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
        className="flex gap-6 items-center overflow-x-scroll pb-5 select-none scrollbar-hide overflow-hidden perspective-container"
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
            const currentItemWidth = itemWidth;

            const itemCenterPos =
              paddingX + index * currentItemWidth + currentItemWidth / 2;
            const containerCenter = scrollPosition + viewportWidth / 2;

            const dist = itemCenterPos - containerCenter;
            const absDist = Math.abs(dist);
            const range = viewportWidth * (viewportWidth >= 768 ? 0.6 : 0.85);
            const normalizedDist = Math.min(1, absDist / range);

            // 3D transformation effects
            rotateY = -(dist / range) * 20;
            const rotateZ = (dist / range) * 10;

            translateZ = -absDist * 0.5;

            scale = 1 - normalizedDist * 0.2;
            opacity = 1 - normalizedDist * 0.3;
            zIndex = 100 - Math.floor(absDist / 10);

            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 w-80 md:w-96 transition-transform duration-75 ease-out will-change-transform"
                style={{
                  transform: `perspective(1000px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
              >
                <div className="pointer-events-auto">{renderCard(item)}</div>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Scroll Hint */}
      <div className="flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 text-sm my-10">
        <span>Drag to explore our social media presence</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
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
