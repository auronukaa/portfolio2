import "./globals.css";

import { Azeret_Mono, DM_Sans } from "next/font/google";

const font = DM_Sans(
  { subsets: ["latin"] },
  {
    weight: ["400", "500", "600", "700", "800", "900"],
  }
);

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-azeret-mono",
});

export const metadata = {
  title: "Home Remodeling Web Design Agency",
  description:
    "We sculpt websites for Home Remodeling Businesses that boost conversion rates, instill trust and drive more sales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} ${azeretMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
