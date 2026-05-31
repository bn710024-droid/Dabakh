'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowRight, ShoppingCart, Search, X } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  )
}

type Product = {
  name: string
  img: string
  ref?: string
  desc: string
  specs?: string[]
}

const hikProducts: Product[] = [
  {
    name: 'Dôme 4MP ColorVu AcuSense',
    ref: 'DS-2CD2147G2-SU',
    img: '/images/hik-cam-1.png',
    desc: 'Caméra dôme extérieure ColorVu avec détection humaine AcuSense, micro intégré et vision couleur totale la nuit.',
    specs: ['Résolution 4MP', 'Vision couleur nuit', 'Micro intégré', 'IP67 + IK10', 'IR 60m'],
  },
  {
    name: 'Dôme 4MP AcuSense Noir',
    ref: 'DS-2CD2143G2-IS',
    img: '/images/hik-cam-2.png',
    desc: 'Caméra dôme noire avec audio bidirectionnel, détection intelligente AcuSense et compression H.265+.',
    specs: ['Résolution 4MP', 'Audio bidirectionnel', 'IP67 + IK10', 'IR 40m', 'H.265+'],
  },
  {
    name: 'Bullet 4MP ColorVu Sirène',
    ref: 'DS-2CD2T47G2-LSU/SL',
    img: '/images/hik-cam-3.jpeg',
    desc: 'Caméra bullet dissuasive avec sirène intégrée, lumière stroboscopique et vision couleur nuit sur 60m.',
    specs: ['Résolution 4MP', 'Sirène intégrée', 'Lumière stroboscopique', 'IP67', 'Lumière blanche 60m'],
  },
  {
    name: 'Bullet 4MP ColorVu AcuSense',
    ref: 'DS-2CD2T47G2-L',
    img: '/images/hik-cam-4.jpeg',
    desc: 'Caméra bullet longue portée avec technologie ColorVu pour une image couleur nette de nuit.',
    specs: ['Résolution 4MP', 'ColorVu nuit', 'Objectif 4mm', 'IP67', 'H.265+'],
  },
  {
    name: 'Turret 8MP 4K ColorVu',
    ref: 'DS-2CD2087G2-LU',
    img: '/images/hik-cam-5.jpeg',
    desc: 'Caméra turret 4K ultra haute définition avec micro intégré et LED blanche pour une vision couleur parfaite.',
    specs: ['Résolution 8MP 4K', 'Micro intégré', 'LED blanche 30m', 'IP67', 'Coloris noir'],
  },
  {
    name: 'Bullet 4MP DarkFighter',
    ref: 'DS-2CD2T46G2-2I',
    img: '/images/hik-cam-6.jpeg',
    desc: 'Caméra bullet à ultra faible luminosité avec technologie DarkFighter pour des images nettes en conditions extrêmes.',
    specs: ['Résolution 4MP', 'Ultra faible luminosité', 'IR 60m', 'IP67', 'Blanc et noir'],
  },
  {
    name: 'PTZ 4MP 25x Zoom',
    ref: 'DS-2DE4425IW-DE',
    img: '/images/hik-cam-7.jpeg',
    desc: 'Caméra PTZ professionnelle avec zoom optique 25x et rotation 360° pour une couverture totale.',
    specs: ['Résolution 4MP', 'Zoom optique 25x', 'Rotation 360°', 'IR 100m', 'IP66'],
  },
  {
    name: 'PTZ 4MP 42x DarkFighter',
    ref: 'DS-2DF8442IXS-AELW(T2)',
    img: '/images/hik-cam-8.jpeg',
    desc: 'Caméra PTZ haut de gamme avec zoom 42x, essuie-glace intégré et portée infrarouge de 200m.',
    specs: ['Résolution 4MP', 'Zoom 42x', 'IR 200m', 'IP66 + IK10', 'Essuie-glace'],
  },
  {
    name: 'Turret 4MP ColorVu',
    ref: 'DS-2CD2347G2-LU',
    img: '/images/hik-cam-9.jpeg',
    desc: 'Caméra turret ColorVu avec LED blanche longue portée et compression H.265+ pour stockage optimisé.',
    specs: ['Résolution 4MP', 'ColorVu nuit', 'LED blanche 60m', 'IP67', 'H.265+'],
  },
  {
    name: 'Turret 8MP DarkFighter Gris',
    ref: 'DS-2CD2386G2-IU',
    img: '/images/hik-cam-10.jpeg',
    desc: 'Caméra turret 4K avec micro intégré et technologie DarkFighter pour les environnements à faible éclairage.',
    specs: ['Résolution 8MP 4K', 'Micro intégré', 'IR 60m', 'IP67', 'Coloris gris'],
  },
]

