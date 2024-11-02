import { Book } from "@/components/book-item/@type/book-item.type";

export default async function fetchOneBook(id: number): Promise<Book | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
