import type { Metadata } from "next";
import { Mona_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const monaSans = Mona_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CogNivia",
  description: "Empowering mental wellness through online and offline therapy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} ${inter.variable} font-sans`}>
        <Navbar/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
