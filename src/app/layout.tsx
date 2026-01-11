import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikkah Connect - Islamic Dating & Marriage Platform',
  description: 'Find your perfect match through smart Islamic matrimonial connections, live streams, and authentic cam-to-cam meetings.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-950 to-gray-900">
        {children}
      </body>
    </html>
  )
}
