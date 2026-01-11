'use client'

import { Heart, Radio, VideoCamera, Gift, Lock, Zap, Globe, MessageCircle, ChevronRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProfileCard from '@/components/ProfileCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-white overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-down">
            <h2 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Find Your <span className="neon-cyan">Perfect</span> <span className="neon-purple">Match</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover Islamic matrimonial connections through intelligent matching, live streams, and authentic cam-to-cam meetings. Connect with like-minded individuals seeking meaningful relationships guided by Islamic values.
            </p>
            <div className="flex gap-4 mb-16">
              <Link href="/profiles">
                <button className="glass-light px-8 py-3 rounded-full font-semibold btn-glow neon-cyan">
                  Start Matching
                </button>
              </Link>
              <button className="glass px-8 py-3 rounded-full font-semibold border border-cyan-400 hover:bg-cyan-400/10 transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-bold neon-cyan">50K+</div>
                <div className="text-sm text-gray-400 mt-2">Active Members</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-bold neon-purple">2.5K+</div>
                <div className="text-sm text-gray-400 mt-2">Happy Couples</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-bold neon-pink">98%</div>
                <div className="text-sm text-gray-400 mt-2">Match Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Animation placeholder */}
          <div className="animate-slide-in-up hidden lg:flex items-center justify-center">
            <div className="glass rounded-2xl p-8 w-full text-center">
              <Heart size={120} className="mx-auto mb-4 text-cyan-400 animate-pulse" />
              <p className="text-gray-400">Beautiful Islamic matrimonial connections await</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Browsing Section */}
      <section id="profiles" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in-down">
            <h2 className="text-5xl font-bold mb-4">Discover Matches</h2>
            <p className="text-gray-400 text-lg">Smart algorithm matching based on Islamic values, interests, and lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfileCard
              name="Layla Al-Rashid"
              age={28}
              location="Cairo"
              profession="Medical Doctor • 4 Languages"
              tags={['Reading', 'Travel', 'Sports']}
              bgGradient="bg-gradient-to-b from-cyan-500/20 to-transparent"
              isOnline
              animationDelay="1"
            />
            <ProfileCard
              name="Aisha Al-Mansouri"
              age={26}
              location="Dubai"
              profession="Architect • Interior Designer"
              tags={['Design', 'Hiking', 'Art']}
              bgGradient="bg-gradient-to-b from-purple-500/20 to-transparent"
              animationDelay="2"
            />
            <ProfileCard
              name="Fatima Al-Zahra"
              age={25}
              location="Istanbul"
              profession="Teacher • Community Volunteer"
              tags={['Cooking', 'Gardening', 'Education']}
              bgGradient="bg-gradient-to-b from-pink-500/20 to-transparent"
              isOnline
              animationDelay="3"
            />
            <ProfileCard
              name="Noor Al-Amiri"
              age={29}
              location="London"
              profession="Software Engineer • Tech Lead"
              tags={['Technology', 'Reading', 'Music']}
              bgGradient="bg-gradient-to-b from-cyan-500/20 to-transparent"
              animationDelay="4"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/profiles">
              <button className="glass-light px-8 py-3 rounded-full font-semibold btn-glow neon-cyan">
                View All Profiles (10,000+)
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Streaming Section */}
      <section id="livestream" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in-down">
            <h2 className="text-5xl font-bold mb-4">Live Streams & Events</h2>
            <p className="text-gray-400 text-lg">Watch live Islamic talks, Quran recitations, and matchmaking events</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Main Live Stream */}
            <div className="lg:col-span-1 glass rounded-2xl overflow-hidden animate-slide-in-up stagger-1">
              <div className="relative h-96 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Radio size={64} className="mb-4 text-cyan-400" />
                  <div className="text-xl font-bold">Islamic Values Discussion</div>
                </div>
                <div className="livestream-badge">
                  <Radio size={16} />
                  LIVE - 2.4K Watching
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Understanding Nikkah in Modern Times</h3>
                <p className="text-gray-400 mb-4">Hosted by Dr. Mohamed Hassan • Started 5 mins ago</p>
                <div className="flex gap-3">
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-cyan transition">Watch Live</button>
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-purple transition">Share</button>
                </div>
              </div>
            </div>

            {/* Secondary Stream */}
            <div className="glass rounded-2xl overflow-hidden animate-slide-in-up stagger-2">
              <div className="relative h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Radio size={64} className="mb-4 text-purple-400" />
                  <div className="text-xl font-bold">Success Stories Q&A</div>
                </div>
                <div className="livestream-badge">
                  <Radio size={16} />
                  LIVE - 1.8K Watching
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Meet a Couple: From App to Nikah</h3>
                <p className="text-gray-400 mb-4">Hosted by Nikkah Connect Team • Started 15 mins ago</p>
                <div className="flex gap-3">
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-cyan transition">Watch Live</button>
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-purple transition">Share</button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="glass rounded-2xl p-8 animate-slide-in-up stagger-3">
            <h3 className="text-2xl font-bold mb-6">Upcoming Live Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-light p-4 rounded-lg border border-cyan-500/30">
                <div className="text-sm text-cyan-400 font-semibold mb-2">📅 Tomorrow, 7 PM GST</div>
                <h4 className="font-bold mb-2">Halal Dating Tips</h4>
                <p className="text-xs text-gray-400">Expert discussion on modern Islamic courtship</p>
              </div>
              <div className="glass-light p-4 rounded-lg border border-purple-500/30">
                <div className="text-sm text-purple-400 font-semibold mb-2">📅 Friday, 8 PM GST</div>
                <h4 className="font-bold mb-2">Quran & Love</h4>
                <p className="text-xs text-gray-400">Quranic perspectives on marriage and partnership</p>
              </div>
              <div className="glass-light p-4 rounded-lg border border-pink-500/30">
                <div className="text-sm text-pink-400 font-semibold mb-2">📅 Saturday, 6 PM GST</div>
                <h4 className="font-bold mb-2">Marriage Prep Workshop</h4>
                <p className="text-xs text-gray-400">Preparing for a successful Islamic marriage</p>
              </div>
              <div className="glass-light p-4 rounded-lg border border-cyan-500/30">
                <div className="text-sm text-cyan-400 font-semibold mb-2">📅 Sunday, 5 PM GST</div>
                <h4 className="font-bold mb-2">Family Matters Talk</h4>
                <p className="text-xs text-gray-400">Navigating family dynamics in relationships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cam-to-Cam Matching Section */}
      <section id="cam-match" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in-down">
            <h2 className="text-5xl font-bold mb-4">Cam-to-Cam Matching</h2>
            <p className="text-gray-400 text-lg">Connect face-to-face with potential matches in real-time video calls</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cam Match Card 1 */}
            <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up stagger-1">
              <div className="relative h-80 bg-gradient-to-b from-cyan-500/30 to-blue-600/20 flex items-end justify-center p-6 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10"></div>
                <div className="relative z-10 w-full text-center">
                  <VideoCamera size={48} className="mx-auto mb-3 text-cyan-400" />
                  <div className="text-sm text-gray-300 font-semibold">Ready for Video Call</div>
                </div>
                <div className="absolute top-3 right-3 bg-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Online
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Dina Al-Mansoor</h3>
                <p className="text-sm text-gray-400 mb-2">28 • Jeddah</p>
                <p className="text-sm text-gray-400 mb-4">Investment Banker | Fitness enthusiast | Loves traveling</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300">Verified</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">📸 Photo</span>
                </div>
                <button className="w-full glass-light py-2 rounded-lg font-semibold btn-glow neon-cyan">
                  Request Video Call
                </button>
              </div>
            </div>

            {/* Cam Match Card 2 */}
            <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up stagger-2">
              <div className="relative h-80 bg-gradient-to-b from-purple-500/30 to-pink-600/20 flex items-end justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-600/10"></div>
                <div className="relative z-10 w-full text-center">
                  <VideoCamera size={48} className="mx-auto mb-3 text-purple-400" />
                  <div className="text-sm text-gray-300 font-semibold">In Video Call</div>
                </div>
                <div className="absolute top-3 right-3 bg-red-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Busy
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Salma El-Sayed</h3>
                <p className="text-sm text-gray-400 mb-2">26 • Cairo</p>
                <p className="text-sm text-gray-400 mb-4">Dentist | Passion for volunteering | Bookworm</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300">Verified</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">📸 Photo</span>
                </div>
                <button className="w-full glass-light py-2 rounded-lg font-semibold text-gray-400 cursor-not-allowed opacity-50">
                  Call in Progress...
                </button>
              </div>
            </div>

            {/* Cam Match Card 3 */}
            <div className="glass rounded-xl overflow-hidden card-hover animate-slide-in-up stagger-3">
              <div className="relative h-80 bg-gradient-to-b from-pink-500/30 to-red-600/20 flex items-end justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-red-600/10"></div>
                <div className="relative z-10 w-full text-center">
                  <VideoCamera size={48} className="mx-auto mb-3 text-pink-400" />
                  <div className="text-sm text-gray-300 font-semibold">Available Soon</div>
                </div>
                <div className="absolute top-3 right-3 bg-gray-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Offline
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Mariam Al-Qasimi</h3>
                <p className="text-sm text-gray-400 mb-2">24 • Abu Dhabi</p>
                <p className="text-sm text-gray-400 mb-4">Fashion Designer | Creative mind | Nature lover</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-pink-500/20 text-pink-300">Verified</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">📸 Photo</span>
                </div>
                <button className="w-full glass-light py-2 rounded-lg font-semibold hover:glow-pink transition">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="glass rounded-2xl p-8 mt-12 animate-slide-in-up stagger-4">
            <h3 className="text-2xl font-bold mb-8">How Cam-to-Cam Matching Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h4 className="font-bold mb-2">Find Match</h4>
                <p className="text-sm text-gray-400">Browse verified profiles and find someone compatible</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h4 className="font-bold mb-2">Request Video</h4>
                <p className="text-sm text-gray-400">Send a video call request to your potential match</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h4 className="font-bold mb-2">Connect</h4>
                <p className="text-sm text-gray-400">Get to know each other through authentic face-to-face conversations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                <h4 className="font-bold mb-2">Progress</h4>
                <p className="text-sm text-gray-400">Move towards real-world meetings and potential Nikkah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Announcements Section */}
      <section id="weddings" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in-down">
            <h2 className="text-5xl font-bold mb-4">🎉 Wedding Celebrations</h2>
            <p className="text-gray-400 text-lg">Share your joy and celebrate love stories from our community</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Wedding Card 1 */}
            <div className="glass rounded-2xl overflow-hidden animate-slide-in-up stagger-1 card-hover">
              <div className="relative h-80 bg-gradient-to-br from-pink-400/20 to-red-600/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💑</div>
                    <div className="text-2xl font-bold">Ahmed & Zainab</div>
                    <div className="text-lg text-gray-300 mt-2">Married Today! 📅 Jan 11, 2026</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">From Matches to Forever</h3>
                <p className="text-gray-400 mb-4">"We met on Nikkah Connect just 6 months ago. The video calls helped us get to know each other authentically, and alhamdulillah, we're now married! Thank you for helping us find love guided by Islamic values."</p>
                <div className="flex gap-3">
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-pink transition">View Photos</button>
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-cyan transition">Read Story</button>
                </div>
              </div>
            </div>

            {/* Wedding Card 2 */}
            <div className="glass rounded-2xl overflow-hidden animate-slide-in-up stagger-2 card-hover">
              <div className="relative h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💒</div>
                    <div className="text-2xl font-bold">Hassan & Noor</div>
                    <div className="text-lg text-gray-300 mt-2">Getting Married Soon! 📅 Feb 20, 2026</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">A Match Made in Heaven</h3>
                <p className="text-gray-400 mb-4">"The app's smart matching brought us together. The live events taught us so much about Islamic marriage values. Now we're excited to start our journey together!"</p>
                <div className="flex gap-3">
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-cyan transition">View Details</button>
                  <button className="flex-1 glass-light py-2 rounded-lg font-semibold hover:glow-purple transition">Share Wishes</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass rounded-xl p-8 text-center animate-slide-in-up stagger-3">
              <div className="text-5xl font-bold neon-pink mb-3">2,547</div>
              <p className="text-gray-400">Couples Married</p>
            </div>
            <div className="glass rounded-xl p-8 text-center animate-slide-in-up stagger-4">
              <div className="text-5xl font-bold neon-cyan mb-3">15K+</div>
              <p className="text-gray-400">Successful Matches</p>
            </div>
            <div className="glass rounded-xl p-8 text-center animate-slide-in-up stagger-5">
              <div className="text-5xl font-bold neon-purple mb-3">98.5%</div>
              <p className="text-gray-400">Compatibility Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in-down">
            <h2 className="text-5xl font-bold mb-4">Why Choose Nikkah Connect?</h2>
            <p className="text-gray-400 text-lg">Everything you need for your Islamic matrimonial journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 animate-slide-in-up stagger-1 card-hover">
              <Lock size={32} className="mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-3">Verified & Safe</h3>
              <p className="text-gray-400">All profiles are verified. ID confirmation and background checks ensure safety.</p>
            </div>

            <div className="glass rounded-xl p-6 animate-slide-in-up stagger-2 card-hover">
              <Zap size={32} className="mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-3">Smart Matching</h3>
              <p className="text-gray-400">AI algorithm matches based on Islamic values, interests, lifestyle & compatibility.</p>
            </div>

            <div className="glass rounded-xl p-6 animate-slide-in-up stagger-3 card-hover">
              <VideoCamera size={32} className="mb-4 text-pink-400" />
              <h3 className="text-xl font-bold mb-3">HD Video Calls</h3>
              <p className="text-gray-400">Crystal clear cam-to-cam connections for authentic get-to-know conversations.</p>
            </div>

            <div className="glass rounded-xl p-6 animate-slide-in-up stagger-4 card-hover">
              <Radio size={32} className="mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-3">Live Events</h3>
              <p className="text-gray-400">Educational streams on Islamic marriage, Quran recitations & success stories.</p>
            </div>

            <div className="glass rounded-xl p-6 animate-slide-in-up stagger-5 card-hover">
              <Globe size={32} className="mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-3">Global Community</h3>
              <p className="text-gray-400">Connect with Muslims worldwide. Support for multiple languages & cultures.</p>
            </div>

            <div className="glass rounded-xl p-6 animate-slide-in-up stagger-1 card-hover">
              <MessageCircle size={32} className="mb-4 text-pink-400" />
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-400">Our team is always here to help guide you on your journey to marriage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass rounded-3xl p-12 animate-scale-in">
            <h2 className="text-5xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
            <p className="text-xl text-gray-400 mb-8">Join 50,000+ Muslims on their journey to meaningful relationships</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-light px-10 py-4 rounded-full font-bold btn-glow neon-cyan text-lg">
                Create Free Account
              </button>
              <button className="glass px-10 py-4 rounded-full font-bold border border-cyan-400 hover:bg-cyan-400/10 transition text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Dock Navigation */}
      <div className="floating-dock glass rounded-full px-6 py-3 flex gap-4 fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
        <button className="p-2 hover:text-cyan-400 transition" title="Home">🏠</button>
        <button className="p-2 hover:text-cyan-400 transition" title="Messages">💬</button>
        <button className="p-2 hover:text-cyan-400 transition" title="Matches">❤️</button>
        <button className="p-2 hover:text-cyan-400 transition" title="Notifications">🔔</button>
        <button className="p-2 hover:text-cyan-400 transition" title="Profile">👤</button>
      </div>
    </main>
  )
}
