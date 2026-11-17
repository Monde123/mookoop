const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'screenshots', 'demos');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const W = 1080;
const H = 2340;

function statusBar(isDark = true) {
  const color = isDark ? '#ffffff' : '#000000';
  return `
    <!-- Status Bar -->
    <text x="70" y="80" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="600" fill="${color}">09:41</text>
    <g transform="translate(900, 56)">
      <!-- Signal -->
      <rect x="0" y="18" width="6" height="12" rx="2" fill="${color}" />
      <rect x="10" y="14" width="6" height="16" rx="2" fill="${color}" />
      <rect x="20" y="8" width="6" height="22" rx="2" fill="${color}" />
      <rect x="30" y="0" width="6" height="30" rx="2" fill="${color}" />
      <!-- Battery -->
      <rect x="52" y="4" width="46" height="22" rx="6" fill="none" stroke="${color}" stroke-width="3" />
      <rect x="56" y="8" width="34" height="14" rx="3" fill="${color}" />
      <rect x="100" y="10" width="4" height="10" rx="2" fill="${color}" />
    </g>
  `;
}

// 1. NovaPay (Fintech & Banking)
const novapaySvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#090E17"/>
      <stop offset="100%" stop-color="#04070C"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${statusBar(true)}

  <!-- Header -->
  <circle cx="105" cy="180" r="45" fill="#1E293B"/>
  <text x="105" y="192" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#38BDF8" text-anchor="middle">A</text>
  <text x="175" y="172" font-family="-apple-system, sans-serif" font-size="26" fill="#94A3B8">Bienvenue,</text>
  <text x="175" y="206" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF">Alexandre Dumas</text>
  <circle cx="980" cy="180" r="32" fill="#1E293B"/>
  <circle cx="980" cy="172" r="8" fill="#38BDF8"/>

  <!-- Main Balance Card -->
  <g transform="translate(60, 260)">
    <rect width="960" height="520" rx="40" fill="url(#cardGrad)" stroke="#334155" stroke-width="2"/>
    <text x="60" y="80" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="#94A3B8" letter-spacing="1">COMPTE PRINCIPAL EUR</text>
    <text x="60" y="170" font-family="-apple-system, sans-serif" font-size="76" font-weight="800" fill="#FFFFFF">24 850,40 €</text>
    <rect x="60" y="210" width="160" height="48" rx="24" fill="#065F46"/>
    <text x="140" y="242" font-family="-apple-system, sans-serif" font-size="24" font-weight="700" fill="#34D399" text-anchor="middle">+14,2 % ce mois</text>
    
    <text x="60" y="440" font-family="Courier, monospace" font-size="36" font-weight="700" fill="#E2E8F0" letter-spacing="4">••••  ••••  ••••  8824</text>
    <text x="860" y="440" font-family="-apple-system, sans-serif" font-size="32" font-weight="800" fill="#38BDF8" text-anchor="end">VISA Platinum</text>
  </g>

  <!-- Quick Actions -->
  <g transform="translate(60, 830)">
    <!-- Send -->
    <rect x="0" y="0" width="215" height="130" rx="30" fill="#1E293B"/>
    <text x="107" y="58" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">↗</text>
    <text x="107" y="98" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#F8FAFC" text-anchor="middle">Envoyer</text>

    <!-- Receive -->
    <rect x="248" y="0" width="215" height="130" rx="30" fill="#1E293B"/>
    <text x="355" y="58" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">↙</text>
    <text x="355" y="98" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#F8FAFC" text-anchor="middle">Recevoir</text>

    <!-- Virement -->
    <rect x="496" y="0" width="215" height="130" rx="30" fill="#1E293B"/>
    <text x="603" y="58" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">⇄</text>
    <text x="603" y="98" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#F8FAFC" text-anchor="middle">Virement</text>

    <!-- Stats -->
    <rect x="745" y="0" width="215" height="130" rx="30" fill="#1E293B"/>
    <text x="852" y="58" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">📊</text>
    <text x="852" y="98" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#F8FAFC" text-anchor="middle">Analyses</text>
  </g>

  <!-- Recent Transactions Section -->
  <g transform="translate(60, 1020)">
    <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="36" font-weight="700" fill="#F8FAFC">Transactions Récentes</text>
    <text x="960" y="0" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#38BDF8" text-anchor="end">Voir tout</text>

    <!-- Item 1: Apple -->
    <g transform="translate(0, 40)">
      <rect width="960" height="160" rx="30" fill="#111827"/>
      <circle cx="80" cy="80" r="45" fill="#1E293B"/>
      <text x="80" y="94" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">🍎</text>
      <text x="155" y="70" font-family="-apple-system, sans-serif" font-size="32" font-weight="700" fill="#F8FAFC">Apple Store Champs-Élysées</text>
      <text x="155" y="106" font-family="-apple-system, sans-serif" font-size="24" fill="#94A3B8">Aujourd'hui, 14:22 • Équipement</text>
      <text x="910" y="90" font-family="-apple-system, sans-serif" font-size="36" font-weight="800" fill="#F87171" text-anchor="end">- 1 299,00 €</text>
    </g>

    <!-- Item 2: Stripe Payout -->
    <g transform="translate(0, 230)">
      <rect width="960" height="160" rx="30" fill="#111827"/>
      <circle cx="80" cy="80" r="45" fill="#065F46"/>
      <text x="80" y="94" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">💰</text>
      <text x="155" y="70" font-family="-apple-system, sans-serif" font-size="32" font-weight="700" fill="#F8FAFC">Virement Stripe Inc.</text>
      <text x="155" y="106" font-family="-apple-system, sans-serif" font-size="24" fill="#94A3B8">Hier, 08:00 • Revenus SaaS</text>
      <text x="910" y="90" font-family="-apple-system, sans-serif" font-size="36" font-weight="800" fill="#34D399" text-anchor="end">+ 4 580,00 €</text>
    </g>

    <!-- Item 3: TGV Inoui -->
    <g transform="translate(0, 420)">
      <rect width="960" height="160" rx="30" fill="#111827"/>
      <circle cx="80" cy="80" r="45" fill="#1E293B"/>
      <text x="80" y="94" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">🚅</text>
      <text x="155" y="70" font-family="-apple-system, sans-serif" font-size="32" font-weight="700" fill="#F8FAFC">SNCF Connect</text>
      <text x="155" y="106" font-family="-apple-system, sans-serif" font-size="24" fill="#94A3B8">14 Nov • Déplacement Pro</text>
      <text x="910" y="90" font-family="-apple-system, sans-serif" font-size="36" font-weight="800" fill="#F87171" text-anchor="end">- 84,00 €</text>
    </g>

    <!-- Item 4: Spotify -->
    <g transform="translate(0, 610)">
      <rect width="960" height="160" rx="30" fill="#111827"/>
      <circle cx="80" cy="80" r="45" fill="#1E293B"/>
      <text x="80" y="94" font-family="-apple-system, sans-serif" font-size="38" text-anchor="middle">🎵</text>
      <text x="155" y="70" font-family="-apple-system, sans-serif" font-size="32" font-weight="700" fill="#F8FAFC">Spotify Premium</text>
      <text x="155" y="106" font-family="-apple-system, sans-serif" font-size="24" fill="#94A3B8">12 Nov • Abonnement</text>
      <text x="910" y="90" font-family="-apple-system, sans-serif" font-size="36" font-weight="800" fill="#F87171" text-anchor="end">- 10,99 €</text>
    </g>
  </g>

  <!-- Bottom Nav -->
  <g transform="translate(0, 2150)">
    <rect width="${W}" height="190" fill="#090E17" opacity="0.95"/>
    <text x="135" y="70" font-family="-apple-system, sans-serif" font-size="36" text-anchor="middle">🏠</text>
    <text x="135" y="110" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#38BDF8" text-anchor="middle">Accueil</text>

    <text x="405" y="70" font-family="-apple-system, sans-serif" font-size="36" text-anchor="middle">💳</text>
    <text x="405" y="110" font-family="-apple-system, sans-serif" font-size="22" font-weight="500" fill="#64748B" text-anchor="middle">Cartes</text>

    <text x="675" y="70" font-family="-apple-system, sans-serif" font-size="36" text-anchor="middle">📈</text>
    <text x="675" y="110" font-family="-apple-system, sans-serif" font-size="22" font-weight="500" fill="#64748B" text-anchor="middle">Bourse</text>

    <text x="945" y="70" font-family="-apple-system, sans-serif" font-size="36" text-anchor="middle">⚙️</text>
    <text x="945" y="110" font-family="-apple-system, sans-serif" font-size="22" font-weight="500" fill="#64748B" text-anchor="middle">Profil</text>
  </g>
