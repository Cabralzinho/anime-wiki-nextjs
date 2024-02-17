import Link from "next/link";

const navbarItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Anime",
    href: "/animes?page=1",
  },
  {
    title: "Mangá",
    href: "/mangas?page=1",
  },
];

export const Navbar = () => {
  return (
    <header className="flex justify-center pt-4">
      <nav className="w-full flex flex-col gap-4 justify-center items-center flex-wrap tablet:justify-between tablet:flex-row">
        <h1 className="text-brand text-3xl">Anime Wiki</h1>
        <ul className="flex gap-8 text-dark30">
          {navbarItems.map((item) => {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-dark40 text-xl transition-all h-fit"
              >
                <li>{item.title}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
