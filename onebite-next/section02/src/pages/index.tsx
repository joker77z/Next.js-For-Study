import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import { ReactNode } from "react";
import style from "./index.module.css";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
    </>
  );
}

/**
 * NOTE: Root컴포넌트에서 각 페이지마다 다른 레이아웃을 사용할 수 있게 합니다.
 * JS의 함수는 모두 객체라서 메서드를 추가할 수 있는 것.
 */

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
