import type { MetadataRoute } from "next";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

const ruPages = [
  "", "/admission", "/admission/grants-and-tuition", "/career",
  "/compare/management-vs-entrepreneurship", "/compare/top-universities-almaty",
  "/ent/matematika-geografiya", "/ent/prohodnye-bally",
  "/why-entrepreneurship-almau", "/about/facts",
];

const ruPrograms = [
  "/programs/international-business", "/programs/digital-commerce",
  "/programs/bae", "/programs/creative-industries",
];

const locPages = ["", "/admission", "/career", "/why-entrepreneurship-almau"];
const locPrograms = ruPrograms;

export default function sitemap(): MetadataRoute.Sitemap {
  const ru = [...ruPages, ...ruPrograms].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : /admission|ent|programs/.test(path) ? 0.9 : 0.7,
  }));

  const en = [...locPages, ...locPrograms].map((path) => ({
    url: `${siteUrl}/en${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const kk = [...locPages, ...locPrograms].map((path) => ({
    url: `${siteUrl}/kk${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...ru, ...en, ...kk];
}
