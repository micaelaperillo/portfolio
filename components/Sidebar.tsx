"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-screen flex flex-col w-56 p-4 relative">
      {/* Top: Name + Nav */}
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold">Micaela Perillo</h1>

        <nav className="flex flex-col gap-4">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-500 transition">
            Projects
          </Link>
        </nav>
      </div>

      {/* Bottom: Social Media */}
      <div className="mt-auto flex gap-4">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <Github className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Twitter className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
      </div>

      {/* Floating thin line separator */}
      <div className="absolute top-4 bottom-4 right-0 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
    </aside>
  );
}
