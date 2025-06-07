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
      <body className='w-screen h-screen overflow-hidden'>
        <div className='h-screen flex flex-col'>
          <div className='flex-none'>
            <Header />
          </div>

          <main className='flex-1 bg-main-pattern overflow-y-auto custom-scrollbar'>
            <div className='min-h-full flex flex-col '>
              <div className='flex-1 min-h-full'>{children}</div>
              <div className='flex-none'>
                <Footer />
              </div>
            </div>
          </main>

          <div className='flex-none bg-footerLight text-center text-gray-400 text-sm py-4'>
            © 2024 ShopNow. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  );
}
