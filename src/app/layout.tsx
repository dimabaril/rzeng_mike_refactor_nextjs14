import { Inter } from "next/font/google";
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// className={` ${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] '}

// const tamilSangamMn = localFont({
//   src: "./fonts/tamil-sangam-mn.ttf",
//   variable: "--font-tamil-sangam-mn",
//   weight: "normal bold",
// });

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
      <body
        className={`${inter.className} h-screen antialiased`}
        // className={`h-screen antialiased`}
      >
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
