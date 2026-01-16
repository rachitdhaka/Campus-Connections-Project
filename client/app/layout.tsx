import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CampusConnection",
  description:
    "CampusConnection helps friends reconnect and stay in touch after graduation.",
  keywords: [
    "CampusConnection",
    "friends",
    "alumni",
    "reconnect",
    "graduation",
    "social network",
    "community",
  ],
  authors: [{ name: "CampusConnection Team" }],
  creator: "CampusConnection Team",
  openGraph: {
    title: "CampusConnection",
    description:
      "Reconnect with friends after graduation and grow your alumni network.",
    type: "website",
    locale: "en_US",
    siteName: "CampusConnection",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusConnection",
    description:
      "Reconnect with friends after graduation and grow your alumni network.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar/> */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
