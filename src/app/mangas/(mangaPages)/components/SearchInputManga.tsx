"use client";

import { useState } from "react";
import { getSearchManga } from "../../../../functions/getMidia";
import { MediaInfo } from "@/@types/MediaInfo";
import { MidiaCard } from "../../../../components/MidiaCard";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { ButtonSearch } from "@/components/ButtonSearch";

export const SearchInputManga = () => {
  const [mangaName, setMangaName] = useState("");
  const [isListVisibled, setIsListVisibled] = useState(false);
  const [searchManga, setSearchManga] = useState<MediaInfo>();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setMangaName(value);
  };

  const handleInputClick = async () => {
    setIsLoading(true);

    const searchAnime = await getSearchManga(mangaName);

    setIsLoading(false);

    if (!searchAnime) return;

    setSearchManga(searchAnime);

    setMangaName("");

    setIsListVisibled(true);
  };

  const handleListClick = (idManga: number) => {
    console.log(idManga);

    router.push(`/mangas/${idManga}`);
  };

  return (
    <>
      <div className="w-full flex items-center bg-slate-700 pl-4 rounded-lg">
        {isLoading ? (
          <div className="flex justify-center w-full px-4 py-2">
            <CircularProgress />
          </div>
        ) : (
          <>
            <input
              onChange={handleInputChange}
              className="w-full px-4 py-4 outline-none bg-transparent"
              placeholder="Pesquise um mangá"
            />
            <ButtonSearch searchMidia={handleInputClick} />
          </>
        )}
      </div>
      {isListVisibled && (
        <ul className="flex flex-wrap gap-5 justify-center">
          {searchManga?.map((manga: MediaInfo) => (
            <li
              onClick={() => handleListClick(manga.mal_id)}
              className="cursor-pointer w-full max-w-[16.4rem]"
              key={manga.mal_id}
            >
              <MidiaCard
                className="text-lg"
                title={manga.title}
                imageUrl={manga.images.webp.large_image_url}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
