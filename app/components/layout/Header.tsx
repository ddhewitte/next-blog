'use client'

import Link from "next/link"

type HeaderProps = {
  menu: string[],
  title: string
}

export default function Header({ menu, title }: HeaderProps ) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
    <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all hover:from-blue-700 hover:to-purple-700">
           {title}
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {
            menu.map((post, index) => (
                <Link key={index} href="#" className="text-blue-600 transition-colors">{post}</Link>
            ))
          }
        </nav>
      </div>
    </div>
    </header>
  )
}
