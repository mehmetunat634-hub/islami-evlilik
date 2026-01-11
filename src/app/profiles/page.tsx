'use client'

import { Sliders, Eye, Heart } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProfileCard from '@/components/ProfileCard'

const profiles = [
  {
    name: 'Layla Al-Rashid',
    age: 28,
    location: 'Cairo',
    profession: 'Medical Doctor • 4 Languages',
    tags: ['Reading', 'Travel', 'Sports'],
    bgGradient: 'bg-gradient-to-b from-cyan-500/20 to-transparent',
    isOnline: true,
  },
  {
    name: 'Aisha Al-Mansouri',
    age: 26,
    location: 'Dubai',
    profession: 'Architect • Interior Designer',
    tags: ['Design', 'Hiking', 'Art'],
    bgGradient: 'bg-gradient-to-b from-purple-500/20 to-transparent',
    isOnline: false,
  },
  {
    name: 'Fatima Al-Zahra',
    age: 25,
    location: 'Istanbul',
    profession: 'Teacher • Community Volunteer',
    tags: ['Cooking', 'Gardening', 'Education'],
    bgGradient: 'bg-gradient-to-b from-pink-500/20 to-transparent',
    isOnline: true,
  },
  {
    name: 'Noor Al-Amiri',
    age: 29,
    location: 'London',
    profession: 'Software Engineer • Tech Lead',
    tags: ['Technology', 'Reading', 'Music'],
    bgGradient: 'bg-gradient-to-b from-cyan-500/20 to-transparent',
    isOnline: false,
  },
  {
    name: 'Sara Al-Qadi',
    age: 27,
    location: 'Toronto',
    profession: 'Business Owner • Entrepreneur',
    tags: ['Business', 'Travel', 'Fashion'],
    bgGradient: 'bg-gradient-to-b from-purple-500/20 to-transparent',
    isOnline: true,
  },
  {
    name: 'Yasmin Al-Rashid',
    age: 24,
    location: 'Sydney',
    profession: 'Pharmacist • Health Conscious',
    tags: ['Health', 'Fitness', 'Volunteering'],
    bgGradient: 'bg-gradient-to-b from-pink-500/20 to-transparent',
    isOnline: true,
  },
]

export default function ProfilesPage() {
  return (
    <main className="text-white overflow-x-hidden">
      <Navigation />

      <div className="pt-20">
        {/* Header */}
        <section className="py-12 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Match</h1>
            <p className="text-gray-400 text-lg">Browse 10,000+ verified profiles</p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-4">
              <Sliders size={20} />
              <h3 className="text-lg font-bold">Filter by Preferences</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <div className="glass-light p-3 rounded-lg">
                <label className="text-sm block mb-2">Age Range</label>
                <input type="range" className="w-full" min="18" max="50" defaultValue="25" />
                <span className="text-xs text-cyan-400">18-50</span>
              </div>
              <div className="glass-light p-3 rounded-lg">
                <label className="text-sm block mb-2">Location</label>
                <select className="w-full bg-transparent border border-cyan-500/30 rounded px-2 py-1 text-sm">
                  <option>Any</option>
                  <option>Middle East</option>
                  <option>Europe</option>
                  <option>North America</option>
                  <option>Asia</option>
                </select>
              </div>
              <div className="glass-light p-3 rounded-lg">
                <label className="text-sm block mb-2">Education</label>
                <select className="w-full bg-transparent border border-cyan-500/30 rounded px-2 py-1 text-sm">
                  <option>Any</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>PhD</option>
                </select>
              </div>
              <div className="glass-light p-3 rounded-lg">
                <label className="text-sm block mb-2">Height</label>
                <select className="w-full bg-transparent border border-cyan-500/30 rounded px-2 py-1 text-sm">
                  <option>Any</option>
                  <option>5'0" - 5'6"</option>
                  <option>5'6" - 6'0"</option>
                  <option>6'0"+</option>
                </select>
              </div>
              <div className="glass-light p-3 rounded-lg">
                <label className="text-sm block mb-2">Islamic Background</label>
                <select className="w-full bg-transparent border border-cyan-500/30 rounded px-2 py-1 text-sm">
                  <option>Any</option>
                  <option>Born Muslim</option>
                  <option>Reverted Muslim</option>
                </select>
              </div>
              <button className="glass-light p-3 rounded-lg neon-cyan font-semibold hover:glow-cyan transition">
                Apply Filters
              </button>
            </div>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {profiles.map((profile, i) => (
                <ProfileCard
                  key={i}
                  {...profile}
                  animationDelay={String(i + 1)}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <button className="glass-light px-8 py-3 rounded-full font-semibold hover:glow-cyan transition">
                Load More Profiles
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
