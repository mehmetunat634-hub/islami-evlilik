'use client'

import { Video, Mic, Settings, PhoneOff, Lock, Shield, Camera, AlertCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CamMatchingPage() {
  return (
    <main className="text-white overflow-x-hidden">
      <Navigation />

      <div className="pt-20">
        {/* Header */}
        <section className="py-12 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Cam-to-Cam Matching</h1>
            <p className="text-gray-400 text-lg">Connect face-to-face with compatible matches in real-time video calls</p>
          </div>
        </section>

        {/* Call in Progress Example */}
        <section className="py-12 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Active Video Calls</h2>
            <div className="glass rounded-2xl overflow-hidden mb-8 animate-slide-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {/* Your Video */}
                <div className="relative rounded-lg overflow-hidden h-80">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <Video size={64} className="mx-auto mb-4 text-cyan-400" />
                      <div className="text-xl font-bold">You</div>
                      <div className="text-gray-400 text-sm mt-2">Your Camera Feed</div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    <Mic size={14} />
                    Muted
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/50 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    <Camera size={14} />
                    Camera On
                  </div>
                </div>

                {/* Match's Video */}
                <div className="relative rounded-lg overflow-hidden h-80">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">👩</div>
                      <div className="text-xl font-bold">Dina Al-Mansoor</div>
                      <div className="text-gray-400 text-sm mt-2">28 • Jeddah</div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 px-3 py-1 rounded-full text-xs font-semibold">Connected 00:12:34</div>
                </div>
              </div>

              {/* Call Controls */}
              <div className="border-t border-cyan-500/20 p-6 flex justify-center gap-4">
                <button className="glass-light px-6 py-3 rounded-full hover:glow-cyan transition flex items-center gap-2">
                  <Mic size={18} />
                  Unmute
                </button>
                <button className="glass-light px-6 py-3 rounded-full hover:glow-purple transition flex items-center gap-2">
                  <Video size={18} />
                  Camera Off
                </button>
                <button className="glass-light px-6 py-3 rounded-full hover:glow-cyan transition flex items-center gap-2">
                  <Settings size={18} />
                  Settings
                </button>
                <button className="glass-light px-6 py-3 rounded-full neon-pink hover:glow-pink transition flex items-center gap-2">
                  <PhoneOff size={18} />
                  End Call
                </button>
              </div>

              {/* Call Info */}
              <div className="border-t border-cyan-500/20 p-6 bg-black/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Connection Quality</p>
                    <p className="font-bold text-green-400">Excellent (HD)</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Network Latency</p>
                    <p className="font-bold text-green-400">12ms</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Match Compatibility</p>
                    <p className="font-bold text-cyan-400">87% Compatible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Matches for Cam Calls */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Available for Cam Calls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Available User 1 */}
              <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up">
                <div className="relative h-80 bg-gradient-to-b from-cyan-500/30 to-blue-600/20 flex items-end justify-center p-6">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Video size={48} className="mb-3 text-cyan-400" />
                    <div className="text-lg font-bold">Ready for Video</div>
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Online
                  </div>
                  <div className="relative z-10 w-full text-center">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>Available Now</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">Salma El-Sayed</h3>
                  <p className="text-sm text-gray-400 mb-2">26 • Cairo</p>
                  <p className="text-sm text-gray-400 mb-4">Dentist | Volunteering | Reading</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">✓ Verified</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300">🕐 5min</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">Match Score: 92%</p>
                    <button className="w-full glass-light py-2 rounded-lg font-semibold btn-glow neon-cyan flex items-center justify-center gap-2">
                      <Video size={16} />
                      Request Call
                    </button>
                  </div>
                </div>
              </div>

              {/* Available User 2 */}
              <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up">
                <div className="relative h-80 bg-gradient-to-b from-purple-500/30 to-pink-600/20 flex items-end justify-center p-6">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Video size={48} className="mb-3 text-purple-400" />
                    <div className="text-lg font-bold">Ready for Video</div>
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Online
                  </div>
                  <div className="relative z-10 w-full text-center">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>Available Now</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">Mariam Al-Qasimi</h3>
                  <p className="text-sm text-gray-400 mb-2">24 • Abu Dhabi</p>
                  <p className="text-sm text-gray-400 mb-4">Fashion Designer | Creative | Nature Lover</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">✓ Verified</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300">🕐 2min</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">Match Score: 88%</p>
                    <button className="w-full glass-light py-2 rounded-lg font-semibold btn-glow neon-cyan flex items-center justify-center gap-2">
                      <Video size={16} />
                      Request Call
                    </button>
                  </div>
                </div>
              </div>

              {/* Available User 3 */}
              <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up">
                <div className="relative h-80 bg-gradient-to-b from-pink-500/30 to-red-600/20 flex items-end justify-center p-6">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Video size={48} className="mb-3 text-pink-400" />
                    <div className="text-lg font-bold">Ready for Video</div>
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Online
                  </div>
                  <div className="relative z-10 w-full text-center">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>Available Now</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">Yasmin Al-Rashid</h3>
                  <p className="text-sm text-gray-400 mb-2">27 • Sydney</p>
                  <p className="text-sm text-gray-400 mb-4">Pharmacist | Health Conscious | Fitness</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">✓ Verified</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-pink-500/20 text-pink-300">🕐 8min</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">Match Score: 85%</p>
                    <button className="w-full glass-light py-2 rounded-lg font-semibold btn-glow neon-cyan flex items-center justify-center gap-2">
                      <Video size={16} />
                      Request Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How Cam-to-Cam Matching Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass rounded-xl p-6 text-center animate-slide-in-up">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
                <h4 className="font-bold mb-2">Browse Profiles</h4>
                <p className="text-sm text-gray-400">Find compatible matches based on Islamic values and interests</p>
              </div>

              <div className="glass rounded-xl p-6 text-center animate-slide-in-up">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
                <h4 className="font-bold mb-2">Request Video Call</h4>
                <p className="text-sm text-gray-400">Send a video call request to your potential match</p>
              </div>

              <div className="glass rounded-xl p-6 text-center animate-slide-in-up">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
                <h4 className="font-bold mb-2">Connect Face-to-Face</h4>
                <p className="text-sm text-gray-400">Have authentic conversations in HD video calls</p>
              </div>

              <div className="glass rounded-xl p-6 text-center animate-slide-in-up">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
                <h4 className="font-bold mb-2">Progress Naturally</h4>
                <p className="text-sm text-gray-400">Move towards real-world meetings and potential Nikkah</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Privacy */}
        <section className="py-12 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Safety & Privacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6 animate-slide-in-up">
                <Lock size={32} className="mb-3 text-cyan-400" />
                <h3 className="font-bold mb-3">Encrypted Calls</h3>
                <p className="text-gray-400 text-sm">All video calls are end-to-end encrypted for complete privacy and security</p>
              </div>

              <div className="glass rounded-xl p-6 animate-slide-in-up">
                <Shield size={32} className="mb-3 text-cyan-400" />
                <h3 className="font-bold mb-3">Verified Profiles</h3>
                <p className="text-gray-400 text-sm">All users are verified with ID confirmation to ensure authenticity</p>
              </div>

              <div className="glass rounded-xl p-6 animate-slide-in-up">
                <AlertCircle size={32} className="mb-3 text-cyan-400" />
                <h3 className="font-bold mb-3">No Recording Allowed</h3>
                <p className="text-gray-400 text-sm">Recording is strictly prohibited to protect user privacy</p>
              </div>

              <div className="glass rounded-xl p-6 animate-slide-in-up">
                <Camera size={32} className="mb-3 text-cyan-400" />
                <h3 className="font-bold mb-3">24/7 Moderation</h3>
                <p className="text-gray-400 text-sm">Our team monitors to ensure respectful, safe interactions at all times</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
