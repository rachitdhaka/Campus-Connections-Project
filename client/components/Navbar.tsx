import React from "react";
import { ModeToggle } from "./ModeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Sign } from "crypto";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function Navbar() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <nav className="absolute z-20 top-6 inset-x-0  mx-auto w-4xl  bg-transparent backdrop-blur-xs border rounded-xl flex justify-center items-center px-20 py-2">
      <div className="">
        <SignedIn>
          <UserButton showName />
        </SignedIn>

        {/* agar nahi hai tho  */}
        <SignedOut>
          <SignInButton>
            <a className="mr-4 cursor-pointer" href="/Login">
              Sign in
            </a>
          </SignInButton>
          <SignUpButton>
            <a className="mr-4 cursor-pointer" href="/Signup">
              Sign Up
            </a>
          </SignUpButton>
        </SignedOut>
      </div>

      <div className="flex justify-center items-center ml-10">
        <AnimatedThemeToggler />
      </div>
    </nav>
  );
}
