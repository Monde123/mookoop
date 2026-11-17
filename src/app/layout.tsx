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
  title: "mookoop — Studio Open-Source de Mockups App Store & Google Play",
  description: "Concevez, personnalisez et exportez vos captures d'écran officielles et bannières Feature Graphic pour iOS et Android.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={lato.variable}>
      <body className={`${inter.className} ${lato.className}`}>{children}</body>
    </html>
  );
}
