"use client";

import QrLoader from "@/components/QrLoader";
import { generateCodeQr } from "@/utils/generator";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [encodedText, setEncodedText] = useState<string>("localhost");

  useEffect(() => {
    const fetchCodeQr = async () => {
      const url = await generateCodeQr({
        urlEncodedText: encodedText,
        dimension: 400,
      });

      setLoading(false);
      setImageUrl(url);
    };

    fetchCodeQr();
  }, [encodedText]);

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-white rounded-lg px-4 md:px-16 py-6 md:py-12">
        <div className="max-w-xs md:max-w-lg space-y-8 mb-4">
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-primary font-bold max-w-xs md:max-w-lg">
            Convert your Link to QR code
          </h2>
          <form>
            <input type="text" className="bg-background-muted w-full max-w-md px-3 md:px-5 py-2 md:py-3 rounded-md font-sans placeholder text-body placeholder:opacity-50 text-lg outline-none" placeholder="Enter or paste URL" />
          </form>
          <p className="text-body max-w-md">
            Your QR code will be generated automatically, your generated QR code will open this URL.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-secondary items-center rounded-lg px-16 py-12">
        <div className="rounded-lg border-2 border-border p-12 bg-white blur">
          {imageUrl && !loading ? (
            <Image src={imageUrl} alt="qr-code" width={400} height={400} />
          ) : (
            <QrLoader />
          )}
        </div>
      </div>
    </section>
  );
}
