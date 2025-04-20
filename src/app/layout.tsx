import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Trenton Paul",
  description: "Personal website of Trenton Paul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
