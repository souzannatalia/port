import {
  Calendar,
  Target,
  Instagram,
  Network,
  Video,
  Heart,
} from "lucide-react"

const calendarGrid = [
  ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"],
  [
    { text: "Stories Pessoal", type: "stories" },
    { text: "Carrossel Proposta", type: "carrossel" },
    { text: "WPP Comunidade", type: "wpp" },
    { text: "Reels Bastidor", type: "reels" },
    { text: "Feed Agenda", type: "feed" },
    { text: "Stories Engaj.", type: "stories" },
    { text: "—", type: "off" },
  ],
  [
    { text: "Carrossel Dado", type: "carrossel" },
    { text: "WPP Disparo", type: "wpp" },
    { text: "Feed Projeto", type: "feed" },
    { text: "Reels Equipe", type: "reels" },
    { text: "Stories CTA", type: "stories" },
    { text: "Carrossel Top", type: "carrossel" },
    { text: "—", type: "off" },
  ],
]

const calendarColors: Record<string, string> = {
  stories: "bg-[#EEF7FF] text-[#1A5FAD]",
  carrossel: "bg-[#FFF4E5] text-[#A05F00]",
  reels: "bg-[#F5E8FF] text-[#7B2FBE]",
  wpp: "bg-[#E8F8EF] text-[#1A7A40]",
  feed: "bg-[#FFF0F0] text-[#C0392B]",
  off: "bg-gray-lt text-gray-500",
}

const instaGridCells = [
  { label: "Citação", type: "ic-citacao" },
  { label: "Bastidor", type: "ic-bastidor" },
  { label: "Proposta", type: "ic-proposta" },
  { label: "Reels", type: "ic-reels" },
  { label: "Depoim.", type: "ic-depo" },
  { label: "Agenda", type: "ic-agenda" },
  { label: "Equipe", type: "ic-time" },
  { label: "Dado", type: "ic-dado" },
  { label: "CTA", type: "ic-cta" },
]

const instaColors: Record<string, string> = {
  "ic-citacao": "bg-navy-md text-gold",
  "ic-bastidor": "bg-[#2D5A3D] text-[#A8D4B0]",
  "ic-proposta": "bg-gold text-navy",
  "ic-reels": "bg-[#4A1A6B] text-[#D4A8FF]",
  "ic-depo": "bg-[#1A4A6B] text-[#A8D0FF]",
  "ic-agenda": "bg-[#1A1A1A] text-gold",
  "ic-time": "bg-[#3D1A1A] text-[#FFB0A8]",
  "ic-dado": "bg-[#0F3040] text-[#90E0FF]",
  "ic-cta": "bg-navy-dark text-gold",
}

const funnel = [
  {
    channel: "Instagram",
    desc: "Atração e consciência de marca",
    bg: "#EEF7FF",
    color: "#1A5FAD",
  },
  {
    channel: "WhatsApp",
    desc: "Base mobilizada e engajamento direto",
    bg: "#E8F5E9",
    color: "#1A7A40",
  },
  {
    channel: "Site",
    desc: "Conversão: voluntário, doação, voto",
    bg: "#EEF7FF",
    color: "#1A5FAD",
  },
  {
    channel: "Telegram",
    desc: "Núcleo ativo de multiplicadores",
    bg: "#F0E8FF",
    color: "#7B2FBE",
  },
]

const mobilization = [
  { label: "Seguidores", desc: "Audiência nas redes", count: "3.2k", bg: "#EEF7FF", color: "#1A3556" },
  { label: "Grupo WPP", desc: "Apoiadores ativos", count: "847", bg: "#E8F5E9", color: "#1A7A40" },
  { label: "Voluntários", desc: "Cadastrados no site", count: "124", bg: "#F0E8FF", color: "#7B2FBE" },
  { label: "Multiplicadores", desc: "Núcleo ativo", count: "38", bg: "#FFF4E5", color: "#A05F00" },
]

