import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-lato" 
});

export const metadata: Metadata = {
  title: "mookoop — Universal App Store & Play Store Screenshot Studio",
  description: "Universal open-source studio to craft official mockups and store banners for iOS and Android.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className={`${inter.className} ${lato.className}`}>{children}</body>
    </html>
  );
}
