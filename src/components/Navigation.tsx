'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="glass fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
            <Heart className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold gradient-text">Nikkah Connect</h1>
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/" className="hover:text-cyan-400 transition">Find Match</Link>
          <Link href="/livestream" className="hover:text-purple-400 transition">Live Streams</Link>
          <Link href="/cam-matching" className="hover:text-pink-400 transition">Cam Match</Link>
          <Link href="/#weddings" className="hover:text-cyan-400 transition">Weddings</Link>
          <button className="glass-light px-6 py-2 rounded-full text-sm font-semibold hover:glow-cyan transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}
