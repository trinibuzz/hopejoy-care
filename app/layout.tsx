import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Hope & Joy Assisted Living Placement Agency",
  description:
    "Helping families find safe, loving assisted living care across Trinidad, Tobago, and the Caribbean.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8EF] text-[#243232]">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}