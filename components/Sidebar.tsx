"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  const [argentineTime, setArgentineTime] = useState<{
    date: string
    time: string
  }>({ date: "", time: "" })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Argentina/Buenos_Aires",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }

      const date = now.toLocaleDateString("en-US", options)
      const time = now.toLocaleTimeString("en-US", timeOptions)

      setArgentineTime({ date, time })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between p-4 border-b border-foreground/10 bg-background z-50">
        <h4 className="">Micaela Perillo</h4>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-56 p-8 border-r border-foreground/10 bg-background z-40">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-semibold">Micaela Perillo</h2> {/* Full name */}
          <h4 className="text-foreground/60">Software Engineer</h4>
        </div>

          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground/80"
                  }`}
                >
                  <h4>{item.name}</h4>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Social Media */}
        <div className="mt-auto flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-primary-foreground/80">
            <div className="flex items-center gap-1 text-sm font-light">
              <time className="tracking-wider">{argentineTime.date} {argentineTime.time}</time>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/micaelaperillo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/70 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/micaelaperillo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/70 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:micaelaperillo26@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/70 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col p-6">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="self-end mb-6"
          >
            <X className="w-7 h-7" />
          </button>

          <nav className="flex flex-col gap-6 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground/80"
                  }`}
                >
                  <h3>{item.name}</h3>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Socials */}
          <div className="mt-auto flex justify-center gap-6">
            <a
              href="https://github.com/micaelaperillo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/70 transition"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/micaelaperillo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/70 transition"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:micaelaperillo26@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/70 transition"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
