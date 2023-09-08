import '@style/global.css'
import './globals.css'
import { Inter } from 'next/font/google'
layout
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BrainWave',
  description: 'Building your Career with Knowledge, Securing your Career with Blockchain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
