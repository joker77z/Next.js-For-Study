import { BookData } from "@/types";
import style from "./page.module.css";

export default async function Page({ params }: { params: { id: string | string[] } }) {
  const { id } = params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`);
  if (!response.ok) {
    return <div>Failed to load book data</div>;
  }
  const book: BookData = await response.json();

  const { title, subTitle, coverImgUrl, author, publisher, description } = book;

  return (
    <div className={style.container}>
      <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
