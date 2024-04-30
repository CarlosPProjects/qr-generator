"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useImageFormatContext } from "@/context/image-format.context";
import { useEncodedTextContext } from "@/context/encoded-text.context";
import { generateCodeQr } from "@/lib/generator";
import { useImageUrlContext } from "@/context/image-url.context";

const CodeQr = () => {
  const { imageFormatValue } = useImageFormatContext();
  const { encodedTextValue } = useEncodedTextContext();
  const { imageUrlValue, setImageUrlValue } = useImageUrlContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!encodedTextValue) return;

    const fetchCodeQr = async () => {
      const url = await generateCodeQr({
        urlEncodedText: encodedTextValue,
        dimension: 400,
        imageFormat: imageFormatValue,
      });
      setImageUrlValue(url);
      setLoading(false);
    };

    fetchCodeQr();
  }, [setImageUrlValue, encodedTextValue, imageFormatValue]);

  return (
    <div className="flex justify-center rounded-lg border-2 border-border w-full bg-white p-6 lg:p-12">
      {imageUrlValue && encodedTextValue && !loading ? (
        <Image src={imageUrlValue} alt="qr-code" width={400} height={400} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CodeQr;
