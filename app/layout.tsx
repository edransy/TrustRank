import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustRank — A Formal Mathematical Model",
  description:
    "The crypto-native descendant of PageRank: trust as a stake-grounded eigenvector, defended by slashing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
