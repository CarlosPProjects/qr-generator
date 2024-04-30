import { FC, createContext, useContext, useState } from "react";

interface IEncodedTextContext {
  encodedTextValue: string;
  setEncodedTextValue: (value: string) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

const EncodedTextContext = createContext<IEncodedTextContext | null>(null);

export const EncodedTextProvider: FC<IProviderProps> = ({ children }) => {
  const [encodedTextValue, setEncodedTextValue] =
    useState<string>("");

  return (
    <EncodedTextContext.Provider
      value={{ encodedTextValue, setEncodedTextValue }}
    >
      {children}
    </EncodedTextContext.Provider>
  );
};

export const useEncodedTextContext = () => {
  const context = useContext(EncodedTextContext);

  if (!context) {
    throw new Error(
      "useEncodedTextContext must be used within an EncodedTextProvider"
    );
  }

  return context;
};
