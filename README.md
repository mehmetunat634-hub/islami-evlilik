# Nikkah Connect - Islamic Dating & Marriage Platform

A modern Next.js React application for Islamic matrimonial connections featuring smart matching, live streams, and cam-to-cam video calls.

## 🚀 Features

- **Smart Profile Matching** - Browse 10,000+ verified profiles with advanced filtering
- **Live Streams** - Educational Islamic talks, Quran recitations, and success stories
- **Cam-to-Cam Matching** - Real-time HD video calls for authentic connections
- **Wedding Celebrations** - Share and celebrate marriage success stories
- **Verified & Safe** - ID verification and background checks for all users
- **Global Community** - Connect with Muslims worldwide
- **24/7 Support** - Expert guidance throughout your matrimonial journey

## 🛠 Technology Stack

- **Framework**: Next.js 14.1 (React 18.3)
- **Styling**: Tailwind CSS 3.4 with custom animations
- **Icons**: lucide-react 0.344
- **Language**: TypeScript 5.3
- **Build Tools**: PostCSS, Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm 9+

### Setup

1. **Install dependencies**
```bash
npm install
```

2. **Run development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

3. **Build for production**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with hero and all sections
│   ├── profiles/
│   │   └── page.tsx          # Profile browsing & matching dashboard
│   ├── livestream/
│   │   └── page.tsx          # Live streams & events
│   ├── cam-matching/
│   │   └── page.tsx          # Cam-to-cam video matching
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & animations
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Footer.tsx            # Footer component
│   └── ProfileCard.tsx       # Reusable profile card component
├── next.config.js
├── tailwind.config.js        # Tailwind configuration with custom theme
├── postcss.config.js
└── tsconfig.json
```

## 🎨 Design Features

### Cyberpunk Aesthetic
- Glass-morphism design with 40px backdrop blur
- Neon color palette (Cyan, Purple, Pink)
- Dark gradient backgrounds

### Responsive Design
- Mobile-first approach
- Tailwind responsive prefixes (md:, lg:, xl:)
- Smooth animations and transitions

### Icons (lucide-react)
All emoji icons replaced with professional lucide-react icons:
- Heart, Video Camera, Radio, Lock, Shield, etc.
- Consistent sizing and styling
- Accessible and performant

## 📄 Pages

### Home Page (`/`)
- Hero section with compelling CTA
- Profile discovery grid
- Live streaming section
- Cam-to-cam matching introduction
- Wedding celebrations gallery
- Feature highlights
- CTA section

### Profiles Page (`/profiles`)
- Advanced filtering system (age, location, education, height, Islamic background)
- Grid of profile cards
- Online/offline status indicators
- Quick action buttons
- Load more functionality

### Livestream Page (`/livestream`)
- Featured live stream with integrated chat
- Multiple ongoing streams
- Upcoming events calendar
- Host information and stream details

### Cam-Matching Page (`/cam-matching`)
- Active video call interface
- Available matches for calls
- Pending request management
- How it works section
- Safety & privacy features

## 🎯 Key Components

### Navigation Component
- Fixed header with logo and menu
- Links to all major sections
- Sign in button

### ProfileCard Component
- Reusable profile display
- Customizable gradients and information
- Action buttons (View Profile, Like)
- Online status indicator
- Animation delays for staggered effects

### Footer Component
- Links to product, company, and legal pages
- Copyright information
- Multiple column layout

## 🎨 Styling System

### Colors (Custom Tailwind Extend)
- `neon-cyan`: #00f0ff
- `neon-purple`: #9D00FF
- `neon-pink`: #ff006e

### Animations
- `slide-in-up`: Smooth entrance from bottom
- `slide-in-down`: Entrance from top
- `scale-in`: Zoom entrance
- `pulse-glow`: Breathing glow effect
- `float`: Vertical floating motion
- `blob`: Organic blob movements

### CSS Classes
- `.glass` - Glass morphism container
- `.glass-light` - Lighter glass effect
- `.gradient-text` - Gradient text effect
- `.card-hover` - Interactive card hover effect
- `.btn-glow` - Button glow effect

## 🚀 Development

### Hot Reload
The development server supports hot module replacement. Changes are instantly reflected.

### TypeScript
Full TypeScript support for type-safe development.

### ESLint
Run linting with:
```bash
npm run lint
```

## 📱 Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)

## 🔐 Security Features

- End-to-end encrypted video calls
- ID verification system
- Profile verification badges
- No recording allowed policy
- 24/7 moderation

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

This project is part of the Nikkah Connect Islamic matrimonial platform.

## 💡 Future Enhancements

- Backend API integration
- User authentication system
- Real-time messaging
- Payment processing
- Admin dashboard
- Mobile app versions
- Push notifications
- Advanced analytics

## 📧 Support

For questions or support, contact the Nikkah Connect team.

---

**Made with 💜 for the Muslim community**
