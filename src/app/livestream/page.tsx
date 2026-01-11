'use client'

import { Radio, Send, Heart, Share2, Bookmark } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LivestreamPage() {
  return (
    <main className="text-white overflow-x-hidden">
      <Navigation />

      <div className="pt-20">
        {/* Header */}
        <section className="py-12 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Live Streams & Events</h1>
            <p className="text-gray-400 text-lg">Educational content, success stories, and Islamic talks</p>
          </div>
        </section>

        {/* Main Featured Stream */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-2xl overflow-hidden mb-12 animate-slide-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Main Video Player */}
                <div className="lg:col-span-2 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 aspect-video flex flex-col items-center justify-center relative">
                  <Radio size={80} className="mb-4 text-cyan-400 animate-pulse" />
                  <div className="text-2xl font-bold mb-2">Live Stream Player</div>
                  <div className="text-gray-400">Understanding Nikkah in Modern Times</div>

                  {/* Live Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                    <span className="font-bold">LIVE</span>
                  </div>

                  {/* Viewer Count */}
                  <div className="absolute top-4 right-4 glass-light px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="font-semibold">2,847 watching</span>
                  </div>
                </div>

                {/* Chat Sidebar */}
                <div className="bg-black/30 flex flex-col max-h-96 lg:max-h-full">
                  {/* Chat Header */}
                  <div className="border-b border-cyan-500/20 p-4">
                    <h3 className="font-bold">Live Chat</h3>
                    <p className="text-xs text-gray-400">2,500+ messages</p>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    <div className="animate-slide-in-up">
                      <p className="text-sm"><span className="text-cyan-400 font-semibold">@Leila:</span> Alhamdulillah for this guidance!</p>
                    </div>
                    <div className="animate-slide-in-up">
                      <p className="text-sm"><span className="text-purple-400 font-semibold">@Hassan:</span> Very informative stream 📚</p>
                    </div>
                    <div className="animate-slide-in-up">
                      <p className="text-sm"><span className="text-pink-400 font-semibold">@Aisha:</span> Love this topic! ❤️</p>
                    </div>
                    <div className="animate-slide-in-up">
                      <p className="text-sm"><span className="text-cyan-400 font-semibold">@Omar:</span> Great discussion!</p>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-cyan-500/20 p-3">
                    <div className="flex gap-2">
                      <input type="text" placeholder="Say something..." className="flex-1 bg-black/40 border border-cyan-500/30 rounded px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400" />
                      <button className="glass-light p-2 rounded hover:glow-cyan transition">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stream Info */}
              <div className="border-t border-cyan-500/20 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Understanding Nikkah in Modern Times</h3>
                    <p className="text-gray-400 mb-3">Join Dr. Mohamed Hassan as he discusses Islamic marriage values in the modern world, building strong relationships, and navigating contemporary challenges with faith as your guide.</p>
                  </div>
                  <div className="glass-light p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Host Info</h4>
                    <p className="text-sm mb-2"><span className="text-gray-400">Hosted by:</span> Dr. Mohamed Hassan</p>
                    <p className="text-sm mb-2"><span className="text-gray-400">Experience:</span> 15+ years</p>
                    <p className="text-sm"><span className="text-gray-400">Followers:</span> 150K+</p>
                  </div>
                  <div className="glass-light p-4 rounded-lg">
                    <h4 className="font-bold mb-3">Stream Details</h4>
                    <p className="text-sm mb-2"><span className="text-gray-400">Duration:</span> 1h 25m</p>
                    <p className="text-sm mb-2"><span className="text-gray-400">Started:</span> 25 mins ago</p>
                    <p className="text-sm"><span className="text-gray-400">Category:</span> Educational</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-cyan transition flex items-center justify-center gap-2">
                    <Heart size={18} />
                    Like Stream
                  </button>
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-purple transition flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-pink transition flex items-center justify-center gap-2">
                    <Bookmark size={18} />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Streams */}
        <section className="py-12 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Other Ongoing Streams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stream 1 */}
              <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up">
                <div className="relative h-56 bg-gradient-to-b from-purple-500/20 to-pink-600/20 flex items-center justify-center">
                  <Radio size={48} className="text-purple-400" />
                  <div className="absolute top-3 right-3 bg-red-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    LIVE
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Success Stories Q&A</h3>
                  <p className="text-sm text-gray-400 mb-3">Meet a couple who met on Nikkah Connect and share their journey</p>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>1,823 watching</span>
                  </div>
                  <button className="w-full glass-light py-2 rounded text-sm font-semibold hover:glow-purple transition">Join Stream</button>
                </div>
              </div>

              {/* Stream 2 */}
              <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up">
                <div className="relative h-56 bg-gradient-to-b from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <Radio size={48} className="text-cyan-400" />
                  <div className="absolute top-3 right-3 bg-red-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    LIVE
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Quranic Verses on Love</h3>
                  <p className="text-sm text-gray-400 mb-3">Exploring Quranic perspectives on love, marriage, and relationships</p>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>945 watching</span>
                  </div>
                  <button className="w-full glass-light py-2 rounded text-sm font-semibold hover:glow-cyan transition">Join Stream</button>
                </div>
              </div>

              {/* Stream 3 */}
              <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up">
                <div className="relative h-56 bg-gradient-to-b from-pink-500/20 to-red-600/20 flex items-center justify-center">
                  <Radio size={48} className="text-pink-400" />
                  <div className="absolute top-3 right-3 bg-red-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    LIVE
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Marriage Prep Workshop</h3>
                  <p className="text-sm text-gray-400 mb-3">Get ready for marriage with expert tips and Islamic guidance</p>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>2,156 watching</span>
                  </div>
                  <button className="w-full glass-light py-2 rounded text-sm font-semibold hover:glow-pink transition">Join Stream</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-light p-4 rounded-lg border border-cyan-500/30 animate-slide-in-up">
                <div className="text-sm text-cyan-400 font-semibold mb-2">📅 Tomorrow, 7 PM GST</div>
                <h4 className="font-bold mb-1">Halal Dating Tips</h4>
                <p className="text-xs text-gray-400 mb-3">Expert discussion on modern Islamic courtship</p>
                <button className="w-full text-xs glass-light py-1 rounded hover:glow-cyan transition">Notify Me</button>
              </div>

              <div className="glass-light p-4 rounded-lg border border-purple-500/30 animate-slide-in-up">
                <div className="text-sm text-purple-400 font-semibold mb-2">📅 Friday, 8 PM GST</div>
                <h4 className="font-bold mb-1">Quran & Love</h4>
                <p className="text-xs text-gray-400 mb-3">Quranic perspectives on marriage and partnership</p>
                <button className="w-full text-xs glass-light py-1 rounded hover:glow-purple transition">Notify Me</button>
              </div>

              <div className="glass-light p-4 rounded-lg border border-pink-500/30 animate-slide-in-up">
                <div className="text-sm text-pink-400 font-semibold mb-2">📅 Saturday, 6 PM GST</div>
                <h4 className="font-bold mb-1">Family Matters Talk</h4>
                <p className="text-xs text-gray-400 mb-3">Navigating family dynamics in relationships</p>
                <button className="w-full text-xs glass-light py-1 rounded hover:glow-pink transition">Notify Me</button>
              </div>

              <div className="glass-light p-4 rounded-lg border border-cyan-500/30 animate-slide-in-up">
                <div className="text-sm text-cyan-400 font-semibold mb-2">📅 Sunday, 5 PM GST</div>
                <h4 className="font-bold mb-1">Community Gathering</h4>
                <p className="text-xs text-gray-400 mb-3">Connect with other Nikkah Connect members</p>
                <button className="w-full text-xs glass-light py-1 rounded hover:glow-cyan transition">Notify Me</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
