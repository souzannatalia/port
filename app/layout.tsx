import type { Metadata, Viewport } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Natália Nascimento — Comunicação Digital para Campanhas",
  description:
    "Especialista em comunicação digital para campanhas políticas. Estratégia, produção de conteúdo e gestão de comunidade para candidatos em Salvador e região.",
  keywords: [
    "comunicação digital",
    "campanhas políticas",
    "marketing político",
    "redes sociais",
    "Salvador",
    "Bahia",
  ],
  authors: [{ name: "Natália Nascimento" }],
  openGraph: {
    title: "Natália Nascimento — Comunicação Digital para Campanhas",
    description:
      "Especialista em comunicação digital para campanhas políticas. Estratégia, produção de conteúdo e gestão de comunidade.",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F1F35",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${openSans.variable} bg-background`}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}
