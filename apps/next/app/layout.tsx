import { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

export const dynamic = 'force-dynamic'

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    template: 'Test | %s',
    default: 'Test',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="h-full bg-white">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${urbanist.className} h-full`}>{children}</body>
    </html>
  )
}
