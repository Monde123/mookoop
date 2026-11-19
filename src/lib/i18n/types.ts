export type SupportedLocale = "fr" | "en";

export interface StoreSpecItem {
  target: string;
  store: string;
  category: "ios" | "android" | "macos";
  dimensions: string;
  aspect: string;
  colorDepth: string;
  alpha: string;
  mockupImage: string;
  notes: string;
}

export interface ArchitectureCard {
  tag: string;
  title: string;
  desc: string;
}

export interface Translations {
  nav: {
    models: string;
    specs: string;
    architecture: string;
    github: string;
    openStudio: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    deviceLabel: string;
    featureGraphicTag: string;
    featureGraphicRatio: string;
    featureGraphicTitle: string;
    featureGraphicDesc: string;
    featureGraphicCheck: string;
    cardIpadTitle: string;
    cardIpadDesc: string;
  };
  specs: {
    title: string;
    subtitle: string;
    verifiedBadge: string;
    fieldDimensions: string;
    fieldAspect: string;
    fieldColorDepth: string;
    fieldAlpha: string;
    renderedIn: string;
    ctaDesign: string;
    items: StoreSpecItem[];
  };
  demos: {
    badge: string;
    title: string;
    subtitle: string;
    themeLabel: string;
    openButton: string;
    screensCount: string;
    categories: {
      all: string;
      fintech: string;
      ai: string;
      ecommerce: string;
      food: string;
      fitness: string;
      social: string;
    };
    customCta: {
      badge: string;
      title: string;
      desc: string;
      button: string;
    };
    presets: Record<string, {
      name: string;
      category: string;
      badge: string;
      description: string;
    }>;
  };
  architecture: {
    title: string;
    subtitle: string;
    cards: [ArchitectureCard, ArchitectureCard, ArchitectureCard, ArchitectureCard];
  };
  cta: {
    title: string;
    subtitle: string;
    launchStudio: string;
    githubSource: string;
  };
  footer: {
    tagline: string;
    repo: string;
    license: string;
    zeroCloud: string;
  };
  studio: {
    toolbar: {
      homeTitle: string;
      models: string;
      modelsTooltip: string;
      appNamePlaceholder: string;
      appNameTitle: string;
      connected: string;
      isolated: string;
      connectedTooltip: string;
      isolatedTooltip: string;
      styleLab: string;
      styleLabTooltip: string;
      theme: string;
      font: string;
      importFont: string;
      replaceFont: string;
      importingFont: string;
      device: string;
      orientation: string;
      portrait: string;
      landscape: string;
      undo: string;
      redo: string;
      resetTooltip: string;
      downloadPng: string;
      downloadPngTooltip: string;
      exportBundle: string;
      exportBundleTooltip: string;
      exporting: string;
      saved: string;
      saving: string;
      saveFailed: string;
      retrySave: string;
      resetTitle: string;
      resetDescription: string;
      resetCurrentDevice: string;
      resetAllDevices: string;
      cancel: string;
    };
    sidebar: {
      title: string;
      screenSingular: string;
      screenPlural: string;
      reorderHint: string;
      emptyTitle: string;
      emptyDesc: string;
      addScreen: string;
    };
    inspector: {
      screenSettings: string;
      editing: string;
      layout: string;
      background: string;
      label: string;
      labelPromoBadge: string;
      labelPlaceholder: string;
      labelPromoPlaceholder: string;
      headline: string;
      tagline: string;
      headlinePlaceholder: string;
      taglinePlaceholder: string;
      newlineHint: string;
      copyIdeas: string;
      typography: string;
      fontSize: string;
      fontWeight: string;
      textAlign: string;
      alignLeft: string;
      alignCenter: string;
      alignRight: string;
      textColor: string;
      screenshot: string;
      screenshotSecondary: string;
      deviceTransform: string;
      scale: string;
      tilt: string;
      resetPosition: string;
      safeAreaNotice: string;
      activeElement: string;
    };
    canvas: {
      screen: string;
      landscape: string;
      isolated: string;
      zoom: string;
    };
    demosDialog: {
      title: string;
      description: string;
      applyButton: string;
      screensCount: string;
    };
    mobileNav: {
      screens: string;
      canvas: string;
      inspector: string;
    };
    loading: {
      ariaLabel: string;
    };
  };
}
