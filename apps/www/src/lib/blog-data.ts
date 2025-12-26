import { getAllBlogPosts } from "@/lib/blog";

export async function fetchAllBlogPosts() {
  return getAllBlogPosts();
}
