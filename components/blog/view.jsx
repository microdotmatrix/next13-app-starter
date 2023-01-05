import { formatDate } from "@utils/helpers";
import clsx from 'clsx'
import Image from "next/image";

import css from "./style.module.css";

export default async function PostView({ post }) {
  const postImage = post.featuredImage;
  return (
    <>
      <header className="postHero relative h-[65vh] w-full overflow-hidden">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-end h-full pb-6 relative z-10">
          <h1 className={css.title}>{post.title}</h1>
          <h4 className={css.subtitle}>{formatDate(post.date)}</h4>
        </div>
        <Image
          className="absolute z-0 w-full h-full object-cover object-center top-0 left-0"
          src={
            postImage
              ? postImage.node.sourceUrl
              : `https://unsplash.it/1920?random&gravity=center`
          }
          alt={postImage ? postImage.node.altText : `Random Image`}
          height={postImage ? postImage.node.mediaDetails.height : 1280}
          width={postImage ? postImage.node.mediaDetails.width : 1920}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUVzfcDwACHAE4n99SSwAAAABJRU5ErkJggg=="
          quality={75}
        />
      </header>
      <article className="flex flex-col max-w-screen-lg mx-auto pt-8">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}
