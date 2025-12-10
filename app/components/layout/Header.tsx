'use client'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
    <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all hover:from-blue-700 hover:to-purple-700">
           Next Super Blog
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          <button className="text-blue-600 transition-colors">All Posts</button>
          <button className="text-slate-600 transition-colors hover:text-blue-600">
            Technology
          </button>
          <button className="text-slate-600 transition-colors hover:text-blue-600">
            Design
          </button>
          <button className="text-slate-600 transition-colors hover:text-blue-600">
            Lifestyle
          </button>
          <button className="text-slate-600 transition-colors hover:text-blue-600">
            Travel
          </button>
        </nav>
      </div>
    </div>
    </header>
  )
}
