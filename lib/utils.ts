import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createDownloadLink = async (
  imageUrl: string,
  imageFormat: string
): Promise<void> => {
  const format = imageFormat.toLowerCase();

  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `qr-code.${format}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
