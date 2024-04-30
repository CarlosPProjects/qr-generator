"use server";

import { EImageFormat } from "@/types/image-format.interface";

const BASE_URL = "https://api.qrserver.com/v1/create-qr-code/";

interface IgenerateCodeQr {
  urlEncodedText: string;
  dimension: number;
  imageFormat: EImageFormat;
}

export const generateCodeQr = async({
  urlEncodedText,
  dimension,
  imageFormat,
}: IgenerateCodeQr): Promise<string> => {
  const url = `${BASE_URL}?size=${dimension}x${dimension}&data=${urlEncodedText}&format=${imageFormat}`;
  const response = await fetch(url).then((res) => res.url);
  return response;
};
