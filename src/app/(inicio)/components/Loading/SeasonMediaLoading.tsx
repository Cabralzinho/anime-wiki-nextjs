import { Skeleton } from "@mui/material";

export const SeasonMediaLoading = () => {
  return (
    <section className="flex flex-col w-full gap-6">
      <Skeleton
        className="w-full max-w-[22.5rem] h-[2rem] bg-gray-700 rounded-lg"
        variant="rectangular"
      />
      <div className="flex flex-col w-full gap-5">
        <div className="w-full flex gap-5 flex-wrap laptop:flex-nowrap basis-[20rem] flex-1">
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[25rem] bg-gray-700 rounded-lg"
              variant="rectangular"
            />
          ))}
        </div>
        <div className="w-full flex gap-5 flex-wrap laptop:flex-nowrap basis-[20rem] flex-1">
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[25rem] bg-gray-700 rounded-lg"
              variant="rectangular"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
