import { FC, createContext, useContext, useState } from "react";

interface IImageUrlContext {
  imageUrlValue: string | null | undefined;
  setImageUrlValue: (value: string) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

const ImageUrlContext = createContext<IImageUrlContext | null>(null);

export const ImageUrlProvider: FC<IProviderProps> = ({ children }) => {
  const [imageUrlValue, setImageUrlValue] = useState<string | null>();

  return (
    <ImageUrlContext.Provider value={{ imageUrlValue, setImageUrlValue }}>
      {children}
    </ImageUrlContext.Provider>
  );
};

export const useImageUrlContext = () => {
  const context = useContext(ImageUrlContext);

  if (!context) {
    throw new Error(
      "useImageUrlContext must be used within an ImageUrlProvider"
    );
  }

  return context;
};
