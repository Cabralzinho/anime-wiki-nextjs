import { Skeleton } from "@mui/material";

export const LastLauncherSectionLoading = () => {
  return (
    <article className="w-full flex flex-col gap-2 ">
      <Skeleton
        className="w-full max-w-[17rem] h-[3rem] bg-gray-700 rounded-lg"
        variant="text"
      />
      <div className="flex flex-col gap-6 w-full">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex w-full gap-3 flex-wrap laptop:flex-nowrap"
          >
            <Skeleton
              className="w-full h-[30rem] bg-gray-700 rounded-lg"
              variant="rectangular"
            />
            <div className="flex flex-col gap-2 w-screen laptop:w-full">
              <Skeleton
                className="w-full h-[2rem] bg-gray-700 rounded-lg"
                variant="rounded"
              />
              <Skeleton
                className="w-full h-[19.5rem] bg-gray-700 rounded-lg"
                variant="rounded"
              />
              <Skeleton
                className="w-full h-[3rem] bg-gray-700 rounded-lg"
                variant="text"
              />
              <Skeleton
                className="w-full max-w-[7rem] h-[2rem] bg-gray-700 rounded-lg"
                variant="rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
