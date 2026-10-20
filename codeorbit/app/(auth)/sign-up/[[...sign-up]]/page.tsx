
"use client";

import * as React from "react";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-950 px-4 py-12 text-white">
      <div className="w-full max-w-md">
        {/* Branding */}
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-yellow-400 shadow-[4px_4px_0_0_#71717a]">
            <span className="font-game text-2xl font-bold text-black">
              C
            </span>
          </div>

          <h1 className="font-game text-2xl font-bold uppercase tracking-wide text-yellow-400 sm:text-3xl">
            Create Account
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            Start your coding adventure with CodeOrbit.
          </p>
        </header>

        {/* Clerk registration form */}
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          forceRedirectUrl="/"
          appearance={{
            elements: {
              rootBox: "w-full",
              cardBox: "w-full shadow-none",
              card: "w-full rounded-none border-2 border-black bg-zinc-900 text-white shadow-[6px_6px_0_0_#000]",

              headerTitle:
                "font-game text-lg font-bold uppercase text-yellow-400",
              headerSubtitle: "text-sm text-zinc-400",

              socialButtonsBlockButton:
                "rounded-none border-2 border-black bg-white font-game text-xs text-black shadow-[3px_3px_0_0_#000] hover:bg-yellow-100",

              dividerLine: "bg-zinc-700",
              dividerText: "text-xs text-zinc-400",

              formFieldLabel:
                "font-game text-xs uppercase text-yellow-400",
              formFieldInput:
                "rounded-none border-2 border-black bg-zinc-800 text-white shadow-[3px_3px_0_0_#000] focus:border-yellow-400 focus:ring-0",

              formButtonPrimary:
                "rounded-none border-2 border-black bg-yellow-400 font-game text-xs uppercase text-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-300 active:translate-y-1 active:shadow-none",

              footerActionText: "text-sm text-zinc-400",
              footerActionLink:
                "font-bold text-yellow-400 underline underline-offset-4 hover:text-yellow-300",

              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-yellow-400",

              otpCodeFieldInput:
                "rounded-none border-2 border-black bg-zinc-800 text-white",

              formFieldErrorText: "text-red-400",
              alertText: "text-red-400",
            },
          }}
        />

        <p className="mt-8 text-center font-game text-[10px] leading-6 text-zinc-500">
          EXPLORE. BUILD. EVOLVE.
        </p>
      </div>
    </main>
  );
}
