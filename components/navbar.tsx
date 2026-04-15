"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#case", label: "Portfólio" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#entregas", label: "Entregas" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[999] bg-navy h-[60px] px-6 md:px-12 flex items-center justify-between border-b-2 border-gold">
      <span className="font-heading font-black text-sm text-white tracking-[2px] uppercase">
        Natália Nascimento
      </span>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-heading font-semibold text-[10px] text-white/60 tracking-[1px] uppercase hover:text-gold transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contato"
          className="bg-gold text-navy font-heading font-extrabold text-[10px] tracking-[1px] uppercase px-[18px] py-2 hover:bg-gold-lt transition-colors"
        >
          Contato
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-[22px] h-[2px] bg-white transition-transform ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
        />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-navy border-b-2 border-gold p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading font-semibold text-sm text-white/60 tracking-[1px] uppercase hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="bg-gold text-navy font-heading font-extrabold text-sm tracking-[1px] uppercase px-4 py-3 text-center hover:bg-gold-lt transition-colors"
          >
            Contato
          </Link>
        </div>
      )}
    </nav>
  )
}
