import { Providers } from './providers.jsx'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Dashboard Page',
}