const formats = [
  { name: "Carrossel", bg: "#1A3556", color: "#C9A84C" },
  { name: "Reels", bg: "#4A1A6B", color: "#D4A8FF" },
  { name: "Stories", bg: "#1A4A6B", color: "#A8D0FF" },
  { name: "WPP", bg: "#1A7A40", color: "#A8D4B0" },
  { name: "Feed", bg: "#0A1525", color: "#C9A84C" },
  { name: "Vídeo", bg: "#3D1A1A", color: "#FFB0A8" },
]

export function Deliverables() {
  return (
    <section id="entregas" className="py-[72px] px-6 md:px-12 bg-gray-lt">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-heading font-extrabold text-[9px] text-gold tracking-[2px] uppercase mb-2 block">
          Como trabalho
        </span>
        <h2 className="font-heading font-black text-[28px] text-navy mb-1.5">
          Entregas & Processo
        </h2>
        <div className="w-8 h-[3px] bg-gold mb-4 rounded-sm" />
        <p className="text-sm text-gray-500 leading-[1.7] max-w-[560px] mb-8">
          Cada serviço tem uma entrega concreta. Veja como estruturo o trabalho
          na prática.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Calendário Editorial */}
          <div className="bg-white border border-gray-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-navy px-5 py-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-navy" />
              </div>
              <h3 className="font-heading font-extrabold text-[11px] text-white tracking-[0.5px] uppercase leading-tight">
                Calendário Editorial Semanal
              </h3>
            </div>
            <div className="grid grid-cols-7 text-[7px] font-heading font-bold">
              {calendarGrid[0].map((day, i) => (
                <div
                  key={i}
                  className="bg-navy text-white/50 p-1.5 text-center tracking-[0.5px] border-r border-white/5 last:border-r-0"
                >
                  {day}
                </div>
              ))}
              {calendarGrid.slice(1).map((row, rowIndex) =>
                (row as { text: string; type: string }[]).map((cell, i) => (
                  <div
                    key={`${rowIndex}-${i}`}
                    className={`p-1.5 text-center text-[7px] font-heading font-bold tracking-[0.3px] leading-tight border-r border-b border-gray-md last:border-r-0 ${calendarColors[cell.type]}`}
                  >
                    {cell.text}
                  </div>
                ))
              )}
            </div>
            <div className="px-5 py-3.5 border-t border-gray-md">
              <span className="font-heading font-bold text-[8px] text-gray-500 tracking-[1.5px] uppercase">
                Estratégia de conteúdo político
              </span>
            </div>
          </div>

          {/* Posicionamento */}
          <div className="bg-white border border-gray-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-navy px-5 py-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <Target className="w-3.5 h-3.5 text-navy" />
              </div>
              <h3 className="font-heading font-extrabold text-[11px] text-white tracking-[0.5px] uppercase leading-tight">
                Documento de Posicionamento
              </h3>
            </div>
            <div className="p-5">
              <div className="font-heading font-black text-[15px] text-navy border-b-2 border-gold pb-2.5 mb-3.5">
                Fátima Gomes - 45500
              </div>
              <div className="font-heading font-extrabold text-[7.5px] text-gold tracking-[2px] uppercase mb-1.5">
                Mensagens-chave
              </div>
              <div className="space-y-1 mb-3">
                {[
                  "Presença que transforma o bairro",
                  "Política feita com quem mora aqui",
                  "Voz das mulheres de Salvador",
                ].map((msg, i) => (
                  <div
                    key={i}
                    className="text-[11px] text-navy leading-[1.5] flex gap-1.5"
                  >
                    <span className="text-gold">→</span>
                    {msg}
                  </div>
                ))}
              </div>
              <div className="font-heading font-extrabold text-[7.5px] text-gold tracking-[2px] uppercase mb-1.5">
                Tom de voz
              </div>
              <div className="flex flex-wrap gap-1">
                {["Próxima", "Direta", "Empática", "Popular", "Confiante"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="font-heading font-bold text-[7.5px] bg-gray-md text-navy px-2 py-[3px] tracking-[0.5px] uppercase"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="px-5 py-3.5 border-t border-gray-md">
              <span className="font-heading font-bold text-[8px] text-gray-500 tracking-[1.5px] uppercase">
                Posicionamento e narrativa digital
              </span>
            </div>
          </div>

          {/* Planejamento de Feed */}
          <div className="bg-white border border-gray-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-navy px-5 py-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <Instagram className="w-3.5 h-3.5 text-navy" />
              </div>
              <h3 className="font-heading font-extrabold text-[11px] text-white tracking-[0.5px] uppercase leading-tight">
                Planejamento de Feed
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-[2px] bg-gray-300">
              {instaGridCells.map((cell, i) => (
                <div
                  key={i}
                  className={`aspect-square flex flex-col items-center justify-center gap-1 font-heading font-extrabold text-[7px] tracking-[0.5px] uppercase ${instaColors[cell.type]}`}
                >
                  {cell.label}
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 border-t border-gray-md">
              <span className="font-heading font-bold text-[8px] text-gray-500 tracking-[1.5px] uppercase">
                Planejamento e gestão de redes sociais
              </span>
            </div>
          </div>

          {/* Funil de Comunidade */}
          <div className="bg-white border border-gray-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-navy px-5 py-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <Network className="w-3.5 h-3.5 text-navy" />
              </div>
              <h3 className="font-heading font-extrabold text-[11px] text-white tracking-[0.5px] uppercase leading-tight">
                Funil de Comunidade
              </h3>
            </div>
            <div className="p-5 flex flex-col gap-0">
              {funnel.map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center gap-3 py-2.5 px-3.5">
                    <div
                      className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[13px]"
                      style={{ backgroundColor: step.bg, color: step.color }}
                    >
                      {i === 0 ? "📱" : i === 1 ? "📲" : i === 2 ? "🌐" : "✈️"}
                    </div>
                    <div className="flex-1">
                      <div className="font-heading font-extrabold text-[11px] text-navy">
                        {step.channel}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                  {i !== funnel.length - 1 && (
                    <div className="absolute left-[37px] bottom-[-8px] w-[1px] h-2 bg-gold/40" />
                  )}
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 border-t border-gray-md">
              <span className="font-heading font-bold text-[8px] text-gray-500 tracking-[1.5px] uppercase">
                Engajamento e gestão de comunidade
              </span>
            </div>
          </div>

          {/* Formatos Produzidos */}
          <div className="bg-white border border-gray-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-navy px-5 py-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <Video className="w-3.5 h-3.5 text-navy" />
              </div>
              <h3 className="font-heading font-extrabold text-[11px] text-white tracking-[0.5px] uppercase leading-tight">
                Formatos Produzidos
              </h3>
            </div>
            <div className="p-4 grid grid-cols-3 gap-2">
              {formats.map((fmt, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: fmt.bg, color: fmt.color }}
                  >
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-[8px] text-navy tracking-[0.5px] uppercase">
                    {fmt.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 border-t border-gray-md">
              <span className="font-heading font-bold text-[8px] text-gray-500 tracking-[1.5px] uppercase">
                Produção de conteúdo multiplataforma
              </span>
            </div>
          </div>

          {/* Mobilização de Base */}
          <div className="bg-white border border-gray-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-navy px-5 py-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-navy" />
              </div>
              <h3 className="font-heading font-extrabold text-[11px] text-white tracking-[0.5px] uppercase leading-tight">
                Mobilização de Base
              </h3>
            </div>
            <div className="p-4 flex flex-col gap-0">
              {mobilization.map((step, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-1 px-3 py-2 rounded"
                      style={{ backgroundColor: step.bg, color: step.color }}
                    >
                      <strong className="block font-heading font-extrabold text-[10px]">
                        {step.label}
                      </strong>
                      <span className="text-[9px] opacity-80">{step.desc}</span>
                    </div>
                    <span className="font-heading font-black text-lg text-navy w-12 text-right">
                      {step.count}
                    </span>
                  </div>
                  {i !== mobilization.length - 1 && (
                    <div className="text-center text-[10px] text-gold/60 py-1">
                      ↓ {i === 0 ? "conversão" : i === 1 ? "ativação" : "engajamento"}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 border-t border-gray-md">
              <span className="font-heading font-bold text-[8px] text-gray-500 tracking-[1.5px] uppercase">
                Mobilização e relacionamento com público
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
