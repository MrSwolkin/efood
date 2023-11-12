import { useGetRestaurantQuery } from '../../services/api'
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
  const { data: listHome, isLoading } = useGetRestaurantQuery()

  if (listHome) {
    return (
      <>
        <Hero />
        <Listagem restaurants={listHome} />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
