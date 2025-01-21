import Link from "next/link"
import { Music, Code, Disc, Mic, BookOpen, Github, Globe } from "lucide-react"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-start">
      <div className="flex-grow p-4 md:p-8 lg:p-12">
        <div className="max-w-5xl mx-auto w-full pt-8 md:pt-16 lg:pt-24">
          <header className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3">Zoe Jane</h1>
            <p className="text-lg md:text-xl text-pink-600 font-medium">Musician | Coder</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <Card title="Music" icon={<Music className="w-6 h-6 text-pink-500" />}>
              <Link
                href="https://music.163.com/#/artist?id=53946965"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <Disc className="w-4 h-4" />
                <span>网易云音乐</span>
              </Link>
              <Link
                href="https://y.qq.com/n/ryqq/singer/000sJpue1WR1Ae"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <Mic className="w-4 h-4" />
                <span>QQ音乐</span>
              </Link>
            </Card>

            <Card title="Programming" icon={<Code className="w-6 h-6 text-pink-500" />}>
              <Link
                href="https://github.com/zoejane"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://zmusic-pal.zoejane.net"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>zMusic-Pal | 音乐伙伴</span>
              </Link>
            </Card>

            <Card title="Writing" icon={<BookOpen className="w-6 h-6 text-pink-500" />}>
              <Link
                href="https://blog.zoejane.net"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Blog</span>
              </Link>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

function Card({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-pink-200 p-4 md:p-6">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-3 text-sm md:text-base">{children}</div>
    </div>
  )
}

