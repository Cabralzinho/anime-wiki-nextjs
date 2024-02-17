import { LastLaunchesSection } from "./components/LastLaunchesSection";
import { MostAccessedsSection } from "./components/MostAccessedsSection";
import { SeasonMedia } from "./components/SeasonMidia";

export default async function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl">Mundo Nerd?</h1>
        <p className="text-dark30 text-xl w-full max-w-[31rem]">
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
      <div className="flex gap-10 flex-wrap">
        <LastLaunchesSection />
        <MostAccessedsSection />
      </div>
      <SeasonMedia />
    </div>
  );
}
