
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

type ProviderProps = ComponentProps<typeof NextThemesProvider>;

export default function Provider({
  children,
  ...props
}: ProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
