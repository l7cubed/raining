import '@rainbow-me/rainbowkit/styles.css'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import App from './app'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Make it RainETH',
  description:
    'Lost Keys are the Naritive,but we are the Story'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={classNames(
          'w-full flex flex-col items-center bg-pt-bg-purple-darker text-pt-purple-50',
          inter.className
        )}
      >
        <App>{children}</App>
      </body>
    </html>
  )
}
