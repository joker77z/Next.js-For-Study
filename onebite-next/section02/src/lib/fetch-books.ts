import { Book } from "@/components/book-item/@type/book-item.type";

export default async function fetchBooks(q?: string): Promise<Book[]> {
  let url = `http://localhost:12345/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
