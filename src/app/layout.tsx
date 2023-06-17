import "./globals.scss";
import { images } from "./images";

const image = images[0]?.compressed ?? images[0]?.url;
export const metadata = {
  title: "Balázs Fotóz",
  description: "Csak egy hobbifotós képei",

  openGraph: {
    images: image ? `/images${image}` : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
