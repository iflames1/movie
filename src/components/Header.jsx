import { MdHome } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <NavItem title="home" address="/" Icon={MdHome} />
        <NavItem title="about" address="/about" Icon={FaCircleInfo} />
      </div>
      <div className="flex gap-4 items-center">
        <div>mode</div>
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMdb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </header>
  );
}
