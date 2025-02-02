import type { Metadata } from "next";
import "./globals.css";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export const metadata: Metadata = {
  title: "ARK: Blueprint Storage",
  description: "Ark: Survival Ascended Blueprint Storage",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
