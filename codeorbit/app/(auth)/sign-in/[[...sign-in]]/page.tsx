
"use client";

import * as React from "react";
import { SignIn } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full bg-[#f8f8f5] flex items-center justify-center px-4 py-10">
      <ClerkLoading>
        <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
      </ClerkLoading>

      <ClerkLoaded>
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border-2 border-black bg-yellow-400 shadow-[4px_4px_0_0_#000]">
              <span className="font-game text-2xl font-bold">C</span>
            </div>

            <h1 className="font-game text-3xl font-bold tracking-tight text-black">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm text-neutral-600">
              Continue your coding adventure.
            </p>
          </div>

          <SignIn
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            appearance={{
              elements: {
                rootBox: "w-full",
                cardBox: "w-full shadow-none",
                card: "w-full rounded-none border-2 border-black bg-white shadow-[6px_6px_0_0_#000]",
                headerTitle: "font-game text-xl text-black",
                headerSubtitle: "text-neutral-500",
                socialButtonsBlockButton:
                  "rounded-none border-2 border-black shadow-[3px_3px_0_0_#000] hover:bg-yellow-50",
                formFieldLabel: "font-game text-xs text-black",
                formFieldInput:
                  "rounded-none border-2 border-black shadow-[3px_3px_0_0_#000] focus:ring-0",
                formButtonPrimary:
                  "rounded-none border-2 border-black bg-yellow-400 font-game text-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-300",
                footerActionLink:
                  "font-semibold text-black underline underline-offset-4 hover:text-yellow-600",
                dividerLine: "bg-neutral-300",
                dividerText: "text-neutral-500",
              },
            }}
          />
        </div>
      </ClerkLoaded>
    </div>
  );
}
