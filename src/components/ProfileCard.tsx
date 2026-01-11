'use client'

import { Heart, Eye } from 'lucide-react'

interface ProfileCardProps {
  name: string
  age: number
  location: string
  profession: string
  tags: string[]
  bgGradient: string
  emoji?: string
  isOnline?: boolean
  animationDelay?: string
}

export default function ProfileCard({
  name,
  age,
  location,
  profession,
  tags,
  bgGradient,
  emoji = '👩',
  isOnline = false,
  animationDelay = '',
}: ProfileCardProps) {
  const delayClass = animationDelay ? `stagger-${animationDelay}` : ''

  return (
    <div className={`glass rounded-xl overflow-hidden card-hover animate-slide-in-up ${delayClass}`}>
      <div className={`relative h-72 ${bgGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-6xl">{emoji}</div>
        <div className="absolute top-3 right-3 bg-cyan-500 px-3 py-1 rounded-full text-xs font-bold">
          {age} • {location}
        </div>
        {isOnline && (
          <div className="absolute top-3 left-3 bg-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Online
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-400 mb-4">{profession}</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 border border-cyan-500/50 text-cyan-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="flex-1 glass-light py-2 rounded text-sm font-semibold hover:glow-cyan transition flex items-center justify-center gap-2">
            <Eye size={16} />
            View Profile
          </button>
          <button className="flex-1 glass-light py-2 rounded text-sm font-semibold neon-pink hover:glow-pink transition">
            <Heart size={16} className="mx-auto" />
          </button>
        </div>
      </div>
    </div>
  )
}
