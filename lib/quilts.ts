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
  "Q-01": "Q-15_Hero_James-Dallas-Cowboys.jpg",
  "Q-02": "Q-17_Hero_Keisha-Monochromatic-Purple-Tonal.jpg",
  "Q-05": "Q-19_Hero_Mom-and-Me-Sampler-Traditional-Blocks.jpg",
  "Q-06": "Q-06_Hero_Strips-and-Stripes-Magenta-Border.jpg",
  "Q-08": "Q-08_Hero_Alexandra-Navy-Medallion-Orange-Accent.jpg",
  "Q-09": "Q-09_Hero_Anna-Botanical-Flowers-Black-Background.jpg",
  "Q-11": "Q-11_Hero_Damond-Lion-Panel-Chevron-Border.jpg",
  "Q-13": "Q-13_Hero_Imad-and-Jessy-Scrappy-Spiral-Rows.jpg",
  "Q-14": "Q-14_Hero_Irene-Jewel-Toned-Dark-Blue-Blocks.jpg",
  "Q-18": "Q-18_Hero_Margaret-Purple-Orange-Teal-Starburst.jpg",
  "Q-20": "Q-20_Hero_Shareen-Navy-Blue-Tan-Medallion.jpg",
  "Q-21": "Q-21_Hero_Sister-Jo-Rainbow-Butterfly-Panel.jpg",
  "Q-22": "Q-22_Hero_Sister-Marilyn-Blue-Zigzag-Chevron.jpg",
  "Q-24": "Q-24_Hero_Tatum-James-Gold-Olive-Checkerboard.jpg",
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
    label: "",
    description: "",
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
  { id: "Q-05", name: "Sampler", recipient: "A learning quilt", size: "sm", category: "traditional", palette: ["#8c4a1a", "#c4a032", "#2d5a8c"], label: "One of each. Many of heart.", description: "A sampler of traditional block patterns." },
  { id: "Q-24", name: "Tatum James", recipient: "For Tatum James", size: "sm", category: "traditional", palette: ["#8c6a9a", "#d0b0d0", "#f0e0f0"], label: "Named and known, and loved.", description: "A named quilt with a hand-written label.", hasDetailShot: true },
];
