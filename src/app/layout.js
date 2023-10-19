import "./globals.css";
import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Green Garden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
