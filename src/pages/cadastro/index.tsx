import { Providers } from '@/providers'

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="content left">
          <img src={'/logo6.png'} width={500}/>
        </div>
        <div className="content right">
          <Providers>
          </Providers>
        </div>
      </div>
    </main>
  )
}
