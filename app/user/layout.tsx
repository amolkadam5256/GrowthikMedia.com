// app/layout.tsx
import '../../styles/App.css';
import Header from '../../components/website/Header';
import Footer from '../../components/website/Footer';
import SEO from '../../components/website/SEO';
import PageViewTracker from '../../components/website/PageViewTracker';
import GTM from '../../components/website/GTM';

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