const dahProducts: Product[] = [
  {
    name: 'Dôme 8MP Smart Dual Light WizSense',
    ref: 'IPC-HDW2849TM-S-IL',
    img: '/images/dah-cam-1.jpeg',
    desc: 'Caméra dôme 8MP noire avec double éclairage IR + blanc et détection intelligente des humains et véhicules.',
    specs: ['Résolution 8MP', 'Smart Dual Light IR + blanc', 'WizSense AI humain/véhicule', 'IP67', 'H.265+, 2.8mm'],
  },
  {
    name: 'Turret 8MP TiOC Full Color Active Deterrence',
    ref: 'IPC-HDW3849H-AS-PV',
    img: '/images/dah-cam-2.jpeg',
    desc: 'Caméra turret Full Color 24h/24 avec sirène intégrée, lumière stroboscopique et audio bidirectionnel pour dissuasion active.',
    specs: ['Résolution 8MP', 'Full Color 24h/24', 'Sirène intégrée', 'Lumière stroboscopique', 'IP67, audio bidirectionnel'],
  },
  {
    name: 'Bullet 8MP Smart Dual Light WizSense',
    ref: 'IPC-HFW2849S-S-IL',
    img: '/images/dah-cam-3.jpeg',
    desc: 'Caméra bullet noire 8MP avec double éclairage IR 30m + blanc 30m et intelligence artificielle WizSense.',
    specs: ['Résolution 8MP', 'IR 30m + blanc 30m', 'WizSense AI', 'IP67', 'H.265+, 2.8mm'],
  },
  {
    name: 'Bullet 8MP TiOC Pro Double Objectif',
    ref: 'IPC-HFW3849T1-AS-PV-PRO',
    img: '/images/dah-cam-4.jpeg',
    desc: 'Caméra bullet haut de gamme avec double objectif panoramique, sirène, stroboscope rouge/bleu et Full Color.',
    specs: ['Résolution 8MP', 'Double objectif panoramique', 'Sirène + stroboscope rouge/bleu', 'Full Color', 'IP67, AI intégré'],
  },
  {
    name: 'Bullet 8MP Dual Light Compact',
    ref: 'DH-IPC-HFW2849S-S-IL',
    img: '/images/dah-cam-5.jpeg',
    desc: 'Caméra bullet compacte noire 8MP avec IR et lumière blanche intégrés, idéale pour petits espaces.',
    specs: ['Résolution 8MP', 'Format compact', 'IR + lumière blanche', 'WizSense', 'IP67, H.265+'],
  },
  {
    name: 'Turret 8MP TiOC Full Color Noir',
    ref: 'IPC-HDW3849H-AS-PV-0280B-S4',
    img: '/images/dah-cam-6.jpeg',
    desc: 'Caméra turret noire Full Color nuit avec dissuasion active, audio intégré et détection AI humain/véhicule.',
    specs: ['Résolution 8MP', 'Full Color nuit', 'Dissuasion active', 'Audio intégré', 'IP67, AI humain/véhicule'],
  },
  {
    name: 'Turret 8MP Lite IR Fixe',
    ref: 'DH-IPC-HDW2831T-AS-S2',
    img: '/images/dah-cam-7.jpeg',
    desc: 'Caméra turret blanche 8MP compacte avec micro intégré et IR 30m, parfaite pour les installations intérieures/extérieures.',
    specs: ['Résolution 8MP', 'IR 30m', 'Fixe 2.8mm', 'Micro intégré', 'IP67, H.265+'],
  },
  {
    name: 'PTZ 4MP 25x Zoom AI WizSense',
    ref: 'DH-SD49425XB-HNR-S3',
    img: '/images/dah-cam-8.jpeg',
    desc: 'Caméra PTZ intelligente 4MP avec zoom optique 25x, WizSense AI et rotation 360° pour surveillance totale.',
    specs: ['Résolution 4MP', 'Zoom optique 25x', 'WizSense AI', 'Rotation 360°, IR 100m', 'IP66, H.265+'],
  },
  {
    name: 'PTZ 8MP 4K 25x Starlight',
    ref: 'SD49825XB-HNR',
    img: '/images/dah-cam-9.jpeg',
    desc: 'Caméra PTZ 4K ultra haute définition avec technologie Starlight pour des images nettes en ultra faible luminosité.',
    specs: ['Résolution 8MP 4K', 'Zoom optique 25x', 'Starlight ultra faible luminosité', 'IR 100m', 'IP66, H.265+'],
  },
  {
    name: 'Fisheye 12MP Panoramique 360°',
    ref: 'IPC-EBW81230',
    img: '/images/dah-cam-10.jpeg',
    desc: 'Caméra fisheye 12MP avec objectif grand angle pour une couverture totale 360° en un seul point d\'installation.',
    specs: ['Résolution 12MP', 'Objectif fisheye 1.98mm', 'Couverture 360°', 'IR 10m', 'IP66, installation plafond'],
  },
]

