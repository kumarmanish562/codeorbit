"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

type ProviderProps = Readonly<ComponentProps<typeof NextThemesProvider>>;

function Provider({ children, ...props }: ProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}

export default Provider;