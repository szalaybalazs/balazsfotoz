import "./globals.scss";

export const metadata = {
  title: "Balázs Fotóz",
  description: "Csak egy hobbifotós képei",
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
