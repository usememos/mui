import { clsx, type ClassValue } from "clsx";

export function cx(...values: ClassValue[]) {
  return clsx(values);
}
