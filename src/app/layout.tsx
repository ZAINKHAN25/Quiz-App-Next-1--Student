// app/layout.tsx
import { Providers } from './providers.tsx'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head>
        <title>Quiz Web</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}