
"use client";

import { useUser } from "@clerk/nextjs";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import axios from "axios";

import {
  UserDetailsContext,
  type UserDetails,
} from "@/context/UserDetailsContext";

type ProviderProps = ComponentProps<typeof NextThemesProvider>;

export default function Provider({
  children,
  ...props
}: ProviderProps) {
  const { user, isLoaded } = useUser();

  const [userDetails, setUserDetails] =
    useState<UserDetails | null>(null);

  const createdUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      createdUserId.current = null;
      setUserDetails(null);
      return;
    }

    if (createdUserId.current === user.id) return;

    let cancelled = false;

    async function createUser() {
      try {
        const response = await axios.post("/api/user");

        if (cancelled) return;

        setUserDetails(response.data.user);
        createdUserId.current = user.id;
      } catch (error) {
        if (cancelled) return;

        if (axios.isAxiosError(error)) {
          console.error(
            "Failed to create user:",
            error.response?.data ?? error.message
          );
        } else {
          console.error("Failed to create user:", error);
        }
      }
    }

    void createUser();

    return () => {
      cancelled = true;
    };
  }, [user, isLoaded]);

  return (
    <NextThemesProvider {...props}>
      <UserDetailsContext.Provider
        value={{ userDetails, setUserDetails }}
      >
        {children}
      </UserDetailsContext.Provider>
    </NextThemesProvider>
  );
}
