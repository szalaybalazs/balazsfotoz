"use client";

import Link from "next/link";
import { images } from "./images";
import { useEffect, useState } from "react";
import ImagePage from "./images/[id]/page";
import ImageModal from "./ImageModal";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  const [image, setImage] = useState<number | null>(null);
  const _handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const href = e.currentTarget.getAttribute("href");
    window.history.pushState({}, "", href);
    const id = href?.split("/").pop();
    if (id) setImage(parseInt(id));
  };

  const _handlePop = () => {
    console.log("popstate", window.location);
    if (window.location.pathname === "/") setImage(null);
    // const id = window.location.pathname.split("/").pop();
    // if (id) setImage(parseInt(id));
  };
  useEffect(() => {
    // listen to history change
    window.addEventListener("popstate", _handlePop);

    return () => {
      window.removeEventListener("popstate", _handlePop);
    };
  }, []);

  return (
    <>
      <main className="flex flex-1 flex-col">
        <Header />
        <div className="flex-1 px-4 mx-auto columns-1 md:columns-2 lg:columns-3 gap-x-2 w-full max-w-6xl">
          {images.map((image) => (
            <a
              onClick={_handleClick}
              className="mb-2 block"
              href={`/images/${image.id}`}
              key={`image-${image.id}`}
            >
              <div className="flex">
                <img
                  className="rounded-sm"
                  src={`/images/${image.url}`}
                  alt={image.title}
                />
              </div>
            </a>
          ))}
        </div>

        <Footer />
      </main>

      {image && (
        <ImageModal>
          <ImagePage isModal params={{ id: image }} />
        </ImageModal>
      )}
    </>
  );
}
