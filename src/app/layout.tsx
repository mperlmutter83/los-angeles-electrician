import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Los Angeles Electrician | Quality work at affordable prices",
    template: "%s | Los Angeles Electrician",
  },
  description: "Licensed electrician serving Los Angeles. Electrical repairs, installations, maintenance, wiring upgrades, lighting solutions, and panel upgrades for residential and commercial clients.",
  keywords: ["electrician", "Los Angeles", "electrical repairs", "electrical installation", "licensed electrician", "Encino", "LA electrician"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
