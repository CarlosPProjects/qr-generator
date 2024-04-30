"use client";

import Download from "@/components/Download";
import Loader from "@/components/Loader";
import { Input } from "@/components/ui/input";
import { useEncodedTextContext } from "@/context/encoded-text.context";
import { useImageFormatContext } from "@/context/image-format.context";
import { generateCodeQr } from "@/lib/generator";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { imageFormatValue } = useImageFormatContext();
  const { encodedTextValue, setEncodedTextValue } = useEncodedTextContext();

  useEffect(() => {

    if(!encodedTextValue) return;

    const fetchCodeQr = async () => {
      const url = await generateCodeQr({
        urlEncodedText: encodedTextValue,
        dimension: 400,
        imageFormat: imageFormatValue,
      });

      setLoading(false);
      setImageUrl(url);
    };

    fetchCodeQr();
  }, [encodedTextValue, imageFormatValue]);

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-white rounded-lg px-4 md:px-16 py-6 md:py-12">
        <div className="max-w-xs md:max-w-lg space-y-8 mb-4">
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-primary font-bold max-w-xs md:max-w-lg font-kanit">
            Convert your Link to QR code
          </h2>
          <Input
            className="max-w-md"
            onChange={(e) => setEncodedTextValue(e.target.value)}
            placeholder="Write something"
          />
          <p className="text-body max-w-md">
            Your QR code will be generated automatically, your generated QR code
            will open this URL.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-secondary justify-center items-center gap-10 rounded-lg p-6 lg:px-16 lg:py-12">
        <div className="flex justify-center rounded-lg border-2 border-border w-full bg-white p-6 lg:p-12">
          {imageUrl && !loading && encodedTextValue ? (
            <Image src={imageUrl} alt="qr-code" width={400} height={400} />
          ) : (
            <Loader />
          )}
        </div>
        <Download imageUrl={imageUrl} />
      </div>
    </section>
  );
}
