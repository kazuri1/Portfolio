import type { Metadata } from "next";
import { Geist, Geist_Mono, Domine } from "next/font/google";
import "pulseui-base/styles";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vignesh Vishnumoorthy - Portfolio",
  description: "Product Designer + Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${domine.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
