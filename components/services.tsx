import { Target, PenTool, Users } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Estratégia",
    description:
      "Defino posicionamento, tom de voz e narrativa da campanha. Construo o documento estratégico que guia toda a comunicação.",
    tags: ["Posicionamento", "Tom de voz", "Narrativa", "Planejamento"],
  },
  {
    icon: PenTool,
    title: "Conteúdo",
    description:
      "Produzo conteúdo multiplataforma: carrosséis, reels, stories, vídeos curtos. Calendário editorial semanal alinhado à estratégia.",
    tags: ["Instagram", "Reels", "Carrosséis", "Calendário"],
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Estruturo e gerencio grupos de WhatsApp e Telegram. Mobilizo voluntários e transformo seguidores em apoiadores ativos.",
    tags: ["WhatsApp", "Telegram", "Voluntários", "Mobilização"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-[72px] px-6 md:px-12 bg-gray-lt">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-heading font-extrabold text-[9px] text-gold tracking-[2px] uppercase mb-2 block">
          O que faço
        </span>
        <h2 className="font-heading font-black text-[28px] text-navy mb-1.5">
          Serviços
        </h2>
        <div className="w-8 h-[3px] bg-gold mb-8 rounded-sm" />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-7 border-t-[3px] border-gold shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all"
            >
              <div className="w-11 h-11 bg-navy flex items-center justify-center mb-4">
                <service.icon className="w-[18px] h-[18px] text-gold" />
              </div>
              <h3 className="font-heading font-extrabold text-[13px] text-navy uppercase tracking-[0.5px] mb-2.5">
                {service.title}
              </h3>
              <p className="text-[12.5px] text-gray-500 leading-[1.75]">
                {service.description}
              </p>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="font-heading font-bold text-[8.5px] bg-gray-md text-navy px-2 py-[3px] tracking-[0.5px] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
