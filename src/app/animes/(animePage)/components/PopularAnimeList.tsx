"use client";

import { MediaInfo } from "@/@types/MediaInfo";
import { MidiaCard } from "../../../../components/MidiaCard";
import Link from "next/link";

export const PopularAnimeList = ({
  popularAnimes,
}: {
  popularAnimes: MediaInfo;
}) => {
  return (
    <ul className="flex gap-10 flex-wrap">
      {popularAnimes.map((anime: MediaInfo) => {
        return (
          <li
            key={anime.mal_id}
            className="flex-1 basis-[15rem] cursor-pointer"
          >
            <Link href={`animes/${anime.mal_id}`}>
              <MidiaCard
                className="text-xl"
                title={anime.title}
                imageUrl={anime.images.webp.large_image_url}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
