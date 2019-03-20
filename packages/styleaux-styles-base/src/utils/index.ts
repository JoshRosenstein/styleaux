import { isNumber} from "typed-is";

export const rem = (input = 16, base = 16) =>
  //@ts-ignore
  /rem$/.test(input) ? input : `${parseFloat(input, 10) / base}rem`;

export const px = (num: number | string) =>
  isNumber(num) && num !== 0 ? `${num}px` : num;

