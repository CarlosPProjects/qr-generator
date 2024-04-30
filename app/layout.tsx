import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Generator",
  description: "Generate QR codes with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="container min-h-screen max-sm:px-4 flex flex-col justify-center">
            <main className="bg-white __mainContainer">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
