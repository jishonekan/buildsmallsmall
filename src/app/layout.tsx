import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Small Small - Incremental Home Construction",
  description: "Build your dream home incrementally. Connect with verified artisans, buy materials at cooperative prices, and finance your project small small.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}

