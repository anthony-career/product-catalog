import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Details",
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
        <title>Prodog</title>
      </head>
      <body className='w-screen h-screen bg-red-300'>{children}</body>
    </html>
  );
}