</svg>`;

// 2. PulseAI (IA & Productivité)
const pulseAiSvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aiBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#aiBg)"/>
  ${statusBar(true)}

  <!-- AI Top Header -->
  <g transform="translate(60, 160)">
    <circle cx="50" cy="50" r="45" fill="url(#purpleGrad)"/>
    <text x="50" y="62" font-family="-apple-system, sans-serif" font-size="36" text-anchor="middle">✨</text>
    <text x="120" y="42" font-family="-apple-system, sans-serif" font-size="36" font-weight="800" fill="#FFFFFF">PulseAI Copilot</text>
    <circle cx="125" cy="75" r="7" fill="#10B981"/>
    <text x="145" y="82" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#10B981">Modèle Neural 3.5 Pro actif</text>
  </g>

  <!-- Conversation Area -->
  <!-- User prompt bubble -->
  <g transform="translate(180, 290)">
    <rect width="840" height="150" rx="30" fill="#1E293B"/>
    <text x="50" y="60" font-family="-apple-system, sans-serif" font-size="30" font-weight="600" fill="#FFFFFF">Analyse mon funnel d'acquisition mobile</text>
    <text x="50" y="105" font-family="-apple-system, sans-serif" font-size="24" fill="#94A3B8">et propose 3 optimisations pour le Play Store.</text>
  </g>

  <!-- AI Response Card -->
  <g transform="translate(60, 480)">
    <rect width="960" height="740" rx="35" fill="#1E1B4B" stroke="#6366F1" stroke-width="2"/>
    <circle cx="70" cy="70" r="30" fill="url(#purpleGrad)"/>
    <text x="70" y="80" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">⚡</text>
    <text x="125" y="78" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#C7D2FE">Recommandations Stratégiques</text>

    <!-- Point 1 -->
    <rect x="50" y="140" width="860" height="160" rx="20" fill="#0F172A" opacity="0.8"/>
    <text x="80" y="190" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#38BDF8">1. Feature Graphic 1024×500 à fort contraste</text>
    <text x="80" y="235" font-family="-apple-system, sans-serif" font-size="24" fill="#E2E8F0">Ajoutez un smartphone incliné en 3D avec un badge d'autorité.</text>
    <text x="80" y="270" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#34D399">+24% de taux de conversion estimé.</text>

    <!-- Point 2 -->
    <rect x="50" y="325" width="860" height="160" rx="20" fill="#0F172A" opacity="0.8"/>
    <text x="80" y="375" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#A78BFA">2. Titres d'écrans concis (3 à 5 mots max)</text>
    <text x="80" y="420" font-family="-apple-system, sans-serif" font-size="24" fill="#E2E8F0">Mettez en avant le bénéfice direct avant les détails techniques.</text>
    <text x="80" y="455" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#34D399">Augmente la rétention visuelle de 41%.</text>

    <!-- Point 3: Code snippet -->
    <rect x="50" y="510" width="860" height="180" rx="20" fill="#020617"/>
    <text x="80" y="560" font-family="Courier, monospace" font-size="24" fill="#F43F5E">export const <tspan fill="#60A5FA">storeConfig</tspan> = {</text>
    <text x="110" y="605" font-family="Courier, monospace" font-size="24" fill="#E2E8F0">  resolution: <tspan fill="#34D399">'1080x1920'</tspan>, colorDepth: <tspan fill="#FBBF24">24</tspan>,</text>
    <text x="110" y="650" font-family="Courier, monospace" font-size="24" fill="#E2E8F0">  exportEngine: <tspan fill="#A78BFA">'mookoop-local'</tspan></text>
    <text x="80" y="680" font-family="Courier, monospace" font-size="24" fill="#F43F5E">};</text>
  </g>

  <!-- Live Generation Input Bar -->
  <g transform="translate(60, 2080)">
    <rect width="960" height="140" rx="70" fill="#1E293B" stroke="#475569" stroke-width="2"/>
    <text x="70" y="82" font-family="-apple-system, sans-serif" font-size="28" fill="#94A3B8">Posez une question ou demandez un test...</text>
    <circle cx="890" cy="70" r="45" fill="url(#purpleGrad)"/>
    <text x="890" y="80" font-family="-apple-system, sans-serif" font-size="32" text-anchor="middle">↑</text>
  </g>
</svg>`;

