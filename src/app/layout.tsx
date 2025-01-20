import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rzeng & Mike",
  description: "duo of intermedia artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
