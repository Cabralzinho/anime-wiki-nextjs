import { Skeleton } from "@mui/material";
import { LastLauncherSectionLoading } from "./components/Loading/LastLauncherSectionLoading.";
import { MostAccessedsSectionLoading } from "./components/Loading/MostAccessedsSectionLoading";
import { SeasonMediaLoading } from "./components/Loading/SeasonMediaLoading";

export default function loading() {
  return (
    <main className="w-full flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <Skeleton
          className="w-full max-w-[19rem] h-[3rem] bg-gray-700 rounded-lg"
          variant="text"
        />
        <Skeleton
          className="w-full max-w-[31rem] h-[4rem] bg-gray-700 rounded-lg"
          variant="text"
        />
      </div>
      <section className="flex w-full gap-10 overflow-x-hidden">
        <LastLauncherSectionLoading />
        <MostAccessedsSectionLoading />
      </section>
      <SeasonMediaLoading />
    </main>
  );
}
