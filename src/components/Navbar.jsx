import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="dark:bg-gray-600 bg-amber-100">
      <div className="flex justify-around  p-4 lg:text-lg max-w-6xl mx-auto">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top rated" param="fetchTopRated" />
      </div>
    </div>
  );
}
