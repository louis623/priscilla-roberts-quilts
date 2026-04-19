export type QuiltCategory = "featured" | "strong" | "traditional";
export type QuiltSize = "lg" | "md" | "sm" | "tall";

export type Quilt = {
  id: string;
  name: string;
  recipient: string;
  featured?: boolean;
  size: QuiltSize;
  category: QuiltCategory;
  palette: string[];
  label?: string;
  description?: string;
  details?: {
    year?: string;
    size?: string;
    technique?: string;
    materials?: string;
  };
  longform?: boolean;
  hasDetailShot?: boolean;
  heroFile?: string;
};

export const HERO_FILES: Record<string, string> = {
  "Q-01": "Q-01_Hero_Rainbow-Scrappy-Red-Diamond.jpg",
  "Q-02": "Q-02_Hero_Burgundy-Gold-Chevron.jpg",
  "Q-03": "Q-03_Hero_Checkerboard-Black-Border.jpg",
  "Q-04": "Q-04_Hero_Checkerboard-Pink-Border.jpg",
  "Q-05": "Q-05_Hero_Scrappy-Irish-Chain-Orange-Border.jpg",
  "Q-06": "Q-06_Hero_Strips-and-Stripes-Magenta-Border.jpg",
  "Q-07": "Q-07_Hero_Large-Blocks-Gold-Border-For-Olga.jpg",
  "Q-08": "Q-08_Hero_Alexandra-Navy-Medallion-Orange-Accent.jpg",
  "Q-09": "Q-09_Hero_Anna-Botanical-Flowers-Black-Background.jpg",
  "Q-10": "Q-10_Hero_Cathy-Purple-Pinwheels-Green-Border.jpg",
  "Q-11": "Q-11_Hero_Damond-Lion-Panel-Chevron-Border.jpg",
  "Q-12": "Q-12_Hero_Grace-Purple-Gold-Irish-Chain.jpg",
  "Q-13": "Q-13_Hero_Imad-and-Jessy-Scrappy-Spiral-Rows.jpg",
  "Q-14": "Q-14_Hero_Irene-Jewel-Toned-Dark-Blue-Blocks.jpg",
  "Q-15": "Q-15_Hero_James-Dallas-Cowboys.jpg",
  "Q-17": "Q-17_Hero_Keisha-Monochromatic-Purple-Tonal.jpg",
  "Q-18": "Q-18_Hero_Margaret-Purple-Orange-Teal-Starburst.jpg",
  "Q-19": "Q-19_Hero_Mom-and-Me-Sampler-Traditional-Blocks.jpg",
  "Q-20": "Q-20_Hero_Shareen-Navy-Blue-Tan-Medallion.jpg",
  "Q-21": "Q-21_Hero_Sister-Jo-Rainbow-Butterfly-Panel.jpg",
  "Q-22": "Q-22_Hero_Sister-Marilyn-Blue-Zigzag-Chevron.jpg",
  "Q-23": "Q-23_Hero_Slideshow-Large-Blocks-Jewel-Tones.jpg",
  "Q-24": "Q-24_Hero_Tatum-James-Gold-Olive-Checkerboard.jpg",
  "Q-25": "Q-25_Hero_Trip-Around-The-World-Earth-Tones.jpg",
};

export function heroSrc(id: string): string | null {
  const f = HERO_FILES[id];
  return f ? `/images/${f}` : null;
}

