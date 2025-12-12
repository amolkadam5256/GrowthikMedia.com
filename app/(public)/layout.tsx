// app/layout.tsx
import "../../styles/globals.css";
import "../../styles/globals.css";
import Header from "../../components/comman/header/Header";
import Footer from "../../components/comman/Footer";
import SEO from "../../components/comman/SEO";
import PageViewTracker from "../../components/comman/PageViewTracker";
import GTM from "../../components/comman/GTM";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageViewTracker />
          <GTM />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
