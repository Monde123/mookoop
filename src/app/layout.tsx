import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-lato" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mookoop.studio"),
  alternates: {
    canonical: "https://mookoop.studio",
  },
  title: {
    default: "mookoop — Studio Open-Source de Mockups App Store & Google Play",
    template: "%s — mookoop",
  },
  description:
    "Concevez, personnalisez et exportez vos captures d'écran officielles et bannières Feature Graphic pour iOS et Android en haute définition. 100% gratuit, sans inscription, respectueux de votre vie privée.",
  keywords: [
    "mookoop",
    "mookoop studio",
    "mockup app store",
    "google play feature graphic generator",
    "app store screenshot generator",
    "générateur capture d'écran store",
    "bannière google play 1024x500",
    "app mockups studio",
    "iphone bezels generator",
    "open source screenshot editor",
  ],
  authors: [{ name: "mookoop team" }],
  creator: "mookoop",
  publisher: "mookoop",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "mookoop — Studio Open-Source de Mockups App Store & Google Play",
    description:
      "Concevez, personnalisez et exportez vos captures d'écran officielles et bannières Feature Graphic pour iOS et Android.",
    url: "https://mookoop.studio",
    siteName: "mookoop",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mookoop — Studio Open-Source de Mockups App Store & Google Play",
    description:
      "Concevez, personnalisez et exportez vos captures d'écran officielles et bannières Feature Graphic pour iOS et Android.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "mookoop",
      url: "https://mookoop.studio",
      description:
        "Studio open-source de génération de captures d'écran et bannières officielles pour App Store et Google Play.",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      featureList: [
        "Export PNG 24-bit opaque sans canal alpha",
        "Bannières Feature Graphic Google Play 1024x500 interactives",
        "Cadres réels Apple et Android haute fidélité",
        "Persistance privée locale sans base de données externe",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que mookoop ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "mookoop est un studio en ligne gratuit et open-source conçu pour créer des captures d'écran officielles et des bannières Feature Graphic 1024x500 pour App Store et Google Play.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi mookoop garantit-il l'absence de canal alpha ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "App Store Connect et Google Play Console rejettent automatiquement les captures d'écran contenant un canal alpha de transparence. mookoop exporte nativement des fichiers PNG 24-bit opaques.",
          },
        },
        {
          "@type": "Question",
          name: "Mes images ou maquettes sont-elles envoyées sur un serveur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non. Toute la manipulation, le rendu graphique et la sauvegarde s'effectuent localement dans le navigateur de l'utilisateur pour une confidentialité totale.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={lato.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${lato.className}`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
