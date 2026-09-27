import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree Ram Tiles & Sanitary | Angul",
  description: "Premium tiles, marble, granite and sanitary solutions in Angul, Odisha."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}