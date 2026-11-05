import { PersonalInfo, Project, Article, Skill, ExperienceItem, EducationItem, CertificationItem, PlaygroundExperiment, NowData } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Siam",
  brand: "SIAM",
  role: "Creative Developer & Digital Designer",
  location: "Dhaka, Bangladesh",
  tagline: "Building digital experiences that feel different.",
  shortBio: "Specializing in the sweet spot where engineering rigor meets visceral visual design. Inspired by the calm order of Notion, the tactile precision of Apple, and the velocity of Linear.",
  fullBio: [
    "I am an independent creative developer and digital designer based in Bangladesh, passionate about creating tactile, high-performance web applications and design systems that bridge the chasm between software and emotional delight.",
    "Over the past 6+ years, my work has hovered at the intersection of creative coding, typography, dynamic systems, and interaction design. I believe software should not merely function; it should feel alive, responsive, and crafted with obsessively considered details.",
    "When I'm not tweaking easing curves in Framer Motion or optimizing canvas render loops, you'll find me exploring ambient electronic music, reading architecture theory, or tinkering with custom mechanical keyboards and spatial audio."
  ],
  philosophy: [
    {
      title: "Tactile Velocity",
      description: "Software must feel instantaneous. Latency is the enemy of intimacy between human intuition and computer execution."
    },
    {
      title: "Content Hierarchy First",
      description: "Beauty without structural clarity is decoration. Great products organize chaos into calm, legible modularity."
    },
    {
      title: "Invisible Choreography",
      description: "The best animations are felt rather than noticed. Easing curves should mimic physical inertia and weight."
    },
    {
      title: "Accessible Craft",
      description: "Aesthetics must never compromise accessibility. Premium software is respectful to every user and device."
    }
  ],
  facts: [
    { label: "Based in", value: "Dhaka, Bangladesh (UTC+6)" },
    { label: "Primary Tools", value: "TypeScript, React, Tailwind, Figma" },
    { label: "Editor Setup", value: "VS Code / Cursor with Tokyo Night" },
    { label: "Favorite Typeface", value: "Plus Jakarta Sans & Berkeley Mono" },
    { label: "Coffee Order", value: "Double shot flat white, oat milk" },
    { label: "Design Religion", value: "Linear elegance & Apple tactile restraint" }
  ],
  stats: [
    { label: "Years of Craft", value: "6+", helper: "Continuous experimentation" },
    { label: "Curated Projects", value: "18+", helper: "Web apps & creative experiments" },
    { label: "Open Source Stars", value: "1.4k+", helper: "Community contributions" },
    { label: "Design Tokens Built", value: "400+", helper: "Production-ready systems" }
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com", handle: "@siam-digital", icon: "Github" },
    { platform: "Twitter / X", url: "https://twitter.com", handle: "@siam_creative", icon: "Twitter" },
    { platform: "LinkedIn", url: "https://linkedin.com", handle: "siam-creative-dev", icon: "Linkedin" },
    { platform: "Dribbble", url: "https://dribbble.com", handle: "siam-creates", icon: "Dribbble" },
    { platform: "Figma", url: "https://figma.com", handle: "@siam", icon: "Figma" }
  ],
  email: "hello@siam.design",
  availability: "Available for selected client inquiries & creative collaborations",
  currentActivity: {
    building: "A spatial node-based canvas for creative thought mapping",
    exploring: "Web Audio synthesis & real-time GLSL fragment shaders",
    listening: "Tycho, Jon Hopkins & Boards of Canada"
  }
};

