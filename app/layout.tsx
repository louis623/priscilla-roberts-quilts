import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priscilla Roberts — Every Stitch, a Story",
  description:
    "The quilting portfolio of Priscilla Roberts — twenty-five works, each made as a gift for the person it was designed around.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
