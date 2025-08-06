import type { Metadata } from "next";
import "pulseui-base/styles";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
