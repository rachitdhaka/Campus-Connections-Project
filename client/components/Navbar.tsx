import React from "react";

export default function Navbar() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];
  return (
    <div className="fixed z-10 w-full bg-transparent  backdrop-blur-md flex justify-between items-center px-8 py-4">
      <div>
       
          <ul className="flex gap-4">
            {navlinks.map((link) => (
              <li key={link.name} className="flex  ">
                <a href={link.href} className="text-black hover:text-gray-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
    
      </div>

      <div className="flex gap-4">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}
