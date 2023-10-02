import { Providers } from '@/providers'

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="content left">
          <img src={'/01-branco.svg'} width={200}/>
        </div>
        <div className="content right">
          <Providers>
          </Providers>
        </div>
      </div>
    </main>
  )
}
