import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import CVPage from "@/components/CVPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <CVPage></CVPage>

    </main>
  );
}