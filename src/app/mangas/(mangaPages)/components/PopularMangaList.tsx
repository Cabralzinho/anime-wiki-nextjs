"use client";

import { MediaInfo } from "@/@types/MediaInfo";
import { MidiaCard } from "../../../../components/MidiaCard";
import { useParams, useRouter } from "next/navigation";

export const PopularMangaList = ({
  popularMangas,
}: {
  popularMangas: MediaInfo;
}) => {
  const router = useRouter();

  const handleListClick = (idManga: number) => {
    router.push(`/mangas/${idManga}`);
  };

  return (
    <ul className="flex gap-10 flex-wrap">
      {popularMangas.map((manga: MediaInfo) => (
        <li
          onClick={() => handleListClick(manga.mal_id)}
          key={manga.mal_id}
          className="flex-1 basis-[15rem] cursor-pointer"
        >
          <div className="h-[24rem]">
            <MidiaCard
              className="text-sm"
              title={manga.title}
              imageUrl={manga.images.webp.large_image_url}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
