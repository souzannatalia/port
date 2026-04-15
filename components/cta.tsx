import Link from "next/link"
import { Phone, Mail, Linkedin, ExternalLink } from "lucide-react"

const contacts = [
  {
    href: "https://wa.me/5571933008088",
    icon: Phone,
    label: "(71) 93300-8088",
    external: true,
  },
  {
    href: "mailto:souzannatalia@gmail.com",
    icon: Mail,
    label: "souzannatalia@gmail.com",
    external: false,
  },
  {
    href: "https://linkedin.com/in/souzannatalia",
    icon: Linkedin,
    label: "linkedin.com/in/souzannatalia",
    external: true,
  },
]

export function CTA() {
  return (
    <section
      id="contato"
      className="bg-navy py-20 px-6 md:px-12 text-center relative overflow-hidden"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      {/* Background Number */}
      <div className="absolute right-[-20px] bottom-[-40px] font-heading font-black text-[200px] text-gold/[0.04] leading-none pointer-events-none select-none hidden lg:block">
        45500
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <h2 className="font-heading font-black text-[clamp(24px,4vw,40px)] text-white leading-[1.2] mb-4 text-balance">
          Vamos trabalhar juntos
          <br />
          <span className="text-gold">na sua campanha?</span>
        </h2>

        <p className="text-sm text-white/55 max-w-[500px] mx-auto mb-10 leading-[1.7]">
          Atendo candidatos a vereador, deputado e prefeito em Salvador e
          região. Disponível para projetos pontuais ou acompanhamento de
          campanha completo.
        </p>

        {/* Contact Items */}
        <div className="flex justify-center gap-6 flex-wrap mb-9">
          {contacts.map((contact, index) => (
            <Link
              key={index}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2.5 text-[13px] text-white/70 hover:text-gold transition-colors"
            >
              <contact.icon className="w-4 h-4 text-gold" />
              {contact.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="https://wa.me/5571933008088"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-heading font-extrabold text-[10px] tracking-[1.5px] uppercase px-7 py-3.5 inline-flex items-center gap-2 hover:bg-gold-lt hover:-translate-y-0.5 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            Falar pelo WhatsApp
          </Link>
          <Link
            href="https://eleicao-nu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white/70 font-heading font-bold text-[10px] tracking-[1.5px] uppercase px-7 py-3.5 inline-flex items-center gap-2 hover:border-gold hover:text-gold transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Ver Site Demonstrativo
          </Link>
        </div>
      </div>
    </section>
  )
}