const hikAccessProducts: Product[] = [
  {
    name: 'Terminal Facial + Empreinte + RFID',
    ref: 'DS-K1T342EFWX',
    img: '/images/acc-cam-1.jpeg',
    desc: 'Terminal multimodal avec reconnaissance faciale, empreinte digitale et RFID pour une sécurité maximale.',
    specs: ['Reconnaissance faciale', 'Empreinte digitale', 'RFID', 'Écran tactile couleur', 'TCP/IP', 'Capacité 6000 visages'],
  },
  {
    name: 'Terminal Facial 3D 8MP',
    ref: 'DS-K1T671TM-3XF',
    img: '/images/acc-cam-2.jpeg',
    desc: 'Terminal facial haute précision 8MP avec reconnaissance 3D, détection masque et large capacité.',
    specs: ['Caméra 8MP', 'Reconnaissance faciale 3D', 'Détection masque', 'Écran 4"', 'TCP/IP', 'Capacité 20000 visages'],
  },
  {
    name: 'Contrôleur Double Porte',
    ref: 'DS-K2602',
    img: '/images/acc-cam-3.jpeg',
    desc: 'Contrôleur d\'accès pour deux portes avec anti-passback, alarme intégrée et grande capacité de cartes.',
    specs: ['2 portes', '100000 cartes', 'TCP/IP', 'Anti-passback', 'Alarme intégrée', 'Alimentation 12V'],
  },
  {
    name: 'Terminal Empreinte + RFID + Clavier',
    ref: 'DS-K1T804MF',
    img: '/images/acc-cam-4.jpeg',
    desc: 'Terminal biométrique combinant empreinte digitale, RFID Mifare et clavier tactile pour une triple authentification.',
    specs: ['Empreinte digitale', 'RFID Mifare', 'Clavier tactile', 'Écran LCD', 'TCP/IP', '3000 empreintes'],
  },
  {
    name: 'Serrure Magnétique 500kg',
    ref: 'DS-K4H450S',
    img: '/images/acc-cam-5.jpeg',
    desc: 'Serrure magnétique haute résistance 500kg pour portes sécurisées, avec LED de statut et résistance aux intempéries.',
    specs: ['Force 500kg', 'Alimentation 12V DC', 'LED statut', 'Résistante intempéries', 'Installation encastrée'],
  },
]

const dahAccessProducts: Product[] = [
  {
    name: 'Terminal Facial + Température',
    ref: 'ASI7213X-V1-T1',
    img: '/images/acc-cam-6.jpeg',
    desc: 'Terminal intelligent avec reconnaissance faciale, mesure de température corporelle et accès multi-modal.',
    specs: ['Reconnaissance faciale', 'Mesure température corporelle', 'PIN + carte RFID', 'Écran tactile 5"', 'TCP/IP', 'Capacité 10000 visages'],
  },
  {
    name: 'Contrôleur DIN Rail 2 Portes',
    ref: 'ASC1202B-S',
    img: '/images/acc-cam-7.jpeg',
    desc: 'Contrôleur d\'accès compact montage DIN rail pour 2 portes avec anti-passback et alarmes.',
    specs: ['2 portes', 'Montage DIN rail', '100000 cartes', 'TCP/IP', 'Anti-passback', 'Entrées/sorties alarme'],
  },
  {
    name: 'Lecteur Inscription Carte EM USB',
    ref: 'DHI-ASM100-D-V1',
    img: '/images/acc-cam-8.jpeg',
    desc: 'Lecteur USB plug & play pour inscription et lecture de cartes EM 125kHz, compatible DSS/SmartPSS.',
    specs: ['Connexion USB', 'Carte EM 125kHz', 'Compatible DSS/SmartPSS', 'Plug and play'],
  },
  {
    name: 'Interphone IP Vidéo 2 Fils PoE',
    ref: 'VTO2202F-P-S2',
    img: '/images/acc-cam-9.jpeg',
    desc: 'Interphone IP vidéo PoE avec caméra grand angle 180°, résistant aux intempéries et audio bidirectionnel.',
    specs: ['Caméra grand angle 180°', 'PoE 48V', 'IP65', 'Audio bidirectionnel', 'Compatible VTH Dahua'],
  },
  {
    name: 'Terminal Autonome Empreinte + Carte',
    ref: 'ASI1212F-D',
    img: '/images/acc-cam-10.jpeg',
    desc: 'Terminal autonome sans serveur combinant empreinte digitale et carte ID avec écran LCD 2.8".',
    specs: ['Empreinte digitale', 'Carte ID', 'Écran LCD 2.8"', 'TCP/IP', '3000 empreintes', 'Autonome sans serveur'],
  },
]

