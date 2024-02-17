import { MidiaCard } from "@/components/MidiaCard";
import { MediaInfo } from "@/@types/MediaInfo";
import Link from "next/link";
import { getMostAccessedMangas } from "@/functions/getMidia";

export const MostAccessedsSection = async () => {
  const mostAccessedManga = await getMostAccessedMangas();

  return (
    <aside className="flex flex-col gap-4">
      <h2 className="text-2xl">Mangás mais acessados</h2>
      <div className="flex flex-col gap-6">
        {mostAccessedManga.map((manga: MediaInfo) => {
          return (
            <Link
              key={manga.mal_id}
              href={`mangas/${manga.mal_id}`}
              className=""
            >
              <div className="h-full max-h-[24rem]">
                <MidiaCard
                  title={manga.title}
                  imageUrl={manga.images.webp.image_url}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
