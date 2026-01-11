'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💍</span>
              <h3 className="text-xl font-bold">Nikkah Connect</h3>
            </div>
            <p className="text-gray-400 text-sm">Where Islamic values meet modern love</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-cyan-400 transition">Find Matches</Link></li>
              <li><Link href="/livestream" className="hover:text-cyan-400 transition">Live Streams</Link></li>
              <li><Link href="/cam-matching" className="hover:text-cyan-400 transition">Cam Matching</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cyan-500/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Nikkah Connect. All rights reserved. Made with 💜 for the Muslim community.</p>
        </div>
      </div>
    </footer>
  )
}
