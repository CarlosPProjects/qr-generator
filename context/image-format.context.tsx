import { EImageFormat } from "@/types/image-format.interface";
import { FC, createContext, useContext, useState } from "react";

interface IImageFormatContext {
  imageFormatValue: EImageFormat;
  setImageFormatValue: (value: EImageFormat) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

const ImageFormatContext = createContext<IImageFormatContext | null>(null);

export const ImageFormatProvider: FC<IProviderProps> = ({ children }) => {
  const [imageFormatValue, setImageFormatValue] = useState<EImageFormat>(EImageFormat.PNG);

  return (
    <ImageFormatContext.Provider
      value={{ imageFormatValue, setImageFormatValue }}
    >
      {children}
    </ImageFormatContext.Provider>
  );
};

export const useImageFormatContext = () => {
  const context = useContext(ImageFormatContext);

  if (!context) {
    throw new Error(
      "useImageFormatContext must be used within an ImageFormatProvider"
    );
  }

  return context;
};
