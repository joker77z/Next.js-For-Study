// next/navigation은 App Router에서 사용하기 때문에 next/router에 있는 useRouter를 꺼내온다.
import BookItem from "@/components/book-item/book-item";
import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import books from "@/mock/books.json";
import { ReactNode } from "react";

export default function Page() {
  // const router = useRouter();
  // const { q } = router.query;

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
