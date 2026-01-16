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

export default function Navbar() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <nav className="flex h-(--header-height) shrink-0 justify-end items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">


     <div className="absolute left-1 flex w-fit items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        
      </div>


      <div>
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
      <ModeToggle />
      
    </nav>
  );
}
