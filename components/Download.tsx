"use client";

import { EImageFormat } from "@/types/image-format.interface";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useImageFormatContext } from "@/context/image-format.context";
import { useEncodedTextContext } from "@/context/encoded-text.context";
import { createDownloadLink } from "@/lib/utils";
import { useImageUrlContext } from "@/context/image-url.context";

const Download = () => {
  const { imageFormatValue, setImageFormatValue } = useImageFormatContext();
  const { encodedTextValue } = useEncodedTextContext();
  const { imageUrlValue } = useImageUrlContext();

  const handleDownload = async () => {
    if (imageUrlValue) {
      createDownloadLink(imageUrlValue, imageFormatValue);
    }
  };

  const handleFormatChange = (newFormat: EImageFormat) => {
    setImageFormatValue(newFormat);
  };

  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
      <Button
        className="flex-1 w-full"
        disabled={!encodedTextValue}
        onClick={handleDownload}
      >
        Download
      </Button>
      <div className="flex flex-1 w-full flex-row gap-4 items-center justify-center sm:justify-end">
        <p>File format:</p>
        <Select onValueChange={handleFormatChange}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="PNG" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(EImageFormat).map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Download;
