import { images } from "@/app/images";
import { Metadata } from "next";
import { FunctionComponent } from "react";
import Image from "./ImagePage";

export const generateMetadata = ({
  params,
}: {
  params: { id: number };
}): Metadata => {
  const id = params.id;
  const image = images.find((image) => image.id == id);

  return {
    title: `${image?.title} - Kép | Balázs Fotóz`,
    openGraph: {
      images: `/images${image?.url}`,
    },
  };
};

interface iParams {
  params: {
    id: number;
  };
}

const ImagePage: FunctionComponent<iParams> = (props: iParams) => {
  return <Image {...props} />;
  // return <ImagePage {...props} />;
};

export default ImagePage;
