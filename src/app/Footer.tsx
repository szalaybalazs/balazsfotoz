import { FunctionComponent } from "react";

interface iFooterProps {}

const Footer: FunctionComponent<iFooterProps> = () => {
  return (
    <footer className="px-4 justify-center text-xs font-medium text-gray-600 py-4 mt-2 items-center flex gap-2 mx-auto  w-full max-w-6xl border-t border-gray-300">
      <span>Balázs Fotóz ©</span>|<span>Minden Jog Fentartva</span>|
      <a
        className="text-pink-500"
        target="_blank"
        href="https://instagram.com/balazsfotoz"
      >
        @balázsfotóz
      </a>
      |<a href="https://szalay.me">Development</a>
    </footer>
  );
};

export default Footer;
