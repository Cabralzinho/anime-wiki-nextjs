"use client";

import { useState } from "react";
import { MediaInfo } from "@/@types/MediaInfo";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { getSearchAnime } from "@/functions/getMidia";
import { MidiaCard } from "@/components/MidiaCard";
import { ButtonSearch } from "@/components/ButtonSearch";

export const SearchInputAnime = () => {
  const [animeName, setAnimeName] = useState("");
  const [isListVisibled, setIsListVisibled] = useState(false);
  const [searchAnime, setSearchAnime] = useState<MediaInfo>();
  const [isLoading, setIsloading] = useState(false);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setAnimeName(value);
  };

  const handleInputClick = async () => {
    if (animeName === "") return;

    setIsloading(true);

    const searchAnime = await getSearchAnime(animeName);

    setIsloading(false);

    if (!searchAnime) return;

    setSearchAnime(searchAnime);

    setAnimeName("");

    setIsListVisibled(true);
  };

  const handleListClick = (idAnime: number) => {
    router.push(`/animes/${idAnime}`);
  };

  return (
    <>
      <div className="w-full flex items-center bg-slate-700 rounded-lg pl-4">
        {isLoading && (
          <div className="flex justify-center w-full px-4 py-2">
            <CircularProgress />
          </div>
        )}
        {!isLoading && (
          <>
            <input
              value={animeName}
              onChange={handleInputChange}
              className="w-full p-4 outline-none bg-transparent"
              placeholder="Pesquise um anime"
            />
            <ButtonSearch searchMidia={handleInputClick} />
          </>
        )}
      </div>
      {isListVisibled && (
        <ul className="flex flex-wrap justify-center gap-5">
          {searchAnime?.map((anime: MediaInfo) => (
            <li
              onClick={() => handleListClick(anime.mal_id)}
              className="cursor-pointer w-full max-w-[16.4rem]"
              key={anime.mal_id}
            >
              <MidiaCard
                className="text-lg object-cover"
                title={anime.title}
                imageUrl={anime.images.webp.large_image_url}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
