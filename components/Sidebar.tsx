"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Sidebar() {

  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <aside className="h-screen flex flex-col w-56 p-8 relative">
      {/* Top: Name + Nav */}
      <div className="flex flex-col gap-6">
        <div>
            <h2>Micaela Perillo</h2>
            <h4 className="text-gray-500">Software Engineer</h4>
        </div>
         <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <h4>{item.name}</h4>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Social Media */}
      <div className="mt-auto flex gap-4">
        <a href="https://github.com/micaelaperillo" target="_blank" rel="noreferrer">
          <Github className="w-5 h-5 hover:text-gray-500 transition" />
        </a>
        <a href="https://linkedin.com/in/micaelaperillo" target="_blank" rel="noreferrer">
          <Linkedin className="w-5 h-5 hover:text-gray-500 transition" />
        </a>
        <a href="mailto:micaelaperillo26@gmail.com" target="_blank" rel="noreferrer">
          <Mail className="w-5 h-5 hover:text-gray-500 transition" />
        </a>
      </div>

      {/* Thin line separator */}
      <div className="absolute top-10 bottom-10 right-0 w-[1px] bg-gray-200 dark:bg-gray-800"></div>
    </aside>
  );
}
