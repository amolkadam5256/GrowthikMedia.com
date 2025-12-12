// app/layout.tsx
import '../assets/styles/globals.css';
import '../assets/styles/fonts.css';
import Header from '../../components/comman/header/Header';
import Footer from '../../components/comman/Footer';
import SEO from '../../components/comman/SEO';
import PageViewTracker from '../../components/comman/PageViewTracker';
import GTM from '../../components/comman/GTM';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body suppressHydrationWarning={true}>
        <PageViewTracker />
        <GTM />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}