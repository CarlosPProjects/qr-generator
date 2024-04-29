"use server";

const BASE_URL = "https://api.qrserver.com/v1/create-qr-code/";

interface IgenerateCodeQr {
  urlEncodedText: string;
  dimension: number;
}

export const generateCodeQr = async({
  urlEncodedText,
  dimension,
}: IgenerateCodeQr): Promise<string> => {
  const url = `${BASE_URL}?size=${dimension}x${dimension}&data=${urlEncodedText}&format=png`;
  const response = await fetch(url).then((res) => res.url);
  return response;
};
