"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImageModal from "./ImageModal";
import { images } from "./images";
import ImagePage from "./[id]/ImagePage";

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
              className="mb-2 block cursor-zoom-in"
              href={`/i/${image.id}`}
              key={`image-${image.id}`}
            >
              <div
                className="flex"
                style={{ aspectRatio: image.width / image.height }}
              >
                <img
                  className="rounded-sm"
                  src={`/images/${image.compressed ?? image.url}`}
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
