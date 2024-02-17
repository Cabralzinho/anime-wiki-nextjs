"use client";

export default function error(params: {
  error: { message: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>{params.error.message}</h1>
      <button onClick={params.reset}>Tentar Novamente</button>
    </div>
  );
}
