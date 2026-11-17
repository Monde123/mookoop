import { nid } from "./defaults";
import type { ProjectState, Slide } from "./types";
import { PROJECT_SCHEMA_VERSION } from "./constants";

export type DemoPreset = {
  id: string;
  name: string;
  category: string;
  description: string;
  badge: string;
  themeId: string;
  screenshot?: string;
  state: ProjectState;
};

export type DemoPresetId = string;

const t = (enText: string, frText: string) => ({
  en: enText,
  fr: frText,
});

export const DEMO_PRESETS: DemoPreset[] = [
  // 1. NovaPay (Fintech)
  {
    id: "novapay",
    name: "NovaPay",
    category: "Fintech & Sécurité",
    badge: "Populaire",
    description: "Ambiance premium et contrastée pour banques en ligne, cartes virtuelles et finance mondiale.",
    themeId: "obsidian-dark",
    screenshot: "/screenshots/demos/novapay.png",
    state: {
      schemaVersion: PROJECT_SCHEMA_VERSION,
      appName: "NovaPay",
      themeId: "obsidian-dark",
      fontId: "template-default",
      connectedCanvas: true,
      locales: ["en", "fr"],
      locale: "fr",
      device: "iphone",
      orientation: "portrait",
      slidesByDevice: {
        iphone: [
          {
            id: nid(),
            layout: "hero",
            label: t("GLOBAL PAYMENTS", "PAIEMENTS MONDIAUX"),
            headline: t("Borderless transfers\nwith zero hidden fees.", "Transferts mondiaux\nsans frais cachés."),
            screenshot: "/screenshots/demos/novapay.png",
          },
          {
            id: nid(),
            layout: "two-devices",
            label: t("HARDWARE SECURITY", "SÉCURITÉ DE RANG BANCAIRE"),
            headline: t("Institutional safety\nin your pocket.", "Sécurité institutionnelle\nau creux de votre main."),
            screenshot: "/screenshots/demos/novapay.png",
            screenshotSecondary: "/screenshots/demos/novapay.png",
          },
          {
            id: nid(),
            layout: "device-bottom",
            label: t("WEALTH INSIGHTS", "PILOTAGE EN TEMPS RÉEL"),
            headline: t("Track your assets\n24/7 in real time.", "Visualisez vos actifs\nen temps réel 24/7."),
            screenshot: "/screenshots/demos/novapay.png",
          },
          {
            id: nid(),
            layout: "device-top",
            label: t("VIRTUAL CARDS", "CARTES INSTANTANÉES"),
            headline: t("Instant cards for\nevery online purchase.", "Des cartes éphémères\npour vos achats en ligne."),
            screenshot: "/screenshots/demos/novapay.png",
            inverted: true,
          },
        ],
        android: [
          {
            id: nid(),
            layout: "hero",
            label: t("GLOBAL PAYMENTS", "PAIEMENTS MONDIAUX"),
            headline: t("Borderless transfers\nwith zero hidden fees.", "Transferts mondiaux\nsans frais cachés."),
            screenshot: "/screenshots/demos/novapay.png",
          },
          {
            id: nid(),
            layout: "device-bottom",
            label: t("WEALTH INSIGHTS", "PILOTAGE EN TEMPS RÉEL"),
            headline: t("Track your assets\n24/7 in real time.", "Visualisez vos actifs\nen temps réel 24/7."),
            screenshot: "/screenshots/demos/novapay.png",
          },
        ],
        "feature-graphic": [
          {
            id: nid(),
            layout: "feature-graphic",
            label: t("BORDERLESS BANKING", "BANQUE MONDIALE SANS FRONTIÈRES"),
            headline: t("Borderless Global Finance", "Finance Mondiale Sans Frontières"),
            screenshot: "/screenshots/demos/novapay.png",
            featureTilt: -6,
          },
        ],
        ipad: [],
        tvos: [],
        watchos: [],
        carplay: [],
        mac: [],
        "android-7": [],
        "android-10": [],
        "duo-outer": [],
        "duo-outer-landscape": [],
        "duo-inner": [],
        "duo-inner-landscape": [],
        "creative-universal": [],
        "creative-header": [],
        "creative-search": [],
      },
    },
  },

  // 2. PulseAI (IA & Productivité)
  {
    id: "pulseai",
    name: "PulseAI",
    category: "Productivité & IA",
    badge: "IA Pro",
    description: "Studio épuré et moderne pour applications SaaS, copilotes IA et assistants de productivité.",
    themeId: "minimal-slate",
    screenshot: "/screenshots/demos/pulseai.png",
    state: {
      schemaVersion: PROJECT_SCHEMA_VERSION,
      appName: "PulseAI",
      themeId: "minimal-slate",
      fontId: "template-default",
      connectedCanvas: true,
      locales: ["en", "fr"],
      locale: "fr",
      device: "iphone",
      orientation: "portrait",
      slidesByDevice: {
        iphone: [
          {
            id: nid(),
            layout: "hero",
            label: t("MEET PULSE AI", "DÉCOUVREZ PULSE AI"),
            headline: t("Design your workflow\nwith pure clarity.", "Structurez vos projets\nen toute clarté."),
            screenshot: "/screenshots/demos/pulseai.png",
          },
          {
            id: nid(),
            layout: "device-bottom",
            label: t("SEAMLESS SYNC", "SYNCHRO INSTANTANÉE"),
            headline: t("Real-time sync\nacross every screen.", "Synchronisation fluide\nsur tous vos appareils."),
            screenshot: "/screenshots/demos/pulseai.png",
          },
          {
            id: nid(),
            layout: "two-devices",
            label: t("INTELLIGENT AI", "INTELLIGENCE ARTIFICIELLE"),
            headline: t("Actionable insights\nthat keep you ahead.", "Des recommandations\nqui anticipent vos besoins."),
            screenshot: "/screenshots/demos/pulseai.png",
            screenshotSecondary: "/screenshots/demos/pulseai.png",
          },
          {
            id: nid(),
            layout: "device-top",
            label: t("COLLABORATION", "TRAVAIL EN ÉQUIPE"),
            headline: t("Export, share and\nship together.", "Partagez et exportez\nen un seul clic."),
            screenshot: "/screenshots/demos/pulseai.png",
            inverted: true,
          },
        ],
        android: [
          {
            id: nid(),
            layout: "hero",
            label: t("MEET PULSE AI", "DÉCOUVREZ PULSE AI"),
            headline: t("Design your workflow\nwith pure clarity.", "Structurez vos projets\nen toute clarté."),
            screenshot: "/screenshots/demos/pulseai.png",
          },
        ],
        "feature-graphic": [
          {
            id: nid(),
            layout: "feature-graphic",
            label: t("SMART WORKSPACE", "ESPACE DE TRAVAIL INTELLIGENT"),
            headline: t("The Intelligent Workspace", "L'Espace de Travail Intelligent"),
            screenshot: "/screenshots/demos/pulseai.png",
            featureTilt: -6,
          },
        ],
        ipad: [],
        tvos: [],
        watchos: [],
        carplay: [],
        mac: [],
        "android-7": [],
        "android-10": [],
        "duo-outer": [],
        "duo-outer-landscape": [],
        "duo-inner": [],
        "duo-inner-landscape": [],
        "creative-universal": [],
        "creative-header": [],
        "creative-search": [],
      },
    },
  },

  // 3. NomNom (Food Delivery & Gourmand)
  {
    id: "nomnom",
    name: "NomNom",
    category: "Food & Livraison",
    badge: "Gourmand",
    description: "Palette chaleureuse et appétissante pour la livraison de repas, recettes et restaurants.",
    themeId: "warm-editorial",
    screenshot: "/screenshots/demos/nomnom.png",
    state: {
      schemaVersion: PROJECT_SCHEMA_VERSION,
      appName: "NomNom",
      themeId: "warm-editorial",
      fontId: "template-default",
      connectedCanvas: true,
      locales: ["en", "fr"],
      locale: "fr",
      device: "android",
      orientation: "portrait",
      slidesByDevice: {
        android: [
          {
            id: nid(),
            layout: "hero",
            label: t("ARTISANAL FLAVORS", "SAVEURS ARTISANALES"),
            headline: t("Handcrafted burgers\ndelivered in minutes.", "Burgers d'exception\nlivrés chez vous en 20 min."),
            screenshot: "/screenshots/demos/nomnom.png",
          },
          {
            id: nid(),
            layout: "device-bottom",
            label: t("LOCAL PRODUCERS", "CIRCUITS COURTS"),
            headline: t("Direct from farms\nto your plate.", "Du producteur local\ndirectement à votre assiette."),
            screenshot: "/screenshots/demos/nomnom.png",
          },
        ],
        iphone: [
          {
            id: nid(),
            layout: "hero",
            label: t("ARTISANAL FLAVORS", "SAVEURS ARTISANALES"),
            headline: t("Handcrafted burgers\ndelivered in minutes.", "Burgers d'exception\nlivrés chez vous en 20 min."),
            screenshot: "/screenshots/demos/nomnom.png",
          },
        ],
        "feature-graphic": [
          {
            id: nid(),
            layout: "feature-graphic",
            label: t("GOURMET DELIVERY", "LIVRAISON GOURMANDE"),
            headline: t("Artisanal Flavors Everyday", "Le Goût du Fait Maison"),
            screenshot: "/screenshots/demos/nomnom.png",
            featureTilt: -6,
          },
        ],
        ipad: [],
        tvos: [],
        watchos: [],
        carplay: [],
        mac: [],
        "android-7": [],
        "android-10": [],
        "duo-outer": [],
        "duo-outer-landscape": [],
        "duo-inner": [],
        "duo-inner-landscape": [],
        "creative-universal": [],
        "creative-header": [],
        "creative-search": [],
      },
    },
  },

  // 4. Sphere (Réseaux Sociaux & Créateurs)
  {
    id: "sphere",
    name: "Sphere",
    category: "Réseaux Sociaux",
    badge: "Créateurs",
    description: "Design épuré et contemporain pour réseaux sociaux, créateurs de contenu et photographes.",
    themeId: "universal-azure",
    screenshot: "/screenshots/demos/sphere.png",
    state: {
      schemaVersion: PROJECT_SCHEMA_VERSION,
      appName: "Sphere",
      themeId: "universal-azure",
      fontId: "template-default",
      connectedCanvas: true,
      locales: ["en", "fr"],
      locale: "fr",
      device: "iphone",
      orientation: "portrait",
      slidesByDevice: {
        iphone: [
          {
            id: nid(),
            layout: "hero",
            label: t("VISUAL STORIES", "HISTOIRES VISUELLES"),
            headline: t("Share your journey\nwith the community.", "Partagez vos créations\navec le monde entier."),
            screenshot: "/screenshots/demos/sphere.png",
          },
          {
            id: nid(),
            layout: "two-devices",
            label: t("CREATOR PLATFORM", "ESPACE CRÉATEUR"),
            headline: t("Engage, connect and\ngrow your audience.", "Fédérez une communauté\nengagée et passionnée."),
            screenshot: "/screenshots/demos/sphere.png",
            screenshotSecondary: "/screenshots/demos/sphere.png",
          },
        ],
        android: [
          {
            id: nid(),
            layout: "hero",
            label: t("VISUAL STORIES", "HISTOIRES VISUELLES"),
            headline: t("Share your journey\nwith the community.", "Partagez vos créations\navec le monde entier."),
            screenshot: "/screenshots/demos/sphere.png",
          },
        ],
        "feature-graphic": [
          {
            id: nid(),
            layout: "feature-graphic",
            label: t("CREATIVE NETWORK", "RÉSEAU CRÉATIF"),
            headline: t("Where Creativity Lives", "L'Espace des Créateurs"),
            screenshot: "/screenshots/demos/sphere.png",
            featureTilt: -6,
          },
        ],
        ipad: [],
        tvos: [],
        watchos: [],
        carplay: [],
        mac: [],
        "android-7": [],
        "android-10": [],
        "duo-outer": [],
        "duo-outer-landscape": [],
        "duo-inner": [],
        "duo-inner-landscape": [],
        "creative-universal": [],
        "creative-header": [],
        "creative-search": [],
      },
    },
  },

  // 5. AuraFit (Santé & Fitness)
  {
    id: "aurafit",
    name: "AuraFit",
    category: "Santé & Fitness",
    badge: "Athlétique",
    description: "Contraste noir et néon pour le suivi d'activité, anneaux de progression et biométrie sportive.",
    themeId: "neon-athletic-night",
    screenshot: "/screenshots/demos/aurafit.png",
    state: {
      schemaVersion: PROJECT_SCHEMA_VERSION,
      appName: "AuraFit",
      themeId: "neon-athletic-night",
      fontId: "template-default",
      connectedCanvas: false,
      locales: ["en", "fr"],
      locale: "fr",
      device: "iphone",
      orientation: "portrait",
      slidesByDevice: {
        iphone: [
          {
            id: nid(),
            layout: "hero",
            label: t("ACTIVITY RINGS", "ANNEAUX D'ACTIVITÉ"),
            headline: t("Close your rings\nand push your limits.", "Bouclez vos anneaux\net dépassez vos records."),
            screenshot: "/screenshots/demos/aurafit.png",
          },
          {
            id: nid(),
            layout: "device-bottom",
            label: t("HEART RATE METRICS", "RYTHME CARDIAQUE"),
            headline: t("Real-time biometrics\nengineered for athletes.", "Analyse biométrique\nprécise en temps réel."),
            screenshot: "/screenshots/demos/aurafit.png",
          },
        ],
        android: [
          {
            id: nid(),
            layout: "hero",
            label: t("ACTIVITY RINGS", "ANNEAUX D'ACTIVITÉ"),
            headline: t("Close your rings\nand push your limits.", "Bouclez vos anneaux\net dépassez vos records."),
            screenshot: "/screenshots/demos/aurafit.png",
          },
        ],
        "feature-graphic": [
          {
            id: nid(),
            layout: "feature-graphic",
            label: t("ATHLETIC PERFORMANCE", "PERFORMANCE SPORTIVE"),
            headline: t("Engineered For Peak Performance", "Dépassez Vos Limites"),
            screenshot: "/screenshots/demos/aurafit.png",
            featureTilt: -6,
          },
        ],
        ipad: [],
        tvos: [],
        watchos: [],
        carplay: [],
        mac: [],
        "android-7": [],
        "android-10": [],
        "duo-outer": [],
        "duo-outer-landscape": [],
        "duo-inner": [],
        "duo-inner-landscape": [],
        "creative-universal": [],
        "creative-header": [],
        "creative-search": [],
      },
    },
  },

  // 6. LuxeShop (Mode & Luxe)
  {
    id: "luxeshop",
    name: "LuxeShop",
    category: "E-commerce & Luxe",
    badge: "Minimaliste",
    description: "Typographie éditoriale raffinée et mise en valeur minimaliste pour la mode et le luxe.",
    themeId: "clean-light",
    screenshot: "/screenshots/demos/luxeshop.png",
    state: {
      schemaVersion: PROJECT_SCHEMA_VERSION,
      appName: "Aesthete",
      themeId: "clean-light",
      fontId: "template-serif",
      connectedCanvas: false,
      locales: ["en", "fr"],
      locale: "fr",
      device: "iphone",
      orientation: "portrait",
      slidesByDevice: {
        iphone: [
          {
            id: nid(),
            layout: "hero",
            label: t("CURATED LUXURY", "SÉLECTION HAUTE COUTURE"),
            headline: t("Timeless elegance\ncrafted with pure wool.", "L'élégance intemporelle\nconçue en matières nobles."),
            screenshot: "/screenshots/demos/luxeshop.png",
          },
          {
            id: nid(),
            layout: "device-bottom",
            label: t("INSTANT CHECKOUT", "PAIEMENT SÉCURISÉ"),
            headline: t("Buy in one tap\nwith seamless Apple Pay.", "Commandez en un geste\navec Apple Pay sécurisé."),
            screenshot: "/screenshots/demos/luxeshop.png",
          },
        ],
        android: [
          {
            id: nid(),
            layout: "hero",
            label: t("CURATED LUXURY", "SÉLECTION HAUTE COUTURE"),
            headline: t("Timeless elegance\ncrafted with pure wool.", "L'élégance intemporelle\nconçue en matières nobles."),
            screenshot: "/screenshots/demos/luxeshop.png",
          },
        ],
        "feature-graphic": [
          {
            id: nid(),
            layout: "feature-graphic",
            label: t("TIMELESS ELEGANCE", "ÉLÉGANCE INTEMPORELLE"),
            headline: t("Minimalist Luxury Wardrobe", "Le Vestiaire Minimaliste"),
            screenshot: "/screenshots/demos/luxeshop.png",
            featureTilt: -6,
          },
        ],
        ipad: [],
        tvos: [],
        watchos: [],
        carplay: [],
        mac: [],
        "android-7": [],
        "android-10": [],
        "duo-outer": [],
        "duo-outer-landscape": [],
        "duo-inner": [],
        "duo-inner-landscape": [],
        "creative-universal": [],
        "creative-header": [],
        "creative-search": [],
      },
    },
  },
];

// Aliases for backwards compatibility with previous demo IDs
export const DEMO_PACKS = DEMO_PRESETS;
