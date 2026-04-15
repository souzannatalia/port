const experiences = [
  {
    period: "mai 2025 – atual",
    role: "Product Designer (UX/UI)",
    company: "Konsí",
    description:
      "Desenvolvimento de soluções digitais com foco em comportamento do usuário e clareza de comunicação. Pesquisas, testes de fluxo, estruturação de experiências para conversão.",
    campaign:
      "Aplicação em campanhas: compreensão de público, estruturação de mensagem e otimização de comunicação.",
  },
  {
    period: "2024 – 2025",
    role: "Analista de Marketing e Conteúdo",
    company: "MyCond",
    description:
      "Planejamento e execução de conteúdo para redes sociais. Criação de campanhas digitais, captação e edição de vídeos, gestão de comunidade e calendário editorial.",
    campaign:
      "Aplicação em campanhas: produção de conteúdo multiplataforma, consistência e aumento de engajamento.",
  },
  {
    period: "2023 – 2024",
    role: "Gestão de Comunidade e Produção de Eventos",
    company: "EBAM — Escola Baiana de Arte e Moda",
    description:
      "Organização de eventos presenciais, gestão de comunidade, relacionamento com participantes e comunicação pré, durante e pós-evento.",
    campaign:
      "Aplicação em campanhas: mobilização de base, engajamento presencial e digital, construção de vínculo com o público.",
  },
  {
    period: "2021 – 2023",
    role: "Tech Recruiter",
    company: "Intera",
    description:
      "Comunicação com diferentes perfis, entrevistas comportamentais, construção de relacionamento e uso de dados para tomada de decisão.",
    campaign:
      "Aplicação em campanhas: leitura de público, comunicação persuasiva e construção de vínculo.",
  },
]

export function Timeline() {
  return (
    <section id="trajetoria" className="py-[72px] px-6 md:px-12 bg-gray-lt">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-heading font-extrabold text-[9px] text-gold tracking-[2px] uppercase mb-2 block">
          Experiência
        </span>
        <h2 className="font-heading font-black text-[28px] text-navy mb-1.5">
          Trajetória profissional
        </h2>
        <div className="w-8 h-[3px] bg-gold mb-8 rounded-sm" />

        <div className="relative pl-8">
          {/* Timeline Line */}
          <div className="absolute left-0 top-1.5 bottom-0 w-0.5 bg-gray-md" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-8">
              {/* Dot */}
              <div className="absolute left-[-36px] top-1.5 w-2.5 h-2.5 bg-gold rounded-full" />

              <span className="font-heading font-bold text-[9px] text-gold tracking-[1px] uppercase mb-1 block">
                {exp.period}
              </span>
              <h3 className="font-heading font-extrabold text-sm text-navy mb-0.5">
                {exp.role}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{exp.company}</p>
              <p className="text-[12.5px] text-gray-600 leading-[1.7] mb-2">
                {exp.description}
              </p>
              <p className="text-[11.5px] text-navy bg-gray-md px-3 py-1.5 border-l-[3px] border-gold italic">
                {exp.campaign}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
