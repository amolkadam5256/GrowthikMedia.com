import "../assets/styles/globals.css";
import "../assets/styles/fonts.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - Growthik Media",
  description: "Login or Register to Growthik Media",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="bg-gray-50 dark:bg-[#0A0A0A]"
      >
        <div className="min-h-screen w-full flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-[30px] shadow-2xl overflow-hidden max-w-[1200px] w-full min-h-[600px] flex flex-col md:flex-row">
            {/* Left Side - Form Area */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              {children}
            </div>

            {/* Right Side - Image/Brand Area */}
            <div className="hidden md:block w-1/2 bg-[var(--color-primary)] relative overflow-hidden p-12 text-white">
              {/* Decorative Curves */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

              {/* Glassmorphism Card Effect inside Right Panel */}
              <div className="relative h-full w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center justify-center p-8 text-center z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[var(--color-primary)] text-4xl">
                    ⚡
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Grow Your Business</h2>
                <p className="text-white/90 leading-relaxed">
                  Join Growthik Media dashboard to manage your campaigns, view
                  analytics, and boost your digital presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
