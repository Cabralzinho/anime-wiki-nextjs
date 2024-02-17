import { Skeleton } from "@mui/material";

export default function loading() {
  return (
    <main className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-10">
        <Skeleton
          className="w-full h-[20rem] bg-gray-700 rounded-lg"
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          className="w-full py-7 bg-gray-700 rounded-lg"
          animation="wave"
          variant="rectangular"
        />
      </div>
      <div className="flex gap-10 flex-wrap ">
        {[...Array(12)].map((_, index) => (
          <Skeleton
            key={index}
            className="basis-[15rem] flex-1 h-[20rem] bg-gray-700 rounded-lg"
            animation="wave"
            variant="rectangular"
          />
        ))}
      </div>
    </main>
  );
}