const categories = [
  {
    id: 'surveillance',
    label: 'Télésurveillance',
    color: '#E8600A',
    brand: 'Hikvision · Dahua',
    products: hikProducts,
  },
  {
    id: 'access',
    label: 'Contrôle d\'Accès',
    color: '#1A7A3C',
    brand: 'Hikvision · Dahua',
    products: hikAccessProducts,
  },
  {
    id: 'fire',
    label: 'Sécurité Incendie',
    color: '#E8600A',
    brand: 'DETNOV · TELETEK · AFRISO',
    products: [
      {
        name: 'Détecteur Optique de Fumée Conventionnel',
        ref: 'DOF-CONV',
        img: '/images/fire-cam-1.jpeg',
        desc: 'Détecteur optique conventionnel par diffusion de lumière, couvrant jusqu\'à 60 m² avec socle inclus.',
        specs: ['Technologie optique par diffusion', 'Capacité 60 m²', 'Hauteur max 12 m', 'Alimentation 16–28 Vcc', 'Socle inclus'],
      },
      {
        name: 'Détecteur de Fumée Optique DETNOV',
        ref: 'DOTD-230A-I',
        img: '/images/fire-cam-2.jpeg',
        desc: 'Détecteur de fumée optique adressable DETNOV avec indicateur LED et certification EN 54.',
        specs: ['Indicateur LED intégré', 'Certification EN 54', 'Protection IP 20', 'Compatible centrales adressables'],
      },
      {
        name: 'Détecteur de Température Fixe TELETEK',
        ref: 'SensoMAG-F10',
        img: '/images/fire-cam-3.jpeg',
        desc: 'Détecteur thermique à seuil fixe 60°C certifié EN 54-5, idéal pour cuisines et locaux techniques.',
        specs: ['Seuil fixe 60°C', 'Certification EN 54-5', 'Socle vendu séparément', 'Cuisines et locaux techniques'],
      },
      {
        name: 'Détecteur de Monoxyde de Carbone (CO)',
        ref: 'CO-LCD',
        img: '/images/fire-cam-4.jpeg',
        desc: 'Détecteur CO avec affichage LCD en temps réel, alarme sonore intégrée et double alimentation.',
        specs: ['Affichage LCD concentration CO', 'Alarme sonore intégrée', 'Détection par seuils progressifs', 'Alimentation secteur ou batterie'],
      },
      {
        name: 'Détecteur de Fuite Gaz AFRISO',
        ref: 'GSP1',
        img: '/images/fire-cam-5.jpeg',
        desc: 'Détecteur portable professionnel pour gaz naturel, butane et propane avec sonde flexible orientable.',
        specs: ['Gaz naturel, butane, propane', 'Appareil portable professionnel', 'Sonde flexible orientable', 'Affichage numérique intégré'],
      },
      {
        name: 'Centrale Détection Incendie Adressable 1 Boucle',
        ref: 'CDI-1B',
        img: '/images/fire-cam-6.jpeg',
        desc: 'Centrale incendie adressable compacte 1 boucle avec écran LCD rétroéclairé et batterie de secours.',
        specs: ['1 boucle adressable', 'Clavier + écran LCD rétroéclairé', 'Certification EN 54-2 / EN 54-4', 'Alimentation 230 Vac + batterie secours'],
      },
      {
        name: 'Centrale Adressable 2 Boucles DETNOV',
        ref: 'CAD-150-2',
        img: '/images/fire-cam-7.jpeg',
        desc: 'Centrale DETNOV adressable 2 boucles indépendantes, format compact mural certifié EN 54.',
        specs: ['2 boucles indépendantes', 'Écran LCD + clavier intégré', 'Format compact mural', 'Certification EN 54-2 / EN 54-4'],
      },
      {
        name: 'Déclencheur Manuel d\'Alarme Incendie',
        ref: 'DM-EN54',
        img: '/images/fire-cam-8.jpeg',
        desc: 'Déclencheur manuel rouge certifié EN 54-11 à bris de glace, réarmement par clé.',
        specs: ['Boîtier rouge RAL 3000', 'Certification NF / EN 54-11', 'Réarmement par clé', 'Bris de glace ou membrane plastique'],
      },
      {
        name: 'Sirène Extérieure Solaire PNI SafeHouse',
        ref: 'HS007',
        img: '/images/fire-cam-9.jpeg',
        desc: 'Sirène solaire sans fil pour extérieur avec flash stroboscopique rouge et batterie de secours intégrée.',
        specs: ['Panneau solaire intégré', 'Flash stroboscopique rouge', 'Batterie de secours', 'Sans fil, usage extérieur'],
      },
      {
        name: 'Sirène Intérieure avec Flash',
        ref: 'IP-MD-214R',
        img: '/images/fire-cam-10.jpeg',
        desc: 'Sirène intérieure compacte sans fil avec flash stroboscopique rouge intégré pour usage mural.',
        specs: ['Flash stroboscopique rouge', 'Design compact mural', 'Sans fil', 'Usage intérieur'],
      },
    ] as Product[],
  },
  {
    id: 'instrumentation',
    label: 'Instrumentation',
    color: '#1A7A3C',
    brand: 'ABB · Honeywell · Fuji Electric · Tecfluid',
    products: [
      {
        name: 'Transmetteur de Pression Différentielle ABB',
        ref: '266MDT',
        img: '/images/inst-cam-1.jpeg',
        desc: 'Transmetteur de pression différentielle industriel avec afficheur LCD, raccordement à brides et communication HART.',
        specs: ['Mesure pression différentielle', 'Afficheur LCD intégré', 'Raccordement à brides process', 'Sortie 4–20 mA / HART', 'IP67'],
      },
      {
        name: 'Transmetteur de Pression Honeywell',
        ref: 'ST700 SmartLine',
        img: '/images/inst-cam-2.jpeg',
        desc: 'Transmetteur SmartLine pression manométrique et absolue avec multi-protocoles et boîtier robuste IP66/67.',
        specs: ['Pression manométrique et absolue', 'Afficheur LCD intégré', 'HART / FF / Profibus', 'Boîtier robuste IP66/67'],
      },
      {
        name: 'Transmetteur de Niveau Hydrostatique',
        ref: 'TNH-420',
        img: '/images/inst-cam-3.jpeg',
        desc: 'Transmetteur de niveau par pression hydrostatique, sortie 4–20 mA, compatible cuves et liquides industriels.',
        specs: ['Mesure par pression hydrostatique', 'Sortie 4–20 mA', 'Compatible liquides et cuves', 'Installation fond de cuve ou en ligne'],
      },
      {
        name: 'Analyseur d\'Oxygène In-Situ Fuji Electric',
        ref: 'ZFK8',
        img: '/images/inst-cam-4.jpeg',
        desc: 'Analyseur O₂ in-situ à technologie zircone pour mesure en continu dans fumées et procédés industriels.',
        specs: ['Technologie zircone in-situ', 'Mesure O₂ en continu', 'Afficheur LCD intégré', 'Boîtier IP65', 'Sortie 4–20 mA / HART'],
      },
      {
        name: 'Détecteur de Gaz Combustible KIMESSA',
        ref: 'GSPM 121 Ex',
        img: '/images/inst-cam-5.jpeg',
        desc: 'Détecteur ATEX Zone 1 pour gaz inflammables, affichage % LEL en temps réel, boîtier antidéflagrant IP66.',
        specs: ['Affichage % LEL temps réel', 'Sortie 4–20 mA', 'Certifié ATEX Zone 1 Ex', 'Boîtier IP66 antidéflagrant', 'Détection gaz inflammables'],
      },
      {
        name: 'Débitmètre Électromagnétique Tecfluid',
        ref: 'FLOMID',
        img: '/images/inst-cam-6.jpeg',
        desc: 'Débitmètre électromagnétique pour liquides conducteurs avec afficheur LCD et raccordement à brides IP67.',
        specs: ['Liquides conducteurs', 'Afficheur LCD intégré', 'Raccordement à brides', 'Sortie 4–20 mA / impulsion', 'IP67'],
      },
      {
        name: 'Débitmètre à Effet Vortex',
        ref: 'VORTEX-IP67',
        img: '/images/inst-cam-7.jpeg',
        desc: 'Débitmètre vortex pour liquides, gaz et vapeur avec raccordement inox, afficheur intégré et boîtier antidéflagrant.',
        specs: ['Liquides, gaz et vapeur', 'Brides inox', 'Sortie 4–20 mA / HART', 'IP67 antidéflagrant', 'Afficheur intégré'],
      },
      {
        name: 'Régulateur de Température PID Fuji Electric',
        ref: 'PXR4',
        img: '/images/inst-cam-8.jpeg',
        desc: 'Régulateur PID auto-adaptatif format panneau 48×48 mm avec double affichage LED et 3 sorties alarme.',
        specs: ['Affichage double LED PV/SV', 'PID auto-adaptatif', 'Format 48×48 mm', 'Entrées thermocouple / PT100', '3 sorties alarme AL1/AL2/AL3'],
      },
      {
        name: 'Indicateur de Process RS PRO',
        ref: 'INDIC-96',
        img: '/images/inst-cam-9.jpeg',
        desc: 'Indicateur numérique universel 4–20 mA format 96×48 mm, face avant IP65 avec 4 boutons de navigation.',
        specs: ['Affichage 7 segments 4 digits', 'Entrée 4–20 mA / tension', 'Format 96×48 mm', '4 boutons navigation', 'Face avant IP65'],
      },
      {
        name: 'Enregistreur Graphique E+H',
        ref: 'RSG35 Ecograph T',
        img: '/images/inst-cam-10.jpeg',
        desc: 'Enregistreur multivoies couleur tactile 6 canaux avec communication Ethernet/USB et stockage carte mémoire.',
        specs: ['Écran couleur tactile', '6 voies d\'enregistrement', 'Carte mémoire', 'Ethernet / USB', 'Format 144×144 mm'],
      },
    ] as Product[],
  },
]

