"use client";

import { images } from "@/app/images";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Difference from "./Difference";

interface iParams {
  params: {
    id: number;
  };
  // isModal?: boolean;
}

const formatShutter = (val: number) => {
  if (val > 1) return val.toLocaleString();

  const fraction = 1 / val;
  return `1/${fraction.toLocaleString()}`;
};
const ImagePage = (props: iParams) => {
  const { isModal, params } = props as iParams & { isModal?: boolean };
  const router = useRouter();
  const image = images.find((image) => image.id == params.id);

  if (!image) throw new Error("NOT FOUND");
  return (
    <main className="px-4 py-2 flex flex-col justify-center flex-1">
      <div className="flex gap-2 xl:gap-4 flex-col-reverse xl:flex-row">
        <div className="flex flex-1 flex-col items-end justify-end text-sm leading-relaxed font-medium text-grap-800 font-serif">
          {!isModal && (
            <button
              onClick={() => router.back()}
              className="pointer-events-auto w-12 h-12 border border-transparent mb-auto rounded-full flex justify-center items-center hover:border-gray-200 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          )}
          <span>{image.camera}</span>
          <span>{image.focalLength}mm</span>
          <span>ƒ/{image.aperture}</span>
          <span>{formatShutter(image.shutterSpeed ?? 0)} sec</span>
          <span>ISO {image.iso}</span>
        </div>
        <div className="mx-auto image-container">
          <Difference url={image.url} raw={image.raw} />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start text-sm leading-relaxed font-medium text-grap-800 font-serif">
          {isModal && (
            <button
              onClick={() => router.back()}
              className="pointer-events-auto transition-all w-12 h-12 border border-transparent absolute right-4 top-4 rounded-full flex justify-center items-center hover:border-gray-200 hover:rotate-90 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
          <span className="text-xl font-bold">{image.title}</span>
          <span>{dayjs(image.date).format("YYYY. MM. DD")}</span>
          {image.place && <span>{image.place}</span>}
          {image.description && (
            <p className="mt-2 opacity-80">{image.description}</p>
          )}
        </div>
      </div>
      {/* <pre>{JSON.stringify(image, null, 2)}</pre> */}
    </main>
  );
};

export default ImagePage;
