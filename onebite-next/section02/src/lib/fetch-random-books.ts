import { Book } from "@/components/book-item/@type/book-item.type";

export default async function fetchRandomBooks(): Promise<Book[]> {
  const url = "http://localhost:12345/book/random";

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
