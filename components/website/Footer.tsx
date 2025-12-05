// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Growthik Media. All rights reserved.</p>
        <p>
          Designed with ❤️ for businesses looking to grow online.
        </p>
      </div>
    </footer>
  );
}
