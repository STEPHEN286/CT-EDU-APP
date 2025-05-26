import { cn } from "@/lib/utils";

export const containerClass = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
export const inputClass = (errorField) => cn("input-base-class", errorField && "border-red-500");
