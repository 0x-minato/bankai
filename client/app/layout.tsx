import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Providers from "@/components/providers";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const font = Figtree({
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>
        <Providers>
          <SidebarProvider>
            {children}
            <Toaster />
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
