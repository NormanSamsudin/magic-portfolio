import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export const dynamic = "force-static";

export default async function sitemap() {
  interface PostMetadata {
    publishedAt: string;
    [key: string]: any;
  }

  interface Post {
    slug: string;
    metadata: PostMetadata;
    [key: string]: any;
  }

  interface SitemapEntry {
    url: string;
    lastModified: string;
  }

  const works: SitemapEntry[] = getPosts(["src", "app", "work", "projects"]).map((post: Post): SitemapEntry => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route as keyof typeof routesConfig]);

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...works];
}
