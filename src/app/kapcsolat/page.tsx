import { FunctionComponent } from "react";
import Form from "./Form";
import Header from "../Header";
import Footer from "../Footer";

interface ipageProps {}

export const metadata = {
  title: "Kapcsolat | Széchenyi Fotó",
  description: "Vedd fel velem a kapcsolatot",
  image: "/mark.jpg",
  "twitter-image": "/mark.jpg",
  "opengraph-image": "/mark.jpg",
  openGraph: {
    images: "/mark.jpg",
  },
};

const Page: FunctionComponent<ipageProps> = () => {
  return (
    <>
      <Header />
      <main className="px-4 flex-1 max-w-screen-sm mx-auto pb-4 w-full">
        <h2 className="font-serif text-4xl font-medium mt-16">Kapcsolat</h2>
        <p className="font-serif text-lg mt-2 font-medium text-gray-700">
          Vedd fel velem a kapcsolatot
        </p>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default Page;
