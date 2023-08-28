import './css/globals.css'

export const metadata = {
  title: 'Social Folder',
  description: 'Seu cartão de visita online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  )
}