function Carousel({ products, color, brand, onOpenModal, onQuote }: {
  products: Product[]
  color: string
  brand: string
  onOpenModal: (p: Product) => void
  onQuote: (name: string) => void
}) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cols, setCols] = useState(4)
  const total = products.length

  // Responsive : détecter la taille écran
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(1)
      else if (window.innerWidth < 1024) setCols(2)
      else setCols(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Auto-défilement
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setCurrent(c => (c + 1) % total), 2000)
    return () => clearInterval(t)
  }, [paused, total])

  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  const visibleProducts = Array.from({ length: cols }, (_, i) => products[(current + i) % total])

  const cardBorder = `rgba(${color==='#E8600A'?'232,96,10':'26,122,60'},0.15)`

  return (
    <div style={{ position:'relative' }}>
      {/* Flèche gauche */}
      <button onClick={prev} style={{
        position:'absolute', left: cols===1?'8px':'-20px', top:'40%', transform:'translateY(-50%)',
        zIndex:10, background:'white', border:'1px solid #ddd', borderRadius:'50%',
        width:'40px', height:'40px', cursor:'pointer', display:'flex', alignItems:'center',
        justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.12)', fontSize:'20px', lineHeight:1,
      }}>‹</button>
      {/* Flèche droite */}
      <button onClick={next} style={{
        position:'absolute', right: cols===1?'8px':'-20px', top:'40%', transform:'translateY(-50%)',
        zIndex:10, background:'white', border:'1px solid #ddd', borderRadius:'50%',
        width:'40px', height:'40px', cursor:'pointer', display:'flex', alignItems:'center',
        justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.12)', fontSize:'20px', lineHeight:1,
      }}>›</button>

      {/* Grille responsive */}
      <div style={{
        display:'grid',
        gridTemplateColumns:`repeat(${cols}, 1fr)`,
        gap: cols===1?'0':'20px',
        padding: cols===1?'0 52px':'0',
      }}>
        {visibleProducts.map((product, i) => (
          <div
            key={product.name + current + i}
            onClick={() => 'ref' in product ? onOpenModal(product) : undefined}
            style={{
              background:'#FFFFFF',
              border:`1px solid ${cardBorder}`,
              borderRadius:'8px', overflow:'hidden',
              display:'flex', flexDirection:'column',
              cursor:'ref' in product ? 'pointer' : 'default',
              transition:'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.5s ease, border-color 0.5s ease',
              boxShadow:'0 2px 12px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={e => {
              setPaused(true)
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'scale(1.04)'
              el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.16)'
              el.style.borderColor = color
            }}
            onMouseLeave={e => {
              setPaused(false)
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'scale(1)'
              el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
              el.style.borderColor = cardBorder
            }}
          >
            <div style={{ position:'relative', height: cols===1?'240px':'200px', background:'#F5F5F3' }}>
              <Image src={product.img} alt={product.name} fill style={{ objectFit:'contain', padding:'16px' }} />
              {'ref' in product && (product as Product).ref && (
                <div style={{ position:'absolute', top:'10px', left:'10px', background:'#E8600A', color:'white', fontFamily:'JetBrains Mono', fontSize:'9px', letterSpacing:'0.08em', padding:'3px 8px', borderRadius:'2px' }}>
                  {(product as Product).ref}
                </div>
              )}
            </div>
            <div style={{ padding:'16px 18px 20px', display:'flex', flexDirection:'column', flex:1 }}>
              <div style={{ fontFamily:'JetBrains Mono', fontSize:'9px', letterSpacing:'0.18em', color, textTransform:'uppercase', marginBottom:'5px' }}>{brand.split('·')[0].trim()}</div>
              <h3 style={{ fontFamily:'Bebas Neue', fontSize: cols===1?'22px':'18px', letterSpacing:'0.05em', color:'#111', marginBottom:'8px', lineHeight:1.15 }}>{product.name}</h3>
              <p style={{ fontFamily:'Rajdhani', fontSize: cols===1?'14px':'12px', color:'#666', lineHeight:1.65, marginBottom:'16px', flex:1 }}>{product.desc}</p>
              <button
                onClick={e => { e.stopPropagation(); onQuote(product.name) }}
                style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'6px',
                  background:color, color:'white', border:'none', cursor:'pointer',
                  fontFamily:'Rajdhani', fontWeight:700, fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase',
                  padding:'12px', borderRadius:'4px', transition:'opacity 0.2s ease', width:'100%',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity='0.85' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity='1' }}
              >
                <ShoppingCart size={13} /> Demander un Devis
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display:'flex', justifyContent:'center', gap:'6px', marginTop:'20px', flexWrap:'wrap' }}>
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i===current?'20px':'8px', height:'8px', borderRadius:'4px',
            border:'none', cursor:'pointer', padding:0,
            background: i===current ? color : '#ddd',
            transition:'all 0.3s ease',
          }} />
        ))}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('surveillance')
  const [modalProduct, setModalProduct] = useState<Product | null>(null)
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = (product: Product) => {
    setModalProduct(product)
    setTimeout(() => setModalVisible(true), 10)
  }

  const closeModal = () => {
    setModalVisible(false)
    setTimeout(() => setModalProduct(null), 300)
  }

  const requestQuote = (productName: string) => {
    router.push(`/contact?service=${encodeURIComponent(`Demande de devis pour : ${productName}`)}`)
  }

  const activeData = categories.find(c => c.id === activeCategory)!

  return (
    <div style={{ background: '#FFFFFF', paddingTop: '80px' }}>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', padding: '80px 24px 100px', overflow: 'hidden', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase', marginBottom: '16px' }}>— Catalogue Produits</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(52px, 8vw, 100px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '24px' }}>
            <span style={{ color: '#FFFFFF' }}>NOS</span><br />
            <span style={{ color: '#F97316' }}>ÉQUIPEMENTS</span><br />
            <span style={{ color: '#FFFFFF' }}>PREMIUM</span>
          </h1>
          <p style={{ fontFamily: 'Rajdhani', fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', lineHeight: 1.7, letterSpacing: '0.04em' }}>
            Distributeur agréé des grandes marques mondiales. Chaque produit est soigneusement sélectionné pour ses performances en environnement industriel africain.
          </p>
        </div>
      </section>

      {/* ══ Tabs ══ */}
      <section style={{ position: 'sticky', top: '70px', zIndex: 100, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(232,96,10,0.18)', padding: '0 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                color: activeCategory === cat.id ? cat.color : '#666',
                borderBottom: activeCategory === cat.id ? `3px solid ${cat.color}` : '3px solid transparent',
                transition: 'all 0.3s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ══ Products ══ */}
      <section style={{ padding: '80px 0', background: '#F8F8F6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          {activeCategory === 'surveillance' ? (
            <>
              <FadeIn>
                <div style={{ marginBottom:'36px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'6px' }}>
                    <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', letterSpacing:'0.25em', color:'#E8600A', textTransform:'uppercase' }}>Hikvision</div>
                    <div style={{ flex:1, height:'1px', background:'rgba(232,96,10,0.2)' }}/>
                  </div>
                  <h2 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(28px,4vw,48px)', color:'#111', letterSpacing:'0.04em' }}>CAMÉRAS <span style={{ color:'#E8600A' }}>HIKVISION</span></h2>
                </div>
              </FadeIn>
              <Carousel products={hikProducts} color='#E8600A' brand='Hikvision' onOpenModal={openModal} onQuote={requestQuote} />
              <div style={{ margin:'64px 0 48px', display:'flex', alignItems:'center', gap:'20px' }}>
                <div style={{ flex:1, height:'1px', background:'#eee' }}/>
                <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', letterSpacing:'0.2em', color:'#bbb', textTransform:'uppercase' }}>Dahua Technology</div>
                <div style={{ flex:1, height:'1px', background:'#eee' }}/>
              </div>
              <FadeIn>
                <div style={{ marginBottom:'36px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'6px' }}>
                    <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', letterSpacing:'0.25em', color:'#E8600A', textTransform:'uppercase' }}>Dahua</div>
                    <div style={{ flex:1, height:'1px', background:'rgba(232,96,10,0.2)' }}/>
                  </div>
                  <h2 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(28px,4vw,48px)', color:'#111', letterSpacing:'0.04em' }}>CAMÉRAS <span style={{ color:'#E8600A' }}>DAHUA</span></h2>
                </div>
              </FadeIn>
              <Carousel products={dahProducts} color='#E8600A' brand='Dahua' onOpenModal={openModal} onQuote={requestQuote} />
            </>
          ) : activeCategory === 'access' ? (
            <>
              <FadeIn>
                <div style={{ marginBottom:'36px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'6px' }}>
                    <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', letterSpacing:'0.25em', color:'#1A7A3C', textTransform:'uppercase' }}>Hikvision</div>
                    <div style={{ flex:1, height:'1px', background:'rgba(26,122,60,0.2)' }}/>
                  </div>
                  <h2 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(28px,4vw,48px)', color:'#111', letterSpacing:'0.04em' }}>CONTRÔLE D'ACCÈS <span style={{ color:'#1A7A3C' }}>HIKVISION</span></h2>
                </div>
              </FadeIn>
              <Carousel products={hikAccessProducts} color='#1A7A3C' brand='Hikvision' onOpenModal={openModal} onQuote={requestQuote} />
              <div style={{ margin:'64px 0 48px', display:'flex', alignItems:'center', gap:'20px' }}>
                <div style={{ flex:1, height:'1px', background:'#eee' }}/>
                <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', letterSpacing:'0.2em', color:'#bbb', textTransform:'uppercase' }}>Dahua Technology</div>
                <div style={{ flex:1, height:'1px', background:'#eee' }}/>
              </div>
              <FadeIn>
                <div style={{ marginBottom:'36px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'6px' }}>
                    <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', letterSpacing:'0.25em', color:'#1A7A3C', textTransform:'uppercase' }}>Dahua</div>
                    <div style={{ flex:1, height:'1px', background:'rgba(26,122,60,0.2)' }}/>
                  </div>
                  <h2 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(28px,4vw,48px)', color:'#111', letterSpacing:'0.04em' }}>CONTRÔLE D'ACCÈS <span style={{ color:'#1A7A3C' }}>DAHUA</span></h2>
                </div>
              </FadeIn>
              <Carousel products={dahAccessProducts} color='#1A7A3C' brand='Dahua' onOpenModal={openModal} onQuote={requestQuote} />
            </>
          ) : (
            <>
              <FadeIn>
                <div style={{ marginBottom: '48px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.25em', color: activeData.color, textTransform: 'uppercase', marginBottom: '8px' }}>{activeData.brand}</div>
                  <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 5vw, 60px)', color: '#111111', letterSpacing: '0.04em' }}>
                    {activeData.label}
                  </h2>
                </div>
              </FadeIn>
              <Carousel products={activeData.products as Product[]} color={activeData.color} brand={activeData.brand} onOpenModal={openModal} onQuote={requestQuote} />
            </>
          )}

        </div>
      </section>

      {/* ══ Catalogue complet ══ */}
      <section style={{ padding: '80px 0', background: '#FFFFFF', borderTop: '1px solid rgba(232,96,10,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '12px' }}>— Toutes catégories</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 5vw, 60px)', color: '#111111', letterSpacing: '0.04em' }}>
                CATALOGUE <span style={{ color: '#E8600A' }}>COMPLET</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {categories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.1}>
                <button
                  onClick={() => { setActiveCategory(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px',
                    padding: '28px', border: `1px solid rgba(${cat.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.2)`,
                    borderRadius: '6px', background: '#FFFFFF', cursor: 'pointer',
                    textAlign: 'left', width: '100%', transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = cat.color; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `rgba(${cat.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.2)`; el.style.transform = 'none'; el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)' }}
                >
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: cat.color }}>{cat.label}</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase' }}>{cat.brand}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px', color: cat.color, fontFamily: 'Rajdhani', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 700, textTransform: 'uppercase' }}>
                    Voir les produits <ArrowRight size={12} />
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODAL ══ */}
      {modalProduct && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: modalVisible ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0)',
            backdropFilter: modalVisible ? 'blur(4px)' : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
            transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              maxWidth: '560px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
              opacity: modalVisible ? 1 : 0,
              transform: modalVisible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(20px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', height: '280px', background: '#F0F0EE' }}>
              <Image src={modalProduct.img} alt={modalProduct.name} fill style={{ objectFit: 'contain', padding: '24px' }} />
              {/* Badge référence */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#E8600A', color: 'white', fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.1em', padding: '5px 12px', borderRadius: '3px', fontWeight: 700 }}>
                {modalProduct.ref}
              </div>
              {/* Bouton fermer */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%',
                  width: '36px', height: '36px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.8)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.5)' }}
              >
                <X size={18} color="white" />
              </button>
            </div>

            {/* Contenu */}
            <div style={{ padding: '28px 32px 32px' }}>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '28px', letterSpacing: '0.06em', color: '#111', marginBottom: '10px', lineHeight: 1.1 }}>
                {modalProduct.name}
              </h2>
              <p style={{ fontFamily: 'Rajdhani', fontSize: '14px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
                {modalProduct.desc}
              </p>

              {/* Specs */}
              {modalProduct.specs && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {modalProduct.specs.map(spec => (
                    <li key={spec} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Rajdhani', fontSize: '13px', color: '#333', fontWeight: 600 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8600A', flexShrink: 0 }} />
                      {spec}
                    </li>
                  ))}
                </ul>
              )}

              {/* Boutons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => { closeModal(); requestQuote(modalProduct.name) }}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    background: '#E8600A', color: 'white', border: 'none', cursor: 'pointer',
                    fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '13px 20px', borderRadius: '4px', transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  <ShoppingCart size={15} /> Demander un Devis
                </button>
                <button
                  onClick={closeModal}
                  style={{
                    padding: '13px 20px', borderRadius: '4px', border: '1px solid #ddd',
                    background: 'white', color: '#666', cursor: 'pointer',
                    fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#999'; el.style.color = '#333' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#ddd'; el.style.color = '#666' }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
