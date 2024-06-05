import { Providers } from './providers.jsx';
import styles from "./page.module.css"

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={styles.bodystyle}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Dashboard Page',
}