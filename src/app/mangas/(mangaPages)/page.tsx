import { PresentationCard } from "@/components/PresentationCard";
import { getPopularMangas } from "@/functions/getMidia";
import { SearchInputManga } from "./components/SearchInputManga";
import { PopularMangaList } from "./components/PopularMangaList";
import { MangaPagination } from "./components/MangaPagination";

export default async function manga({
  searchParams = { page: "1" },
}: {
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page);

  const popularMangas = await getPopularMangas(12, page);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <main className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <PresentationCard
          title="Mangá"
          description="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
          imageUrl="/image/17.png"
        />
        <SearchInputManga />
      </div>
      <PopularMangaList popularMangas={popularMangas} />
      <MangaPagination />
    </main>
  );
}
