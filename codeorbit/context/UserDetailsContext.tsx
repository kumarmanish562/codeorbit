
"use client";

import { createContext, useContext } from "react";

export type UserDetails = {
  id: number | string;
  name: string;
  email: string;
  points: number;
  subscription: string;
};

type UserDetailsContextType = {
  userDetails: UserDetails | null;
  setUserDetails: (user: UserDetails | null) => void;
};

export const UserDetailsContext =
  createContext<UserDetailsContextType | undefined>(undefined);

export function useUserDetails() {
  const context = useContext(UserDetailsContext);

  if (!context) {
    throw new Error(
      "useUserDetails must be used within UserDetailsContext.Provider"
    );
  }

  return context;
}
