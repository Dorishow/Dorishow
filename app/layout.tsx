import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-[#FFFFFF] font-sans antialiased text-[#777777]",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            forcedTheme: "light",
          }}
        >
          <div className="flex justify-center content-center">
            <section className="flex flex-col items-center justify-center gap-4 sm:border-2 max-w-md p-8 mb-[64px] md:p-8 rounded-xl mt-[10px] sm:mt-[50px]">
              {children}
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
