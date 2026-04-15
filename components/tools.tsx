import {
  Figma,
  Palette,
  Layers,
  StickyNote,
  GitBranch,
  FlaskConical,
  ListTodo,
  MessageSquare,
  Phone,
  Send,
  Triangle,
  Bot,
} from "lucide-react"

const tools = [
  { icon: Figma, name: "Figma" },
  { icon: Palette, name: "Canva" },
  { icon: Layers, name: "Adobe Photoshop" },
  { icon: Layers, name: "WordPress" },
  { icon: Layers, name: "Elementor" },
  { icon: StickyNote, name: "Notion" },
  { icon: GitBranch, name: "Miro / FigJam" },
  { icon: FlaskConical, name: "Maze" },
  { icon: ListTodo, name: "ClickUp" },
  { icon: MessageSquare, name: "Slack" },
  { icon: Phone, name: "WhatsApp Business" },
  { icon: Send, name: "Telegram" },
  { icon: Triangle, name: "Vercel" },
  { icon: Bot, name: "Claude AI" },
]

export function Tools() {
  return (
    <section className="py-[72px] px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-heading font-extrabold text-[9px] text-gold tracking-[2px] uppercase mb-2 block">
          Stack
        </span>
        <h2 className="font-heading font-black text-[28px] text-navy mb-1.5">
          Ferramentas
        </h2>
        <div className="w-8 h-[3px] bg-gold mb-8 rounded-sm" />

        <div className="flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white px-4 py-2.5 border border-gray-md font-heading font-bold text-[10px] text-navy tracking-[0.5px] uppercase hover:border-gold hover:bg-gray-lt transition-colors"
            >
              <tool.icon className="w-3.5 h-3.5 text-gold" />
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
