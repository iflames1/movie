import Link from "next/link";

export default function NavItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        <Icon className="sm:hidden inline" />
        <span className="uppercase hidden sm:inline">{title}</span>
      </Link>
    </div>
  );
}
