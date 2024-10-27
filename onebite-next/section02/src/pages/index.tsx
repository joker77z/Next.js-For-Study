import BookItem from "@/components/book-item/book-item";
import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import bookData from "@/mock/books.json";
import { ReactNode } from "react";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {bookData.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
      </section>
    </div>
  );
}

/**
 * NOTE: Root컴포넌트에서 각 페이지마다 다른 레이아웃을 사용할 수 있게 합니다.
 * JS의 함수는 모두 객체라서 메서드를 추가할 수 있는 것.
 */
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
