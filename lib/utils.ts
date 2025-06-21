import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to conditionally join class names together.
 * It also correctly merges conflicting Tailwind CSS classes.
 * @param {...ClassValue[]} inputs - The class names to join.
 * @returns {string} The merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
