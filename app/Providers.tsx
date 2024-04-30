"use client";

import { EncodedTextProvider } from "@/context/encoded-text.context";
import { ImageFormatProvider } from "@/context/image-format.context";
import { ImageUrlProvider } from "@/context/image-url.context";
import React, { FC } from "react";

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }) => {
  return (
    <ImageFormatProvider>
      <EncodedTextProvider>
        <ImageUrlProvider>{children}</ImageUrlProvider>
      </EncodedTextProvider>
    </ImageFormatProvider>
  );
};

export default Providers;
