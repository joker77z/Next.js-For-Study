// next/navigation은 App Router에서 사용하기 때문에 next/router에 있는 useRouter를 꺼내온다.
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  return <h1>{q}</h1>;
}