// 3. NomNom (Food Delivery & Gourmand)
const nomnomSvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="foodBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#FDF6EC"/>
    </linearGradient>
    <linearGradient id="warmOrange" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#foodBg)"/>
  ${statusBar(false)}

  <!-- Location Header -->
  <g transform="translate(60, 160)">
    <text x="0" y="30" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#F97316">LIVRER À</text>
    <text x="0" y="75" font-family="-apple-system, sans-serif" font-size="38" font-weight="800" fill="#1C1917">Paris 11e • 24 Rue de Charonne ▾</text>
    <circle cx="930" cy="50" r="36" fill="#F3E8FF"/>
    <text x="930" y="62" font-family="-apple-system, sans-serif" font-size="30" text-anchor="middle">🥐</text>
  </g>

  <!-- Search Bar -->
  <g transform="translate(60, 280)">
    <rect width="960" height="120" rx="30" fill="#FFFFFF" stroke="#E7E5E4" stroke-width="2"/>
    <text x="50" y="72" font-family="-apple-system, sans-serif" font-size="30" fill="#A8A29E">🔍  Burger bio, Poké bowl, Ramen chaud...</text>
  </g>

  <!-- Category Pills -->
  <g transform="translate(60, 440)">
    <rect x="0" y="0" width="220" height="90" rx="45" fill="url(#warmOrange)"/>
    <text x="110" y="56" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#FFFFFF" text-anchor="middle">🍔 Burgers</text>

    <rect x="245" y="0" width="220" height="90" rx="45" fill="#FFFFFF" stroke="#E7E5E4" stroke-width="2"/>
    <text x="355" y="56" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#44403C" text-anchor="middle">🍜 Bowls</text>

    <rect x="490" y="0" width="220" height="90" rx="45" fill="#FFFFFF" stroke="#E7E5E4" stroke-width="2"/>
    <text x="600" y="56" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#44403C" text-anchor="middle">🍕 Pizzas</text>

    <rect x="735" y="0" width="225" height="90" rx="45" fill="#FFFFFF" stroke="#E7E5E4" stroke-width="2"/>
    <text x="847" y="56" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#44403C" text-anchor="middle">🥗 Healthy</text>
  </g>

  <!-- Featured Restaurant Hero Card -->
  <g transform="translate(60, 580)">
    <rect width="960" height="780" rx="40" fill="#FFFFFF" stroke="#E7E5E4" stroke-width="2"/>
    <!-- Image placeholder -->
    <rect x="20" y="20" width="920" height="420" rx="30" fill="#FED7AA"/>
    <text x="480" y="250" font-family="-apple-system, sans-serif" font-size="120" text-anchor="middle">🍔</text>
    <rect x="50" y="50" width="160" height="50" rx="25" fill="#EA580C"/>
    <text x="130" y="84" font-family="-apple-system, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">POPULAIRE</text>

    <!-- Details -->
    <text x="50" y="500" font-family="-apple-system, sans-serif" font-size="38" font-weight="800" fill="#1C1917">L'Artisan Burger Gourmet</text>
    <text x="50" y="545" font-family="-apple-system, sans-serif" font-size="26" fill="#78716C">Bœuf d'Aubrac, cheddar affiné 18 mois, frites fraîches</text>
    
    <g transform="translate(50, 600)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#EAB308">★ 4.9</text>
      <text x="80" y="0" font-family="-apple-system, sans-serif" font-size="26" fill="#78716C">(1 420 avis) • 15-20 min • Livraison offerte</text>
    </g>

    <g transform="translate(50, 650)">
      <rect width="860" height="80" rx="40" fill="url(#warmOrange)"/>
      <text x="430" y="52" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#FFFFFF" text-anchor="middle">Commander — 16,90 €</text>
    </g>
  </g>
