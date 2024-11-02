import BookItem from "@/components/book-item/book-item";
import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import { InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";
import styles from "./index.module.css";

export const getServerSideProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

export default function Home({ allBooks, recoBooks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
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
