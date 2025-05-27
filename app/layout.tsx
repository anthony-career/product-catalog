import { Metadata } from "next";
import "./globals.css";
import Header from "components/Header";
import Footer from "components/Footer";

export const metadata: Metadata = {
  description: "My Product catalog",
  keywords: ["product", "catalog", "details"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>ProcCat</title>
      </head>
      <body className='w-screen h-screen'>
        <div className='min-h-screen flex flex-col overflow-x-hidden'>
          <Header />
          <main className='flex-1  bg-main-pattern'>
            <div className='w-full px-4 sm:px-6 lg:px-8 py-8'>{children}</div>
          </main>
          <Footer />

          {/* Mobile Bottom Bar */}
          <div className='fixed bottom-0 left-0 right-0 bg-footerDark border-t border-gray-800 p-4 lg:hidden z-50'>
            <div className='flex space-x-4'>
              <button className='flex-1 bg-white text-footerDark px-4 py-2'>
                Add to Cart
              </button>
              <button className='flex-1 border border-white text-white px-4 py-2'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