export const projects: Project[] = [
  {
    id: "nebula-os",
    slug: "nebula-os",
    title: "Nebula OS",
    tagline: "A spatial web desktop environment designed for hyper-focused creators",
    description: "An experimental, browser-based spatial operating layer that reimagines window management, contextual notes, and ambient generative music within a unified canvas.",
    overview: "Nebula OS merges the productivity rigor of Notion with the sensory tranquility of modern spatial audio. Built entirely on web standards, it offers zero-latency window manipulation, fluid dock gestures, and keyboard-first command routing.",
    problem: "Modern desktop operating systems have become increasingly noisy, cluttered with notifications, aggressive popups, and fragmented workflows that shatter deep cognitive focus.",
    solution: "Designed a minimalist spatial desktop layer where apps are lightweight, modular cards. Workspaces can be organized visually in infinite 2D space, with ambient soundscapes tied to cognitive modes.",
    designProcess: [
      "Explored 30+ wireframe prototypes focusing on window drag inertia and spring physics.",
      "Engineered a virtualized canvas renderer capable of sustaining 60fps with 20+ active viewports.",
      "Developed an adaptive color scheme responding to the user's local solar cycle (Dhaka to global)."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Audio API", "Zustand"],
    features: [
      "Infinite spatial pan and zoom canvas with LOD rendering",
      "Dynamic window docking with magnetic edge snapping",
      "Integrated generative ambient sound engine (Binaural & White noise)",
      "Instant global command palette (Cmd + K) with fuzzy search",
      "Persistent state serialized to IndexedDB with export capabilities"
    ],
    challenges: [
      "Maintaining smooth 60fps transformations while dragging multiple DOM-heavy windows simultaneously.",
      "Designing an intuitive keyboard navigation model that doesn't conflict with native browser shortcuts."
    ],
    results: [
      { metric: "60 FPS", label: "Smooth rendering on mid-tier mobile & desktop devices" },
      { metric: "42 ms", label: "Average command execution latency" },
      { metric: "12k+", label: "Illustrative community playground sessions" }
    ],
    category: "Creative Dev",
    featured: true,
    status: "Completed",
    year: "2025",
    client: "Internal R&D / Open Source",
    role: "Lead Creative Engineer & Designer",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/example/nebula-os",
    demoUrl: "https://nebula-os.example.com",
    relatedSlugs: ["monolith-ui", "hyperion-audio"]
  },
  {
    id: "monolith-ui",
    slug: "monolith-ui",
    title: "Monolith UI",
    tagline: "A precision design system for dark-mode enterprise applications",
    description: "An open-source design system inspired by Linear and Raycast, providing 40+ accessible components with microscopic border styling, keyboard navigation, and subtle audio feedback.",
    overview: "Monolith UI solves the aesthetic fatigue of generic corporate interfaces. Crafted specifically for developers who demand high density, micro-contrast, and keyboard shortcuts.",
    problem: "Most popular component libraries look identical, rely on heavy generic shadows, and lack the tactile sophistication demanded by modern developer-tool companies.",
    solution: "Created an opinionated design token architecture emphasizing 1px border highlights, subtle surface elevation, accessible contrast ratios, and native-feeling keyboard bindings.",
    designProcess: [
      "Audited 12 top-tier SaaS applications (Linear, Vercel, Supabase, Raycast) for spacing metrics.",
      "Implemented a systematic token scale for border highlights and surface opacities.",
      "Packaged components with automated accessibility audits (axe-core)."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook", "CSS Modules"],
    features: [
      "40+ highly refined accessible components (Modals, Dropdowns, Tables, Command Palettes)",
      "Integrated audio feedback cues for destructive and confirmation actions",
      "Flawless dark and high-contrast theme support with CSS variables",
      "Strict zero-runtime CSS footprint with Tailwind utility presets",
      "Comprehensive TypeScript types and ergonomic prop interfaces"
    ],
    challenges: [
      "Balancing high information density on smaller displays without sacrificing touch target targets.",
      "Achieving seamless Radix primitive composition while keeping bundle sizes under 15kb."
    ],
    results: [
      { metric: "<18 KB", label: "Zero-dependency gzipped bundle footprint" },
      { metric: "100%", label: "WAI-ARIA compliance across all test suites" },
      { metric: "850+", label: "Illustrative weekly developer downloads" }
    ],
    category: "Design Systems",
    featured: true,
    status: "Completed",
    year: "2025",
    client: "Independent Open Source Project",
    role: "System Architect & UI Designer",
    heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/example/monolith-ui",
    demoUrl: "https://monolith-ui.example.com",
    relatedSlugs: ["nebula-os", "prism-finance"]
  },
  {
    id: "hyperion-audio",
    slug: "hyperion-audio",
    title: "Hyperion Audio",
    tagline: "Generative soundscapes and interactive frequency visualizer",
    description: "A digital audio workstation in the browser with real-time waveform shaders, generative modular synthesizers, and exportable soundscapes.",
    overview: "Hyperion Audio explores the tactile convergence of sound synthesis and visual art. Users can tweak oscillator frequencies, harmonics, and filter envelopes while watching a synchronized WebGL reactive particle vortex.",
    problem: "Traditional DAW software is overwhelmingly intricate, while basic web soundboards lack musicality, polyphony, and evocative visual representation.",
    solution: "Engineered an intuitive node-based sound toy utilizing Web Audio API nodes with an interactive WebGL canvas that renders real-time FFT frequency analytics.",
    designProcess: [
      "Programmed polyphonic synth voices using oscillators, bi-quad filters, and exponential gain curves.",
      "Wrote custom fragment shaders to translate low, mid, and high audio bands into volumetric light rings.",
      "Constructed a Spotify-like ambient player interface with one-click preset swapping."
    ],
    technologies: ["Web Audio API", "WebGL", "Three.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "4 polyphonic oscillator engines (Sine, Sawtooth, Triangle, Square) with detune",
      "Dynamic low-pass filter envelope and spatial delay line",
      "Real-time FFT audio visualizer rendering at 60fps",
      "Keyboard piano mapping for instant jamming with zero latency",
      "Export custom generated audio loops directly to WAV"
    ],
    challenges: [
      "Preventing audio buffer underruns during intense WebGL shader computations on low-spec hardware.",
      "Mapping logarithmic frequency spectrums into aesthetically balanced visual waves."
    ],
    results: [
      { metric: "12 ms", label: "Audio buffer latency across modern desktop browsers" },
      { metric: "60 FPS", label: "Stable shader animation loop during polyphonic playback" },
      { metric: "4.8/5", label: "Illustrative user feedback rating from creative coders" }
    ],
    category: "Creative Dev",
    featured: true,
    status: "Completed",
    year: "2024",
    client: "Aura Creative Labs (Illustrative)",
    role: "Audio Programmer & Creative Technologist",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/example/hyperion-audio",
    demoUrl: "https://hyperion.example.com",
    relatedSlugs: ["nebula-os", "aurora-studio"]
  },
  {
    id: "prism-finance",
    slug: "prism-finance",
    title: "Prism Finance",
    tagline: "High-frequency asset tracking with algorithmic clarity",
    description: "A dark-mode analytics terminal engineered for quantitative traders, featuring real-time WebSockets, candlestick chart visualizers, and portfolio risk telemetry.",
    overview: "Prism Finance transforms chaotic financial data streams into calm, actionable intelligence. It replaces garish green-and-red neon charts with balanced semantic palettes and instantaneous filtering.",
    problem: "Most financial platforms suffer from cognitive overload, sluggish chart rendering, and cluttered navigation panels that impede rapid decision-making.",
    solution: "Designed a clean, modular command dashboard inspired by Bloomberg terminals and Linear, optimizing every pixel for data density, typography legibility, and high-DPI clarity.",
    designProcess: [
      "Benchmarked chart rendering speeds using HTML5 Canvas against SVG for 10,000+ data points.",
      "Developed a custom monochrome-to-vibrant color palette highlighting anomalous volatility.",
      "User tested widget customization models with 15 active retail traders."
    ],
    technologies: ["React", "TypeScript", "Canvas API", "Tailwind CSS", "WebSockets", "Vite"],
    features: [
      "High-performance Canvas-based candlestick and depth charts handling 50k ticks smoothly",
      "Customizable modular grid layout with draggable widget cards",
      "Quick order simulator with instant profit/loss sensitivity projection",
      "Multi-currency conversion with real-time volatility indices",
      "Keyboard shortcut map for fast watchlist filtering and order entry"
    ],
    challenges: [
      "Eliminating garbage collection spikes during continuous 100Hz ticker updates.",
      "Designing a high-contrast theme that remains comfortable for 8+ hour continuous viewing sessions."
    ],
    results: [
      { metric: "99.98%", label: "Uptime across illustrative mock websocket feeds" },
      { metric: "< 5ms", label: "Chart re-render response under high-density loads" },
      { metric: "35%", label: "Illustrative reduction in visual clutter vs legacy terminals" }
    ],
    category: "Full-Stack",
    featured: false,
    status: "Completed",
    year: "2024",
    client: "FinTech Innovation Guild (Illustrative)",
    role: "Full-Stack Developer & UI Architect",
    heroImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/example/prism-finance",
    demoUrl: "https://prism.example.com",
    relatedSlugs: ["monolith-ui", "flow-state"]
  },
  {
    id: "echo-markdown",
    slug: "echo-markdown",
    title: "Echo Knowledge",
    tagline: "Distraction-free Markdown editor with bi-directional knowledge graphs",
    description: "A fast, privacy-first local note taking platform featuring connected graph visualization, block-level editing, and instant LaTeX rendering.",
    overview: "Echo Knowledge takes inspiration from Notion's clean block typography and Obsidian's networked thought model. It operates completely offline, preserving your thoughts in human-readable Markdown.",
    problem: "Cloud-dependent note apps are often sluggish, hostage to vendor lock-in, and visually cluttered with unnecessary collaboration badges when all you want to do is think.",
    solution: "Built a lightning-fast browser application that reads and writes local file systems via File System Access API, rendering notes with typographic elegance and interactive 2D graph links.",
    designProcess: [
      "Created a serene typography hierarchy based on Berkeley Mono and Plus Jakarta Sans.",
      "Implemented a force-directed graph visualization using D3 physics and HTML5 Canvas.",
      "Designed an unobtrusive slash-command menu for blocks, tables, and code snippets."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "D3.js", "Zustand", "PrismJS"],
    features: [
      "Seamless block-based editing with slash commands (`/h1`, `/todo`, `/callout`)",
      "Interactive 2D force-directed relationship graph with node clustering",
      "Instant math equation formatting with KaTeX and live code highlighting",
      "Zero account required; local-first storage with automatic sync backups",
      "Distraction-free typewriter focus mode that dims inactive paragraphs"
    ],
    challenges: [
      "Handling real-time link parsing across 1,000+ notes without freezing the UI thread.",
      "Designing responsive typography that looks stunning on phones and ultrawide screens alike."
    ],
    results: [
      { metric: "1.2 MB", label: "Total memory footprint during standard typing session" },
      { metric: "0 ms", label: "Server dependency (100% private and client-side)" },
      { metric: "2.1k+", label: "Illustrative stars on developer showcase boards" }
    ],
    category: "Full-Stack",
    featured: false,
    status: "Completed",
    year: "2024",
    client: "Personal Exploration",
    role: "Sole Designer & Developer",
    heroImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/example/echo-markdown",
    demoUrl: "https://echo.example.com",
    relatedSlugs: ["nebula-os", "monolith-ui"]
  },
  {
    id: "aurora-studio",
    slug: "aurora-studio",
    title: "Aurora 3D Studio",
    tagline: "Interactive WebGL product configurator and dynamic shader gallery",
    description: "An immersive 3D product showcase demonstrating real-time physically based rendering (PBR), glass refraction shaders, and camera choreography for luxury hardware.",
    overview: "Aurora pushes the graphic boundaries of web browsers. Built as a demonstration of high-fidelity product storytelling, it allows users to customize materials, inspect microscopic device textures, and trigger cinematic exploded views.",
    problem: "Online product presentations often rely on static photographic carousels that fail to convey the tactile weight, material finishes, and craftsmanship of physical products.",
    solution: "Engineered a WebGL 3D stage with real-time environment lighting, iridescent glass dispersion shaders, and buttery-smooth cursor parallax controls.",
    designProcess: [
      "Modeled precision luxury hardware prototypes in Blender with high poly count normal maps.",
      "Wrote custom GLSL fragment shaders simulating glass dispersion and metallic flakes.",
      "Orchestrated interactive timeline cameras linked smoothly to page scroll position."
    ],
    technologies: ["Three.js", "WebGL", "GLSL", "React", "Framer Motion", "Tailwind CSS"],
    features: [
      "Real-time PBR material swap (Brushed Titanium, Frosted Glass, Obsidian Ceramic)",
      "Interactive exploded assembly view revealing inner mechanical architecture",
      "Gyroscope-enabled mobile tilt for tactile lighting reflection changes",
      "Adaptive performance scaler that automatically adjusts shadow resolution to target 60fps",
      "High-res snapshot exporter with custom lighting presets"
    ],
    challenges: [
      "Minimizing 3D asset download size from 45MB down to 2.4MB with Draco mesh compression.",
      "Ensuring shader compatibility across mobile Safari, Android Chrome, and desktop GPUs."
    ],
    results: [
      { metric: "2.4 MB", label: "Compressed total 3D asset bundle via Draco/KTX2" },
      { metric: "60 FPS", label: "Sustained rendering on Apple Silicon and modern mobile" },
      { metric: "Site of the Day", label: "Illustrative concept award recognition" }
    ],
    category: "Creative Dev",
    featured: true,
    status: "Completed",
    year: "2024",
    client: "Future Tech Concepts (Illustrative)",
    role: "3D Creative Developer",
    heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/example/aurora-studio",
    demoUrl: "https://aurora.example.com",
    relatedSlugs: ["hyperion-audio", "nebula-os"]
  },
  {
    id: "flow-state",
    slug: "flow-state",
    title: "FlowState AI",
    tagline: "Chronobiology-based focus and task orchestrator",
    description: "An intelligent daily rhythm planner that harmonizes task complexity with personal circadian energy peaks, featuring minimal gesture interactions.",
    overview: "FlowState moves away from punitive to-do lists. It analyzes your natural alertness rhythms to suggest optimal blocks for deep creative work, shallow communication, and restorative downtime.",
    problem: "Standard calendar tools treat all hours equally, ignoring human cognitive fatigue and the biological reality of circadian rhythms.",
    solution: "Designed an intuitive visual timeline representing energy curves, with drag-and-drop task slots that adapt dynamically as your day progresses.",
    designProcess: [
      "Researched chronobiology models to derive mathematical energy curve approximations.",
      "Crafted an interface with Apple-inspired fluid gestures, haptics, and soft transitions.",
      "Integrated micro-journaling prompts at the end of each completed focus block."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage", "Lucide"],
    features: [
      "Circadian energy curve visualization with customizable morning/evening chronotypes",
      "Frictionless task drawer with natural language time parsing",
      "Built-in ambient Pomodoro timer with subtle bell acoustics",
      "Daily reflective summary with cognitive energy output score",
      "Offline-first architecture with instant keyboard shortcuts"
    ],
    challenges: [
      "Designing a clean UI that conveys biological time cycles without appearing medical or clinical.",
      "Engineering fluid gesture drags on mobile viewports without triggering browser pull-to-refresh."
    ],
    results: [
      { metric: "24%", label: "Illustrative self-reported focus improvement in pilot testing" },
      { metric: "< 250ms", label: "Time required to log and schedule a new task item" },
      { metric: "4.9/5", label: "Illustrative product happiness score" }
    ],
    category: "AI & Tools",
    featured: false,
    status: "In Development",
    year: "2025",
    client: "Self-Initiated Product",
    role: "Product Designer & Frontend Engineer",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/example/flow-state",
    demoUrl: "https://flowstate.example.com",
    relatedSlugs: ["nebula-os", "echo-markdown"]
  }
];

export const articles: Article[] = [
  {
    id: "crafting-subtle-motion",
    slug: "crafting-subtle-motion",
    title: "The Philosophy of Invisible Motion in Premium Digital Interfaces",
    excerpt: "Why the best animations are felt rather than seen, and how micro-interactions bridge the psychological gap between human intent and computer state.",
    category: "Design Philosophy",
    publishDate: "January 14, 2025",
    readingTime: "5 min read",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Animation", "Framer Motion", "UI/UX", "Micro-interactions"],
    content: [
      {
        sectionHeading: "The Curse of Over-Animation",
        paragraphs: [
          "In the early days of transition libraries, developers rushed to bounce, flip, and slide every button in sight. The result was digital amusement parks where ordering a sandwich felt like riding a rollercoaster. Users were visually exhausted.",
          "Great software takes the opposite approach. If a user notices your transition before they notice the content that just arrived, the transition has failed its primary duty: to orient the mind without demanding conscious inspection."
        ],
        quote: "True craftsmanship in animation is like sound design in film: when executed flawlessly, the audience only experiences the immersion, never the machinery."
      },
      {
        sectionHeading: "Mass, Inertia, and the Natural World",
        paragraphs: [
          "Human perception has evolved over millions of years to understand physical kinetics. A rock thrown through the air does not move at linear speed, nor does it snap instantaneously between coordinates.",
          "When we use cubic-bezier curves like `cubic-bezier(0.16, 1, 0.3, 1)`, we are teaching the browser to mimic physical inertia: a rapid initial acceleration followed by a gentle, natural deceleration as friction arrests the velocity.",
          "In Framer Motion, spring physics (`type: 'spring', stiffness: 380, damping: 30`) offer a superior sensory experience compared to fixed millisecond durations because they adapt dynamically to interruption. If a user hovers, un-hovers, and re-hovers rapidly, a spring curve never jerks; it smoothly absorbs the directional change."
        ],
        codeSnippet: {
          language: "tsx",
          code: `// Ideal spring configuration for tactile UI cards\nconst tactileSpring = {\n  type: "spring",\n  stiffness: 400,\n  damping: 28,\n  mass: 0.8\n};\n\n<motion.div\n  whileHover={{ scale: 1.02, y: -2 }}\n  whileTap={{ scale: 0.98 }}\n  transition={tactileSpring}\n  className="rounded-xl border border-white/10 bg-zinc-900/80"\n/>`
        }
      },
      {
        sectionHeading: "The Rule of 200 Milliseconds",
        paragraphs: [
          "For navigational transitions—opening a modal, revealing a dropdown, toggling a drawer—the total duration should almost never exceed 220 milliseconds. Anything longer begins to make the application feel slow, no matter how fast your backend responded.",
          "Micro-interactions should delight, not delay. Honor your user's attention span, tune your springs with discipline, and remember that restraint is the true mark of luxury."
        ]
      }
    ]
  },
  {
    id: "designing-for-speed",
    slug: "designing-for-speed",
    title: "How Linear and Apple Shape the Future of Tool Aesthetics",
    excerpt: "Analyzing the visual language of high-performance software: why subtle 1px borders, dark slate palettes, and keyboard shortcuts dominate today's premier products.",
    category: "Product Design",
    publishDate: "November 28, 2024",
    readingTime: "7 min read",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Design Systems", "Linear", "Apple", "Productivity"],
    content: [
      {
        sectionHeading: "The Rejection of Corporate Blandness",
        paragraphs: [
          "For nearly a decade, enterprise software was synonymous with washed-out bootstrap grays, generic blue primary buttons, and slow dropdown menus. Then Linear emerged, followed by Raycast, Cron (Notion Calendar), and Supabase.",
          "These companies proved that professional work tools could possess the aesthetic precision of a Porsche dashboard and the responsiveness of a competitive video game."
        ]
      },
      {
        sectionHeading: "The Anatomy of the Linear Aesthetic",
        paragraphs: [
          "What makes this visual direction so compelling? It rests on four uncompromising pillars:",
          "1. Micro-Borders: Instead of heavy drop shadows that blur into mud, surfaces are delineated with 1px semi-transparent borders (`rgba(255, 255, 255, 0.08)`). This provides laser-sharp definition without consuming screen real estate.",
          "2. Atmospheric Contrast: Pure `#000000` is rarely used for primary backgrounds. Instead, deep zincs like `#09090B` or `#111114` allow subtle inner glows and secondary elevation cards (`#18181D`) to emerge with three-dimensional depth.",
          "3. Keyboard-First Architecture: Every action has a hotkey. The mouse is an option, not a requirement. The Command Palette (Cmd + K) serves as the brain stem of the application.",
          "4. Unforgiving Typography: Clean sans-serifs with tight letter spacing (Plus Jakarta Sans, Inter, SF Pro) paired with monospace accents for operational data."
        ]
      },
      {
        sectionHeading: "Why This Matters for Indie Creators",
        paragraphs: [
          "Adopting this design discipline allows solo developers and small studios to build products that immediately project credibility, competence, and taste. When your software looks and feels deliberate, users instinctively trust its reliability."
        ]
      }
    ]
  },
  {
    id: "building-with-canvas-and-react",
    slug: "building-with-canvas-and-react",
    title: "Bending the DOM: When HTML Isn't Fast Enough for Creative UI",
    excerpt: "How to marry React's declarative state management with HTML5 Canvas and WebGL render loops without sacrificing performance.",
    category: "Engineering",
    publishDate: "October 10, 2024",
    readingTime: "6 min read",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Canvas API", "WebGL", "Performance"],
    content: [
      {
        sectionHeading: "The Ceiling of the Document Object Model",
        paragraphs: [
          "React is phenomenal at orchestrating UI state, but when you need to render 2,000 animated particles, real-time audio waveforms, or an interactive constellation that tracks cursor velocity, the DOM will buckle.",
          "Every DOM node carries massive memory baggage—event listeners, style calculations, layout recalculations, and paint passes. The HTML5 Canvas, by contrast, is a blank raster grid where millions of operations can execute inside a single `requestAnimationFrame` tick."
        ]
      },
      {
        sectionHeading: "The Hybrid Architecture",
        paragraphs: [
          "The trick is not abandoning React, but treating Canvas as a dedicated visual coprocessor. You use React to manage application state, menus, dialogs, and controls, while a single `<canvas>` element handles the raw graphical horsepower.",
          "By passing immutable refs and managing render loops in `useEffect` with proper cancellation tokens, you prevent React's re-render cycle from polluting high-frequency animation loops."
        ],
        codeSnippet: {
          language: "tsx",
          code: `useEffect(() => {\n  const canvas = canvasRef.current;\n  if (!canvas) return;\n  const ctx = canvas.getContext('2d');\n  let animationFrameId: number;\n\n  const render = () => {\n    // High-performance particle math outside React state\n    updatePhysics();\n    drawScene(ctx);\n    animationFrameId = requestAnimationFrame(render);\n  };\n\n  render();\n  return () => cancelAnimationFrame(animationFrameId);\n}, []);`
        }
      }
    ]
  },
  {
    id: "typography-as-interface",
    slug: "typography-as-interface",
    title: "Typography as Interface: Why Type Scale is 80% of Your Design System",
    excerpt: "Before choosing colors, borders, or shadows, the rhythm of your type scale determines whether your product feels chaotic or tranquil.",
    category: "Typography",
    publishDate: "August 19, 2024",
    readingTime: "4 min read",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    tags: ["Typography", "CSS", "Design Systems"],
    content: [
      {
        sectionHeading: "Words Are the Interface",
        paragraphs: [
          "In digital products, more than 80% of what users look at is written text. If your typographic hierarchy is muddy, no amount of glossy gradients or glassmorphism can rescue the user experience.",
          "A great type system relies on strict modular scales. Instead of arbitrary pixel sizes, pick a scale (such as the Major Second 1.125 or Minor Third 1.2) and enforce it ruthlessly across headings, body copy, and metadata captions."
        ]
      },
      {
        sectionHeading: "Line Height and Visual Breathing Room",
        paragraphs: [
          "A common mistake in web development is applying identical line heights to large display headers and small paragraph bodies. Headlines demand tight line heights (`1.1` to `1.2`) to prevent awkward spacing between lines, whereas body text requires relaxed leading (`1.5` to `1.7`) for effortless horizontal eye tracking.",
          "When you pair disciplined typography with generous negative space, your interface immediately projects calm authority."
        ]
      }
    ]
  },
  {
    id: "beyond-dark-mode",
    slug: "beyond-dark-mode",
    title: "Beyond Dark Mode: Atmospheric Depth and Layered Surface Elevation",
    excerpt: "True dark interfaces are not inverted white screens. Discover how light emission, subtle tinting, and gradient borders craft immersive digital chambers.",
    category: "Design Craft",
    publishDate: "June 05, 2024",
    readingTime: "5 min read",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Dark Mode", "Color Theory", "Tailwind", "CSS"],
    content: [
      {
        sectionHeading: "The Pitfall of Flat Charcoal",
        paragraphs: [
          "When developers simply invert `#FFFFFF` to `#000000`, the result is stark, harsh, and uncomfortable for human eyes over long periods. Real physical dark environments are filled with soft ambient light reflections, atmospheric haze, and subtle warmth.",
          "By tinting deep grays with a microscopic touch of violet or indigo (`#09090B`, `#111114`), we create an environment that feels rich and velvety rather than dead."
        ]
      },
      {
        sectionHeading: "Simulating Light from Behind",
        paragraphs: [
          "In modern interfaces, elevated surfaces do not cast pitch-black shadows—they catch peripheral light. A card resting on a dark canvas should have a slightly lighter background tone (`#18181D` over `#09090B`) paired with a razor-thin top highlight border.",
          "This mimicry of edge beveling gives modern web applications their celebrated tactile quality."
        ]
      }
    ]
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", category: "Frontend", level: 96, status: "Master", description: "Architecture, Server Components, Custom Hooks, Performance Profiling" },
  { name: "TypeScript", category: "Frontend", level: 94, status: "Master", description: "Generics, Strict Type Safety, AST Transformations, Ergonomic APIs" },
  { name: "Tailwind CSS", category: "Frontend", level: 98, status: "Master", description: "Custom Design Systems, Tokens, Micro-utilities, JIT optimization" },
  { name: "Framer Motion", category: "Frontend", level: 92, status: "Master", description: "Spring physics, layout animations, exit transitions, gestures" },
  { name: "HTML5 Canvas & WebGL", category: "Frontend", level: 82, status: "Advanced", description: "Real-time 2D simulations, Web Audio visualizers, particle physics" },
  { name: "Three.js / GLSL", category: "Frontend", level: 78, status: "Proficient", description: "3D scene graphs, custom fragment shaders, PBR materials" },

  // Design & Creative
  { name: "Design Systems", category: "Design & Creative", level: 95, status: "Master", description: "Token architecture, multi-brand themes, component documentation" },
  { name: "Figma & Prototyping", category: "Design & Creative", level: 92, status: "Master", description: "Auto-layout mastery, interactive variants, design-to-code pipelines" },
  { name: "Micro-interactions", category: "Design & Creative", level: 94, status: "Master", description: "Tactile haptics, cursor hover effects, timing curves, feedback cues" },
  { name: "Typography & Layout", category: "Design & Creative", level: 90, status: "Master", description: "Modular scale, editorial hierarchy, responsive fluid type" },
  { name: "Spatial & Sound UI", category: "Design & Creative", level: 80, status: "Advanced", description: "Web Audio synthesis cues, acoustic feedback, non-intrusive sound" },

  // Backend & Cloud
  { name: "Node.js & Express", category: "Backend & Cloud", level: 88, status: "Advanced", description: "RESTful APIs, microservices, auth flows, streaming endpoints" },
  { name: "PostgreSQL & Prisma", category: "Backend & Cloud", level: 84, status: "Advanced", description: "Relational schema design, migrations, indexing, query tuning" },
  { name: "WebSockets & Realtime", category: "Backend & Cloud", level: 86, status: "Advanced", description: "Socket.io, real-time message broadcasting, room management" },
  { name: "Vercel / Cloudflare", category: "Backend & Cloud", level: 88, status: "Advanced", description: "Edge functions, workers, CDN caching rules, CI/CD pipelines" },

  // Tools & Workflows
  { name: "Git & GitHub Actions", category: "Tools & Workflows", level: 92, status: "Master", description: "Branching strategies, automated build & deploy workflows" },
  { name: "Vite & Modern Tooling", category: "Tools & Workflows", level: 95, status: "Master", description: "Fast HMR, rollup plugins, bundle analysis, tree-shaking" },
  { name: "Linear & Notion", category: "Tools & Workflows", level: 94, status: "Master", description: "Agile sprints, documentation architecture, knowledge bases" },
  { name: "Web Performance Audit", category: "Tools & Workflows", level: 90, status: "Master", description: "Core Web Vitals, Lighthouse 100s, CLS and LCP elimination" }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Creative Technologist",
    company: "Aura Digital Labs (Illustrative)",
    period: "2023 — Present",
    location: "Remote / Global",
    type: "Full-time",
    description: "Leading frontend engineering and creative direction for high-fidelity interactive web applications and design systems for forward-thinking clients worldwide.",
    responsibilities: [
      "Architected responsive design system adopted across 8 multi-tenant applications, standardizing 40+ accessible UI primitives.",
      "Engineered WebGL product visualizers and Canvas-based telemetry dashboards achieving consistent 60fps on consumer devices.",
      "Mentored junior developers in TypeScript type safety, Framer Motion choreography, and web performance optimization.",
      "Conducted weekly design engineering reviews bridging the gap between brand identity and frontend code."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL", "Vite", "Zustand"],
    isIllustrative: true
  },
  {
    id: "exp-2",
    role: "Frontend Experience Engineer",
    company: "Studio Shift Interface (Illustrative)",
    period: "2021 — 2023",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Developed bespoke digital experiences, editorial platforms, and SaaS web interfaces with obsessive attention to typographic hierarchy and motion fidelity.",
    responsibilities: [
      "Collaborated closely with UX designers to translate complex Figma prototypes into production-grade React interfaces.",
      "Optimized legacy web applications, improving Core Web Vitals and achieving a 45% reduction in initial bundle load time.",
      "Implemented full keyboard accessibility (WAI-ARIA) and dark/light color systems across all public client properties.",
      "Pioneered micro-interaction libraries utilizing CSS hardware acceleration and spring physics."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Jest"],
    isIllustrative: true
  },
  {
    id: "exp-3",
    role: "Creative Developer & UI Designer",
    company: "Independent Studio Practice",
    period: "2019 — 2021",
    location: "Dhaka, Bangladesh",
    type: "Independent / Studio",
    description: "Built custom websites, brand identities, and interactive web tools for startups, creators, and creative agencies across Southeast Asia, Europe, and North America.",
    responsibilities: [
      "Designed and coded 15+ bespoke client websites from initial moodboard to production deployment.",
      "Created open-source UI widgets and Canvas experiments downloaded thousands of times by the global developer community.",
      "Delivered complete end-to-end solutions including domain setup, automated CI/CD pipelines, and SEO optimization."
    ],
    technologies: ["JavaScript (ES6+)", "React", "CSS3 / Sass", "HTML5 Canvas", "Figma", "Git"],
    isIllustrative: true
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Dhaka (Illustrative Placeholder)",
    period: "2016 — 2020",
    focus: "Human-Computer Interaction, Algorithms & Data Structures, Computer Graphics",
    honors: "Dean's List Recognition / Creative Computing Distinction"
  }
];

export const certificationsList: CertificationItem[] = [
  {
    title: "Advanced TypeScript & Web Performance Architecture",
    issuer: "Frontend Masters (Illustrative)",
    year: "2024",
    credentialId: "TS-8849-ARCH"
  },
  {
    title: "Design Systems & Systematic UI Engineering",
    issuer: "Interaction Design Foundation (Illustrative)",
    year: "2023",
    credentialId: "DS-9912-SPEC"
  },
  {
    title: "Creative Coding with WebGL & Shaders",
    issuer: "Three.js Journey (Illustrative)",
    year: "2022",
    credentialId: "GL-4401-WEB"
  }
];

export const playgroundExperiments: PlaygroundExperiment[] = [
  {
    id: "canvas-particles",
    title: "Kinetic Particle Matrix",
    tagline: "Interactive spring physics and cursor magnetic gravity",
    type: "canvas-particles",
    description: "A canvas-rendered particle field where 300+ nodes dynamically interact with your mouse cursor, forming ephemeral constellations and spring bonds with customizable velocity and connection distances.",
    tech: ["HTML5 Canvas", "Spring Physics", "Vector Math"],
    date: "2025"
  },
  {
    id: "audio-synth",
    title: "Bionic Synth Pad",
    tagline: "Polyphonic browser synthesizer with real-time audio visualization",
    type: "audio-synth",
    description: "Play melodic scales right in your browser using computer keys (A-K) or on-screen tactile pads. Features custom oscillator waveforms, exponential release envelopes, and a live audio frequency oscilloscope.",
    tech: ["Web Audio API", "Gain Envelopes", "Oscillator Nodes"],
    date: "2025"
  },
  {
    id: "gradient-lab",
    title: "Atmospheric Mesh Lab",
    tagline: "Generative fluid gradient designer with instant CSS export",
    type: "gradient-lab",
    description: "Interactive laboratory to blend multi-point radial gradients with noise grain. Move anchor points in real-time, adjust hue shifts, and copy production-ready CSS or Tailwind classes with one click.",
    tech: ["CSS Gradients", "Color Blending", "Clipboard API"],
    date: "2024"
  },
  {
    id: "terminal-shell",
    title: "SiamOS Shell",
    tagline: "Interactive command-line interface with custom commands",
    type: "terminal-shell",
    description: "A retro-futuristic terminal shell supporting UNIX-inspired commands (`help`, `skills`, `projects`, `clear`, `whoami`, `contact`, `theme`, `date`, `cat`). Full keyboard navigation with command history.",
    tech: ["TypeScript", "Terminal Emulation", "Command Dispatcher"],
    date: "2024"
  },
  {
    id: "spring-morph",
    title: "Tactile Physics Dock",
    tagline: "Apple-inspired magnification and spring momentum simulation",
    type: "spring-morph",
    description: "Interactive dock exploring smooth non-linear magnification algorithms, dynamic damping, and tactile cursor attraction reminiscent of macOS dock icons and iOS spring mechanics.",
    tech: ["Framer Motion", "Spring Curves", "Transform Matrix"],
    date: "2024"
  }
];

export const nowData: NowData = {
  updatedAt: "November 2026",
  currentLocation: "Dhaka, Bangladesh",
  focus: [
    "Refining the design and architecture of Nebula OS — pushing browser spatial canvas paradigms.",
    "Experimenting with Web Audio API synthesis for quiet, tactile feedback in productivity software.",
    "Writing a series of essays on why modern developer tools (Linear, Raycast) feel so rewarding to use.",
    "Optimizing WebGL shader performance for low-power mobile devices and laptops."
  ],
  learning: [
    "Advanced WebGL 2.0 compute shaders and volumetric raymarching.",
    "Rust and WebAssembly (Wasm) for high-performance client-side audio DSP.",
    "Spatial design principles for next-generation vision and windowless operating interfaces."
  ],
  reading: [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "Currently Reading",
      note: "Re-reading to ground modern digital UI in timeless physical affordance principles."
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      status: "Finished",
      note: "Indispensable for understanding distributed state, consistency, and local-first architecture."
    },
    {
      title: "Grid Systems in Graphic Design",
      author: "Josef Müller-Brockmann",
      status: "Queued",
      note: "Studying classical Swiss typography to bring stronger mathematical rigor to web grid systems."
    }
  ],
  music: [
    {
      track: "A Walk",
      artist: "Tycho",
      vibes: "Warm, nostalgic morning focus",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80"
    },
    {
      track: "Singularity",
      artist: "Jon Hopkins",
      vibes: "Hypnotic, deep-work electronic pulse",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
    },
    {
      track: "Dayvan Cowboy",
      artist: "Boards of Canada",
      vibes: "Late night creative coding reverie",
      cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
    }
  ],
  goals: [
    {
      title: "Ship Nebula OS v1.0 Public Beta",
      target: "Q1 2027",
      progress: 75
    },
    {
      title: "Publish 10 In-Depth Creative Dev Case Studies",
      target: "2026 / 2027",
      progress: 50
    },
    {
      title: "Complete 100 Days of WebGL Shader Experiments",
      target: "Ongoing",
      progress: 68
    }
  ]
};
