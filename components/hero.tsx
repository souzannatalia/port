import Link from "next/link"
import { ExternalLink } from "lucide-react"

const stats = [
  { number: "3+", label: "Anos em comunicação e produto digital" },
  { number: "15+", label: "Campanhas políticas acompanhadas" },
  { number: "UX", label: "Experiência em comportamento do usuário" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-dark flex items-center overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.03) 79px, rgba(255,255,255,0.03) 80px)",
        }}
      />

      {/* Monogram */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 font-heading font-black text-[340px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(201,168,76,0.1)] tracking-[-10px] pointer-events-none select-none whitespace-nowrap hidden lg:block">
        NN
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-14 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center relative z-10 py-20 lg:py-0">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-heading font-bold text-[10px] tracking-[4px] uppercase text-gold">
              Comunicação Digital
            </span>
          </div>

          {/* Name */}
          <h1 className="font-heading font-black text-[clamp(42px,6vw,72px)] text-white leading-[0.95] tracking-[-1px] uppercase mb-2">
            <span className="block font-light text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.6)]">
              Natália
            </span>
            <span className="block">Nascimento</span>
          </h1>

          {/* Role */}
          <p className="text-[11px] text-white/40 tracking-[3px] uppercase my-5 font-heading font-semibold">
            Estrategista de Campanhas Políticas
          </p>

          {/* Pitch */}
          <p className="text-sm text-white/65 leading-[1.85] max-w-[480px] mb-10">
            Transformo sua campanha em{" "}
            <strong className="text-white font-semibold">
              presença digital consistente
            </strong>
            . Estratégia de comunicação, produção de conteúdo e gestão de
            comunidade para candidatos que querem{" "}
            <strong className="text-white font-semibold">
              engajar de verdade
            </strong>
            .
          </p>

          {/* Buttons */}
          <div className="flex gap-3.5 flex-wrap">
            <Link
              href="#contato"
              className="bg-gold text-navy font-heading font-extrabold text-[10px] tracking-[1.5px] uppercase px-7 py-3.5 inline-flex items-center gap-2 hover:bg-gold-lt hover:-translate-y-0.5 transition-all"
            >
              Fale Comigo
            </Link>
            <Link
              href="#case"
              className="border border-white/20 text-white/70 font-heading font-bold text-[10px] tracking-[1.5px] uppercase px-7 py-3.5 inline-flex items-center gap-2 hover:border-gold hover:text-gold transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Ver Portfólio
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="flex lg:flex-col gap-0 border-l border-white/[0.07] pl-8 lg:pl-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`py-6 ${index !== stats.length - 1 ? "border-b border-white/[0.06]" : ""}`}
            >
              <div className="font-heading font-black text-[34px] text-gold leading-none mb-1.5">
                {stat.number}
              </div>
              <div className="text-[9px] text-white/35 tracking-[2px] uppercase font-heading max-w-[140px] leading-[1.5]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
