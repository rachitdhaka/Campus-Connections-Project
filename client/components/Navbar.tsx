import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];
  return (
    <div className="fixed z-10 w-full border-b-2 border-border bg-transparent backdrop-blur-md flex justify-between items-center px-8 py-2">
      <div>
        <ul className="flex gap-4">
          {navlinks.map((link) => (
            <li key={link.name} className="flex">
              <a
                href={link.href}
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        <a
          href="/login"
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          Login
        </a>
        <a
          href="/signup"
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          Signup
        </a>
      </div>
    </div>
  );
}
