import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import { Navigation } from '@/components/Navigation'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hemanth Sreenadhuni',
  description: 'Portfolio/Blog of Hemanth Sreenadhuni',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className={`${sourceCodePro.className} hide-scroll`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
