import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sana Özel",
  description: "Belçika'dan Mersin'e uzanan sevgi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
