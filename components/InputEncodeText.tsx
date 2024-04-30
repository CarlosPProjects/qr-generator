"use client";

import React from "react";
import { Input } from "./ui/input";
import { useEncodedTextContext } from "@/context/encoded-text.context";

const InputEncodeText = () => {
  const { setEncodedTextValue } = useEncodedTextContext();
  return (
    <Input
      className="max-w-md bg-muted"
      onChange={(e) => setEncodedTextValue(e.target.value)}
      placeholder="Enter or paste URL"
    />
  );
};

export default InputEncodeText;
