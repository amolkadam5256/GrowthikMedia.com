'use client';
export function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
          max-height: 0;
        }
        to {
          opacity: 1;
          transform: translateY(0);
          max-height: 2000px;
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
      
      .animate-slideDown {
        animation: slideDown 0.3s ease-out;
      }

      /* Gradient animation for featured items */
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .gradient-animate {
        background-size: 200% 200%;
        animation: gradientShift 3s ease infinite;
      }

      /* Adjust for mobile menu scrolling */
      @media (max-height: 800px) {
        .lg\\:hidden .max-h-\\[90vh\\] {
          max-height: 80vh;
        }
      }

      /* Custom scrollbar for mobile menu */
      .overflow-y-auto {
        scrollbar-width: thin;
        scrollbar-color: #ef4444 transparent;
      }

      .overflow-y-auto::-webkit-scrollbar {
        width: 4px;
      }

      .overflow-y-auto::-webkit-scrollbar-track {
        background: transparent;
      }

      .overflow-y-auto::-webkit-scrollbar-thumb {
        background-color: #ef4444;
        border-radius: 20px;
      }
    `}</style>
  );
}