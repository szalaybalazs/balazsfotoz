import Link from "next/link";
import { FunctionComponent } from "react";

interface iHeaderProps {}

const Header: FunctionComponent<iHeaderProps> = () => {
  return (
    <header className="px-4 h-24 mb-2 items-center flex justify-between mx-auto  w-full max-w-6xl">
      <span />
      <Link
        href="/"
        className="absolute left-[50%] translate-x-[-50%] flex items-center gap-2 text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        <span className="font-serif font-bold ">Balázs Fotóz</span>
      </Link>
      <Link
        href="/kapcsolat"
        className="font-medium text-ms font-serif text-gray-500 hover:text-gray-700 hover:underline underline-offset-4"
      >
        Kapcsolat
      </Link>
    </header>
  );
};

export default Header;
