import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'

export interface CardapioItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}
export type Restaurants = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const [listHome, setListHome] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListHome(res))
  }, [])
  return (
    <>
      <Hero />
      <Listagem restaurants={listHome} />
    </>
  )
}

export default Home
