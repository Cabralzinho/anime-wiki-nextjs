"use client";

import { Pagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export const AnimePagination = () => {
  const page = useSearchParams().get("page");

  const router = useRouter();

  return (
    <div className="flex justify-center">
      <Pagination
        className="bg-slate-100 rounded-full py-2"
        onChange={(_, page) => {
          router.push(`/animes?page=${page}`);
        }}
        page={Number(page)}
        count={10}
        color="primary"
      />
    </div>
  );
};
