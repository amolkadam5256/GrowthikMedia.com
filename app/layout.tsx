// app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Growthik Media – Digital Marketing Agency",
  description: "Growthik Media helps businesses grow with SEO, Google Ads, Social Media, and Web Development.",
  openGraph: {
    title: "Growthik Media",
    description: "Digital marketing & SEO agency",
    url: "https://growthikmedia.com",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
