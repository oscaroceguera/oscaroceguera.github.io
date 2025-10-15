import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

export const locales = ['en', 'es'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];
