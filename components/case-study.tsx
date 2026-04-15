import Link from "next/link"
import { AlertCircle, Map, CheckCheck, TrendingUp } from "lucide-react"

const caseBreakdown = [
  {
    icon: AlertCircle,
    label: "Desafio",
    text: "Perfil sem estrutura de comunicação digital",
  },
  {
    icon: Map,
    label: "Estratégia",
    text: "Organizar narrativa + criar canais de engajamento",
  },
  {
    icon: CheckCheck,
    label: "Decisões",
    items: ["Foco em WhatsApp como base", "Conteúdo direto e popular"],
  },
  {
    icon: TrendingUp,
    label: "Resultado esperado",
    items: ["Maior engajamento", "Maior base de apoiadores"],
    highlight: true,
  },
]

const features = [
  "Hero com foto",
  "Mobile-first",
  "WhatsApp flutuante",
  "Grupos WPP + TG",
  "SEO + Open Graph",
  "LGPD",
  "Voluntários",
  "Galeria",
  "Agenda",
  "Notícias",
  "Contador animado",
]

export function CaseStudy() {
  return (
    <section id="case" className="py-[72px] px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-heading font-extrabold text-[9px] text-gold tracking-[2px] uppercase mb-2 block">
          Portfólio
        </span>
        <h2 className="font-heading font-black text-[28px] text-navy mb-1.5">
          Case entregue - Eleições 2026
        </h2>
        <div className="w-8 h-[3px] bg-gold mb-8 rounded-sm" />

        <div className="bg-navy-md p-6 md:p-10 grid lg:grid-cols-2 gap-10 items-center border-t-4 border-gold">
          <div>
            <span className="font-heading font-extrabold text-[8px] text-gold tracking-[2px] uppercase mb-2.5 block">
              Site de Campanha Política - Salvador, BA
            </span>
            <h3 className="font-heading font-black text-[22px] text-white leading-[1.2] mb-3">
              Fátima Gomes 45500
              <br />
              Candidata a Vereadora
            </h3>
            <p className="text-[12.5px] text-white/60 leading-[1.75] mb-5">
              Site completo criado do zero com identidade visual própria, foto
              da candidata com fundo removido por IA e publicado ao vivo. 11
              seções funcionais, 100% responsivo, sem templates pagos.
            </p>

            {/* Case Breakdown */}
            <div className="flex flex-col md:flex-row gap-0 my-5 bg-white/[0.04] border border-gold/20 rounded overflow-hidden">
              {caseBreakdown.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 p-3.5 md:p-4 ${index !== caseBreakdown.length - 1 ? "border-b md:border-b-0 md:border-r border-gold/[0.12]" : ""} ${item.highlight ? "bg-gold/[0.07]" : ""}`}
                >
                  <item.icon className="w-3.5 h-3.5 text-gold mb-1.5" />
                  <div className="font-heading font-extrabold text-[8px] text-gold tracking-[1.5px] uppercase mb-1.5">
                    {item.label}
                  </div>
                  {item.text ? (
                    <p className="text-[11px] text-white/75 leading-[1.5]">
                      {item.text}
                    </p>
                  ) : (
                    <ul className="text-[11px] text-white/75 leading-[1.6] pl-3.5 list-disc">
                      {item.items?.map((listItem, listIndex) => (
                        <li key={listIndex} className="mb-0.5">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Live URL */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot" />
              <Link
                href="https://eleicao-nu.vercel.app/"
                target="_blank"
                className="font-heading font-bold text-[11px] text-gold tracking-[0.5px] hover:underline"
              >
                eleicao-nu.vercel.app
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {features.map((feat, index) => (
                <span
                  key={index}
                  className="font-heading font-bold text-[8.5px] bg-gold/15 text-gold px-2.5 py-1 border border-gold/25 tracking-[0.5px] uppercase"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Browser Mockup */}
          <div className="hidden lg:block bg-[#1a2840] rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/[0.08]">
            <div className="bg-[#252f42] px-3 py-2 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
              <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
              <div className="w-2 h-2 rounded-full bg-[#28C840]" />
              <div className="flex-1 bg-[#1a2840] rounded px-2.5 py-[3px] ml-1.5 text-[9px] text-white/40 font-mono">
                eleicao-nu.vercel.app
              </div>
            </div>
            <div className="h-[200px] bg-navy relative overflow-hidden">
              <div className="bg-[#051525] px-3.5 py-1.5 flex items-center justify-between">
                <span className="font-heading font-black text-[7px] text-white tracking-[1.5px]">
                  FÁTIMA GOMES
                </span>
                <span className="font-heading font-black text-[12px] text-gold">
                  45500
                </span>
              </div>
              <div className="p-3.5 flex items-center gap-2">
                <div className="flex-1">
                  <span className="bg-gold text-navy text-[5px] font-extrabold font-heading px-1.5 py-0.5 mb-1.5 inline-block tracking-[1px] uppercase">
                    Candidata a Vereadora
                  </span>
                  <div className="font-heading font-black text-[14px] text-white leading-none">
                    FÁTIMA
                  </div>
                  <div className="font-heading font-black text-[22px] text-gold leading-none tracking-[2px]">
                    45500
                  </div>
                  <div className="text-[5.5px] text-white/50 tracking-[1.5px] uppercase font-heading mt-1">
                    Salvador, BA
                  </div>
                  <span className="bg-gold text-navy font-heading font-extrabold text-[5.5px] px-2.5 py-1 mt-2 inline-block tracking-[1px] uppercase">
                    Conheça as propostas
                  </span>
                </div>
                <div className="w-[70px] h-[140px] bg-white/[0.07] rounded-t flex items-center justify-center self-end">
                  <span className="text-[8px] text-white/30">Foto</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
