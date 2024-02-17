import { PresentationCard } from "@/components/PresentationCard";
import { getPopularAnimes } from "@/functions/getMidia";
import { SearchInputAnime } from "./components/SearchInputAnime";
import { PopularAnimeList } from "./components/PopularAnimeList";
import { AnimePagination } from "./components/AnimePagination";

export default async function anime({
  searchParams = { page: "1" },
}: {
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page);

  const popularAnimes = await getPopularAnimes(12, page);

  return (
    <main className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <PresentationCard
          title="Anime"
          description="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
          imageUrl="/image/12.png"
        />
        <SearchInputAnime />
      </div>
      <PopularAnimeList popularAnimes={popularAnimes} />
      <AnimePagination />
    </main>
  );
}
