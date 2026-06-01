import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentEntry<T> = Readonly<{
  slug: string;
  pathname: string;
  data: T;
  content: string;
}>;

const contentRoot = path.join(process.cwd(), "content");

function readCollection<T extends Record<string, unknown>>(
  folder: string,
  route: string,
) {
  return readdirSync(path.join(contentRoot, folder))
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const filePath = path.join(contentRoot, folder, fileName);
      const raw = readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        pathname: `/${route}/${slug}`,
        data: data as T,
        content,
      } satisfies ContentEntry<T>;
    });
}

function sortByDate<T extends { date?: string | Date }>(entries: ContentEntry<T>[]) {
  return [...entries].sort((left, right) => {
    const leftDate = new Date(left.data.date ?? 0).getTime();
    const rightDate = new Date(right.data.date ?? 0).getTime();

    return rightDate - leftDate;
  });
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[*_`>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerptFromMarkdown(markdown: string) {
  const firstParagraph = markdown
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .find(Boolean);

  return stripMarkdown(firstParagraph ?? markdown);
}

export type MediaItemData = {
  title: string;
  date: string;
  image: string;
  hideTitle?: boolean;
};

export type BlogPostData = {
  title: string;
  date: string;
  image: string;
  summary: string;
  layout?: string;
};

export type ResourceData = {
  title: string;
  date: string;
  image: string;
  category: "books" | "courses";
  hideTitle?: boolean;
};

export type AudioData = {
  title: string;
  date: string;
  image?: string;
  audioUrl: string;
  duration?: string;
  summary?: string;
};

export type ServiceData = {
  title: string;
  date: string;
  image: string;
  category: string;
  hideTitle?: boolean;
};

export type EventData = {
  title: string;
  date: string;
  image: string;
  category: "hero" | "posts";
  hideTitle?: boolean;
  summary?: string;
};

export type LectureData = {
  title: string;
  date: string;
  image: string;
  hideTitle?: boolean;
};

export type AboutData = {
  title: string;
  image: string;
  hideTitle?: boolean;
};

export const getInterviews = () =>
  sortByDate(readCollection<MediaItemData>("interviews", "posts"));

export const getBlogPosts = () =>
  sortByDate(readCollection<BlogPostData>("blog", "posts"));

export const getBlogPostSlugs = () => getBlogPosts().map((post) => post.slug);

export const getBlogPostBySlug = (slug: string) =>
  getBlogPosts().find((post) => post.slug === slug);

export const getResources = () =>
  sortByDate(readCollection<ResourceData>("resources", "resources"));

export const getResourcesByCategory = (category: ResourceData["category"]) =>
  getResources().filter((resource) => resource.data.category === category);

export const getAudioResources = () =>
  sortByDate(readCollection<AudioData>("audio", "audio"));

export const getServices = () =>
  sortByDate(readCollection<ServiceData>("services", "services"));

export const getServicesByCategory = (category: string) =>
  getServices().filter((service) => service.data.category === category);

export const getLectures = () =>
  sortByDate(readCollection<LectureData>("lectures", "lecturer"));

export const getAboutPage = () =>
  readCollection<AboutData>("about", "about").find((entry) => entry.slug === "za-men");

export const getEvents = () => sortByDate(readCollection<EventData>("events", "events"));

export const getEventsHero = () =>
  getEvents().find((event) => event.data.category === "hero");

export const getEventsPosts = () =>
  getEvents().filter((event) => event.data.category === "posts");

export const getEventSlugs = () => getEventsPosts().map((event) => event.slug);

export const getEventBySlug = (slug: string) =>
  getEventsPosts().find((event) => event.slug === slug);