</svg>`;

// 4. Sphere (Réseau Social & Créateurs)
const sphereSvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sphereBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
    <linearGradient id="storyRing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EC4899"/>
      <stop offset="50%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#sphereBg)"/>
  ${statusBar(false)}

  <!-- Brand Bar -->
  <g transform="translate(60, 160)">
    <text x="0" y="40" font-family="-apple-system, sans-serif" font-size="44" font-weight="900" fill="#0F172A" letter-spacing="-1">Sphere.</text>
    <text x="960" y="40" font-family="-apple-system, sans-serif" font-size="34" text-anchor="end">💬</text>
  </g>

  <!-- Stories Row -->
  <g transform="translate(60, 260)">
    <!-- Story 1: Current User -->
    <circle cx="80" cy="80" r="74" fill="none" stroke="#CBD5E1" stroke-width="4"/>
    <circle cx="80" cy="80" r="66" fill="#E2E8F0"/>
    <text x="80" y="94" font-family="-apple-system, sans-serif" font-size="44" text-anchor="middle">👤</text>
    <text x="80" y="190" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#64748B" text-anchor="middle">Votre story</text>

    <!-- Story 2 -->
    <circle cx="280" cy="80" r="74" fill="none" stroke="url(#storyRing)" stroke-width="5"/>
    <circle cx="280" cy="80" r="66" fill="#FDE047"/>
    <text x="280" y="94" font-family="-apple-system, sans-serif" font-size="44" text-anchor="middle">🎨</text>
    <text x="280" y="190" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#0F172A" text-anchor="middle">chloe.art</text>

    <!-- Story 3 -->
    <circle cx="480" cy="80" r="74" fill="none" stroke="url(#storyRing)" stroke-width="5"/>
    <circle cx="480" cy="80" r="66" fill="#93C5FD"/>
    <text x="480" y="94" font-family="-apple-system, sans-serif" font-size="44" text-anchor="middle">📸</text>
    <text x="480" y="190" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#0F172A" text-anchor="middle">marc_travel</text>

    <!-- Story 4 -->
    <circle cx="680" cy="80" r="74" fill="none" stroke="url(#storyRing)" stroke-width="5"/>
    <circle cx="680" cy="80" r="66" fill="#F472B6"/>
    <text x="680" y="94" font-family="-apple-system, sans-serif" font-size="44" text-anchor="middle">⚡</text>
    <text x="680" y="190" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#0F172A" text-anchor="middle">studio_lucas</text>
  </g>

  <!-- Main Feed Post -->
  <g transform="translate(60, 520)">
    <rect width="960" height="1100" rx="35" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <!-- Post Header -->
    <circle cx="70" cy="70" r="40" fill="#818CF8"/>
    <text x="70" y="82" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">🏔️</text>
    <text x="135" y="65" font-family="-apple-system, sans-serif" font-size="30" font-weight="700" fill="#0F172A">julien.outdoor</text>
    <text x="135" y="98" font-family="-apple-system, sans-serif" font-size="22" fill="#64748B">Aiguille du Midi, Chamonix</text>

    <!-- Post Photo -->
    <rect x="25" y="130" width="910" height="740" rx="25" fill="#38BDF8"/>
    <text x="480" y="520" font-family="-apple-system, sans-serif" font-size="140" text-anchor="middle">🏔️</text>

    <!-- Actions -->
    <g transform="translate(40, 910)">
      <text x="0" y="40" font-family="-apple-system, sans-serif" font-size="38">❤️  💬  ↗️</text>
      <text x="880" y="40" font-family="-apple-system, sans-serif" font-size="38" text-anchor="end">🔖</text>
    </g>

    <!-- Caption -->
    <text x="40" y="1000" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#0F172A">4 820 mentions J'aime</text>
    <text x="40" y="1045" font-family="-apple-system, sans-serif" font-size="24" fill="#334155"><tspan font-weight="700">julien.outdoor</tspan> Premier lever de soleil au sommet à 3 842m... Sublime.</text>
  </g>
</svg>`;

