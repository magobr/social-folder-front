import { redirect } from 'next/navigation'

import "./page.css"
import { Providers } from '@/providers'

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="content">
          <h1>SocialFolder</h1>
          <span>Seu cartão de visita online</span>
        </div>
        <div className="content">
          <Providers>
          </Providers>
        </div>
      </div>
    </main>
  )
}
