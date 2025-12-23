import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Aditya Mourya | MERN & next.js Developer",
  description: "Portfolio built with Next.js & Tailwind CSS",
  keywords: "Aditya Mourya, Portfolio, MERN Stack, Next.js, Developer, Web Developer, Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white ">

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
