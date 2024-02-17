import { Skeleton } from "@mui/material";

export const MostAccessedsSectionLoading = () => {
  return (
    <aside className="w-full basis-[25rem] flex flex-col gap-2">
      <Skeleton
        className="w-full h-[3rem] bg-gray-700 rounded-lg"
        variant="text"
      />
      <div className="flex flex-col gap-6 flex-wrap laptop:flex-nowrap w-full">
        {[...Array(4)].map((_, index) => (
          <Skeleton
            key={index}
            className="w-full max-w-[19rem] h-[24rem] bg-gray-700 rounded-lg"
            variant="rectangular"
          />
        ))}
      </div>
    </aside>
  );
};