export const QUILTS: Quilt[] = [
  {
    id: "Q-11",
    name: "Damond's Quilt",
    recipient: "For Damond",
    featured: true,
    size: "lg",
    category: "featured",
    palette: ["#1a1812", "#2d5a3e", "#8b1a1a", "#d4c2a0"],
    label:
      "In loving memory. Pieced from his own clothes, so his shape would still be near.",
    description:
      "A lion at the center of a black, green, red, and cream chevron border. Every piece of fabric in this quilt once belonged to Priscilla's son Damond — his dress shirts, his favorite things. Made after his passing, as a way to keep him close.",
    details: {
      year: "—",
      size: "Queen",
      technique: "Appliqué + chevron pieced border",
      materials: "Clothing of the honoree",
    },
    longform: true,
  },
  {
    id: "Q-21",
    name: "Sister Jo's Quilt",
    recipient: "For Sister Jo",
    featured: true,
    size: "lg",
    category: "featured",
    palette: ["#050305", "#e85d8a", "#f4c95d", "#5dca88"],
    label: "For Jo — who taught me that a life takes flight on the smallest wings.",
    description:
      "Cascading multicolor butterflies on a black ground, bordered in orange and yellow chevron. The most arresting piece in the collection — a celebration of flight, sisterhood, and light.",
    details: {
      year: "—",
      size: "Lap",
      technique: "Art quilt, appliquéd butterflies",
      materials: "Cotton, batik",
    },
  },
  {
    id: "Q-09",
    name: "Anna's Quilt",
    recipient: "For Anna",
    featured: true,
    size: "tall",
    category: "featured",
    palette: ["#050305", "#c8e05d", "#e85d8a", "#5db4e0"],
    label: "Grow wherever you are planted, my love.",
    description:
      "Botanical flower panels on a black ground with lime green sashing and rainbow patchwork strips. Unlike anything else in the collection — bright, unapologetic, alive.",
    details: { year: "—", size: "Throw", technique: "Panel + patchwork", materials: "Cotton" },
  },
  {
    id: "Q-08",
    name: "Alexandra's Quilt",
    recipient: "For Alexandra",
    size: "md",
    category: "strong",
    palette: ["#0d1e3a", "#e8701a", "#d4c2a0"],
    label: "Strength at the center. Fire at the edge.",
    description:
      "Navy medallion with a bold orange accent in a diamond-in-square composition. Classical structure with unexpected heat.",
    details: { year: "—", size: "Queen", technique: "Medallion, diamond-in-square" },
  },
  {
    id: "Q-06",
    name: "Strips & Stripes",
    recipient: "For a friend",
    size: "md",
    category: "strong",
    palette: ["#5a2e8c", "#2d7a4e", "#2d5a8c", "#c42e6e"],
    label: "Many colored threads, one cloth. — Ephesians",
    description:
      "Purple, green, and blue strip-pieced blocks framed in magenta. A scripture label is hand-stitched to the back.",
    details: { year: "—", size: "Lap", technique: "Strip piecing" },
  },
  {
    id: "Q-13",
    name: "Imad & Jessy's Quilt",
    recipient: "For Imad & Jessy",
    size: "md",
    category: "strong",
    palette: ["#a8401a", "#e8a05d", "#2d6a8c", "#f4d890"],
    label: "Home is where family and friends gather.",
    description:
      "Multicolor diagonal rows spiraling inward, bordered in rust. A wedding gift, designed to hang where the door opens.",
    details: { year: "—", size: "Queen", technique: "Diagonal piecing" },
  },
  {
    id: "Q-18",
    name: "Margaret's Quilt",
    recipient: "For Margaret",
    size: "md",
    category: "strong",
    palette: ["#5a2e8c", "#e8701a", "#2d8c8c", "#1a2e6a"],
    label: "A starburst for a woman who is herself one.",
    description:
      "Purple, orange, and teal starburst on royal blue. Bold and unafraid — made for a friend to match.",
    details: { year: "—", size: "Lap", technique: "Starburst piecing" },
  },
  {
    id: "Q-20",
    name: "Shareen's Quilt",
    recipient: "For Shareen",
    size: "md",
    category: "strong",
    palette: ["#0d1e3a", "#2d5a8c", "#a89070", "#1a1a2e"],
    label:
      "Each tiny stitch you see, will be there when I am gone, reminding you of me.",
    description:
      "A navy, blue, and tan scrappy medallion with a hand-written label that says everything.",
    details: {
      year: "—",
      size: "Queen",
      technique: "Scrappy medallion",
      materials: "Cotton, hand-stitched label",
    },
    hasDetailShot: true,
  },
  {
    id: "Q-22",
    name: "Sister Marilyn's Quilt",
    recipient: "For Sister Marilyn",
    size: "md",
    category: "strong",
    palette: ["#1a4a6a", "#2d7aa8", "#e8701a", "#d4c2a0"],
    label: "For my sister. Every zigzag is a road we walked together.",
    description: "Blue zigzag chevron in scrappy batiks, bordered in orange.",
    details: { year: "—", size: "Lap", technique: "Zigzag chevron, batik" },
  },
  {
    id: "Q-14",
    name: "Irene's Quilt",
    recipient: "For Irene",
    size: "md",
    category: "strong",
    palette: ["#1a1a4a", "#8c2e4a", "#2d7a4e", "#c4a032"],
    label: "Jewels for a jewel of a friend.",
    description:
      "Jewel-toned scrappy blocks anchored by dark blue. Photographed in the light of the room where it now lives.",
    details: { year: "—", size: "Queen", technique: "Scrappy blocks" },
  },
  { id: "Q-01", name: "Cowboys", recipient: "For a Cowboys fan", size: "sm", category: "traditional", palette: ["#041e42", "#869397", "#ffffff"], label: "Go team.", description: "A classic Dallas Cowboys sports quilt." },
  { id: "Q-02", name: "Purple Study", recipient: "A private commission", size: "sm", category: "traditional", palette: ["#3a1a5a", "#5a2e8c", "#8e5ab8"], label: "A study in one color, which is never really one color.", description: "Tonal purple study in pieced blocks." },
  { id: "Q-03", name: "Patriots", recipient: "For a Patriots fan", size: "sm", category: "traditional", palette: ["#0a2e5a", "#c8102e", "#b0b7bc"], label: "Boston strong.", description: "Sports quilt in navy, red, and silver." },
  { id: "Q-04", name: "Trip Around the World", recipient: "For the travellers", size: "sm", category: "traditional", palette: ["#2d5a8c", "#8c2e4a", "#c4a032", "#2d7a4e"], label: "A life in concentric circles.", description: "Traditional Trip Around the World pattern." },
  { id: "Q-05", name: "Sampler", recipient: "A learning quilt", size: "sm", category: "traditional", palette: ["#8c4a1a", "#c4a032", "#2d5a8c"], label: "One of each. Many of heart.", description: "A sampler of traditional block patterns." },
  { id: "Q-07", name: "Log Cabin", recipient: "For a new home", size: "sm", category: "traditional", palette: ["#8c2e1a", "#c4a032", "#2d4a2e"], label: "Every home starts with a hearth.", description: "Classic log cabin in warm tones." },
  { id: "Q-10", name: "Nine Patch", recipient: "For a grandchild", size: "sm", category: "traditional", palette: ["#e85d8a", "#5dca88", "#f4c95d"], label: "Nine little squares, one big heart.", description: "A cheerful nine-patch." },
  { id: "Q-12", name: "Bear Paw", recipient: "For a hiker", size: "sm", category: "traditional", palette: ["#4a2e1a", "#8c6a4a", "#c4a080"], label: "Walk on, friend.", description: "Earth-toned Bear Paw variation." },
  { id: "Q-15", name: "Double Wedding Ring", recipient: "For a wedding", size: "sm", category: "traditional", palette: ["#f0e0d0", "#c4a0a0", "#8c6070"], label: "Two lives, one loop.", description: "A traditional wedding quilt in soft tones." },
  { id: "Q-16", name: "Cathedral Windows", recipient: "For a quiet room", size: "sm", category: "traditional", palette: ["#d0c4b0", "#8c8070", "#4a4035"], label: "Light through folded cloth.", description: "Cathedral Windows in neutrals." },
  { id: "Q-17", name: "Star", recipient: "For a graduate", size: "sm", category: "traditional", palette: ["#1a2e5a", "#c4a032", "#f0e0a0"], label: "Follow yours.", description: "Lone Star quilt in navy and gold." },
  { id: "Q-19", name: "Pinwheels", recipient: "For a baby", size: "sm", category: "traditional", palette: ["#f4b8c8", "#b8d4f4", "#f4e0b8"], label: "Spin gently.", description: "A soft pinwheel baby quilt." },
  { id: "Q-23", name: "Flying Geese", recipient: "For the one who left", size: "sm", category: "traditional", palette: ["#2d4a6a", "#a8a090", "#d0c4b0"], label: "Fly, and come home.", description: "Flying Geese in muted blues." },
  { id: "Q-24", name: "Tatum James", recipient: "For Tatum James", size: "sm", category: "traditional", palette: ["#8c6a9a", "#d0b0d0", "#f0e0f0"], label: "Named and known, and loved.", description: "A named quilt with a hand-written label.", hasDetailShot: true },
  { id: "Q-25", name: "Four Patch", recipient: "For the family room", size: "sm", category: "traditional", palette: ["#c4a032", "#8c2e1a", "#2d4a2e", "#1a2e5a"], label: "Four corners, one family.", description: "Large-scale four patch in autumn tones." },
];
