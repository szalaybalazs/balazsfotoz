import "./globals.scss";

export const metadata = {
  title: "Balázs Fotóz",
  description: "Just a guy with a camera",

  // openGraph: {
  //   images: image ? `/images${image}` : undefined,
  // },
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
