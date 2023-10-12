import "./globals.css";

import { Syne, DM_Sans } from "next/font/google";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Home Remodeling Web Design Agency | Site Sculpting",
  description:
    "We are a website design agency for Home Remodeling Businesses. We sculpt websites that boost conversion rates, instill trust and drive more sales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
