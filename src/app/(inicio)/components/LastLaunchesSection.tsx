import { GradientImage } from "@/components/GradientImage";
import { getNewestAnimes } from "../../../functions/getMidia";
import { MediaInfo } from "@/@types/MediaInfo";
import Link from "next/link";
import { extractDate } from "@/utils/extractDate";

export const LastLaunchesSection = async () => {
  const newestAnimes = await getNewestAnimes();

  return (
    <section className="flex flex-col gap-4 flex-1 basis-[40rem]">
      <h2 className="text-2xl">Ultimos Lançamentos</h2>
      <ul className="flex flex-col gap-6">
        {newestAnimes.map((anime: MediaInfo) => (
          <article
            key={anime.mal_id}
            className="flex rounded-lg h-full flex-wrap gap-4"
          >
            <GradientImage
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              className="w-full flex-1 basis-[10rem] rounded-lg overflow-hidden"
            />
            <div className="flex flex-col gap-2 flex-1 basis-[20rem] justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl text-dark40">{anime.title}</h3>
                <p className="text-dark30 text-sm">
                  {anime.synopsis || "Sem sinopse"}
                </p>
                <span className="text-sm text-dark30">{extractDate(anime.aired.from)}</span>
              </div>
              <Link
                className="bg-brand hover:bg-brand/90 mt-4 px-3 py-2 w-full max-w-[7rem] rounded text-sm transition-all text-center"
                href={`/animes/${anime.mal_id}`}
              >
                Ler Notícia
              </Link>
            </div>
          </article>
        ))}
      </ul>
    </section>
  );
};
