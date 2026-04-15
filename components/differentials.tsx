const competencies = [
  {
    title: "Comunicação e Estratégia",
    chips: [
      "Storytelling político",
      "Posicionamento digital",
      "Narrativa de campanha",
      "Planejamento de pautas",
    ],
  },
  {
    title: "Web e Design",
    chips: [
      "Sites e landing pages",
      "UX/UI",
      "Figma",
      "WordPress",
      "Páginas de conversão",
    ],
  },
  {
    title: "Conteúdo e Engajamento",
    chips: [
      "Gestão de redes sociais",
      "Calendário editorial",
      "Produção audiovisual",
      "Gestão de comunidade",
    ],
  },
  {
    title: "Inteligência",
    chips: [
      "Pesquisa de público",
      "Análise comportamental",
      "Validação de mensagem",
      "Ajuste estratégico",
    ],
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-[72px] px-6 md:px-12 bg-navy">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <span className="font-heading font-extrabold text-[9px] text-gold tracking-[2px] uppercase mb-2 block">
              Por que eu
            </span>
            <h2 className="font-heading font-black text-[28px] text-white mb-1.5">
              Estratégia orientada por comportamento
            </h2>
            <div className="w-8 h-[3px] bg-gold mb-8 rounded-sm" />

            <blockquote className="font-heading font-bold text-[17px] text-white leading-[1.55] mb-6 border-l-4 border-gold pl-5">
              &ldquo;Transformo comunicação digital em engajamento qualificado e
              mobilização efetiva.&rdquo;
            </blockquote>

            <p className="text-[13px] text-white/60 leading-[1.8]">
              Diferente de comunicadores que só produzem conteúdo, minha atuação
              integra{" "}
              <strong className="text-white">
                experiência em produto digital (UX/UI)
              </strong>
              , estratégia de conteúdo e gestão de comunidade. Entendo como o
              eleitor pensa, o que o faz parar no feed e o que o convence a
              compartilhar.
            </p>
          </div>

          <div className="space-y-6">
            {competencies.map((group, index) => (
              <div key={index}>
                <h3 className="font-heading font-extrabold text-[9px] text-gold tracking-[2px] uppercase mb-3">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.chips.map((chip, chipIndex) => (
                    <span
                      key={chipIndex}
                      className="font-heading font-bold text-[9px] bg-white/[0.08] text-white/85 px-3 py-1.5 tracking-[0.5px] uppercase border border-white/[0.12] hover:bg-gold hover:text-navy hover:border-gold transition-colors cursor-default"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
