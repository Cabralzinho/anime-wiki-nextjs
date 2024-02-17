export const ButtonSearch = ({searchMidia}: {searchMidia: () => void}) => {
  return (
    <button
      onClick={searchMidia}
      className="bg-slate-500/50 hover:bg-slate-600 p-4 rounded-e-lg transition-all"
    >
      Pesquisar
    </button>
  );
};
