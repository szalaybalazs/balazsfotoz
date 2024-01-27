import { FunctionComponent } from "react";

interface ipageProps {}

const page: FunctionComponent<ipageProps> = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src="balazs.jpeg"
          alt="Balázs"
          className="w-40 h-40 rounded-full"
        />
        <h1 className="text-slate-700 font-bold font-serif text-4xl mt-8">
          Balázs Fotóz
        </h1>
        <h2 className="text-slate-500 font-medium mt-2">
          Just a guy with a camera
        </h2>
      </div>
      <footer className="p-4 text-center">
        <a
          className="text-blue-500 font-medium text-sm hover:underline"
          href="mailto:hello@balazsfotoz.com"
        >
          Get in touch
        </a>
      </footer>
    </>
  );
};

export default page;