// 5. AuraFit (Santé & Sport)
const aurafitSvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fitBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0A0B0E"/>
      <stop offset="100%" stop-color="#020304"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#fitBg)"/>
  ${statusBar(true)}

  <!-- Title -->
  <g transform="translate(60, 160)">
    <text x="0" y="30" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#A3E635">MARDI 18 NOVEMBRE</text>
    <text x="0" y="80" font-family="-apple-system, sans-serif" font-size="46" font-weight="800" fill="#FFFFFF">Activité &amp; Santé</text>
  </g>

  <!-- 3 Activity Rings Card -->
  <g transform="translate(60, 290)">
    <rect width="960" height="520" rx="40" fill="#18181B" stroke="#27272A" stroke-width="2"/>
    <!-- Circles -->
    <g transform="translate(260, 260)">
      <!-- Move Ring -->
      <circle cx="0" cy="0" r="180" fill="none" stroke="#3F3F46" stroke-width="32"/>
      <circle cx="0" cy="0" r="180" fill="none" stroke="#F43F5E" stroke-width="32" stroke-dasharray="880" stroke-dashoffset="180" stroke-linecap="round"/>

      <!-- Exercise Ring -->
      <circle cx="0" cy="0" r="135" fill="none" stroke="#3F3F46" stroke-width="32"/>
      <circle cx="0" cy="0" r="135" fill="none" stroke="#A3E635" stroke-width="32" stroke-dasharray="660" stroke-dashoffset="80" stroke-linecap="round"/>

      <!-- Stand Ring -->
      <circle cx="0" cy="0" r="90" fill="none" stroke="#3F3F46" stroke-width="32"/>
      <circle cx="0" cy="0" r="90" fill="none" stroke="#38BDF8" stroke-width="32" stroke-dasharray="440" stroke-dashoffset="110" stroke-linecap="round"/>
    </g>

    <!-- Ring Stats -->
    <g transform="translate(540, 130)">
      <text x="0" y="40" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#F43F5E">BOUGER</text>
      <text x="0" y="85" font-family="-apple-system, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF">640 <tspan font-size="26" fill="#A1A1AA">/ 700 kcal</tspan></text>

      <text x="0" y="160" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#A3E635">M'EXERCER</text>
      <text x="0" y="205" font-family="-apple-system, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF">48 <tspan font-size="26" fill="#A1A1AA">/ 30 min</tspan></text>

      <text x="0" y="280" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#38BDF8">ME LEVER</text>
      <text x="0" y="325" font-family="-apple-system, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF">11 <tspan font-size="26" fill="#A1A1AA">/ 12 h</tspan></text>
    </g>
  </g>

  <!-- Heart Rate Card -->
  <g transform="translate(60, 850)">
    <rect width="960" height="380" rx="40" fill="#18181B" stroke="#27272A" stroke-width="2"/>
    <text x="60" y="70" font-family="-apple-system, sans-serif" font-size="30" font-weight="700" fill="#F43F5E">❤️ Fréquence Cardiaque</text>
    <text x="60" y="150" font-family="-apple-system, sans-serif" font-size="68" font-weight="800" fill="#FFFFFF">142 <tspan font-size="30" fill="#A1A1AA">BPM</tspan></text>
    <text x="60" y="195" font-family="-apple-system, sans-serif" font-size="24" fill="#34D399">Zone d'entraînement Aérobie</text>

    <!-- ECG wave simulation -->
    <path d="M 60 300 L 250 300 L 290 230 L 330 360 L 370 200 L 410 320 L 450 300 L 900 300" fill="none" stroke="#F43F5E" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>`;

// 6. LuxeShop (Mode & E-Commerce)
const luxeshopSvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="luxeBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FAF9F6"/>
      <stop offset="100%" stop-color="#F2EFE9"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#luxeBg)"/>
  ${statusBar(false)}

  <!-- Brand Title -->
  <g transform="translate(60, 160)">
    <text x="480" y="40" font-family="'Times New Roman', serif" font-size="44" font-weight="400" fill="#1C1917" letter-spacing="6" text-anchor="middle">A E S T H E T E</text>
    <text x="960" y="40" font-family="-apple-system, sans-serif" font-size="34" text-anchor="end">🛍️</text>
  </g>

  <!-- Product Card -->
  <g transform="translate(60, 260)">
    <rect width="960" height="1100" rx="35" fill="#FFFFFF" stroke="#E7E5E4" stroke-width="2"/>
    <!-- Photo Area -->
    <rect x="25" y="25" width="910" height="700" rx="25" fill="#E7E5E4"/>
    <text x="480" y="410" font-family="-apple-system, sans-serif" font-size="160" text-anchor="middle">🧥</text>
    
    <!-- Info -->
    <text x="60" y="800" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#A8A29E" letter-spacing="2">COLLECTION AUTOMNE 2026</text>
    <text x="60" y="855" font-family="'Times New Roman', serif" font-size="42" font-weight="600" fill="#1C1917">Manteau Minimaliste en Laine Vierge</text>
    <text x="60" y="930" font-family="-apple-system, sans-serif" font-size="46" font-weight="700" fill="#1C1917">480,00 €</text>

    <!-- Sizes -->
    <g transform="translate(60, 980)">
      <rect x="0" y="0" width="80" height="80" rx="20" fill="#1C1917"/>
      <text x="40" y="50" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#FFFFFF" text-anchor="middle">S</text>

      <rect x="110" y="0" width="80" height="80" rx="20" fill="#F5F5F4" stroke="#D6D3D1" stroke-width="2"/>
      <text x="150" y="50" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="#1C1917" text-anchor="middle">M</text>

      <rect x="220" y="0" width="80" height="80" rx="20" fill="#F5F5F4" stroke="#D6D3D1" stroke-width="2"/>
      <text x="260" y="50" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="#1C1917" text-anchor="middle">L</text>
    </g>
  </g>

  <!-- Buy Button -->
  <g transform="translate(60, 1420)">
    <rect width="960" height="120" rx="60" fill="#000000"/>
    <text x="480" y="74" font-family="-apple-system, sans-serif" font-size="32" font-weight="700" fill="#FFFFFF" text-anchor="middle">Acheter avec Apple Pay</text>
  </g>
</svg>`;

async function run() {
  const list = [
    { name: 'novapay.png', svg: novapaySvg },
    { name: 'pulseai.png', svg: pulseAiSvg },
    { name: 'nomnom.png', svg: nomnomSvg },
    { name: 'sphere.png', svg: sphereSvg },
    { name: 'aurafit.png', svg: aurafitSvg },
    { name: 'luxeshop.png', svg: luxeshopSvg },
  ];

  for (const item of list) {
    const dest = path.join(outputDir, item.name);
    console.log(`Generating ${item.name}...`);
    await sharp(Buffer.from(item.svg))
      .png({ quality: 90, compressionLevel: 8 })
      .toFile(dest);
    const stat = fs.statSync(dest);
    console.log(`Saved ${item.name} (${stat.size} bytes)`);
  }
}

run().catch(console.error);
