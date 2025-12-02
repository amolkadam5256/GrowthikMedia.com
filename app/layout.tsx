// app/layout.tsx
import '../styles/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PageViewTracker from '../components/PageViewTracker';
import GTM from '../components/GTM';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body>
        <PageViewTracker />
        <GTM />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
