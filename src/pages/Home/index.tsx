import { useGetRestaurantQuery } from '../../services/api'
import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'

const Home = () => {
  const { data: listHome } = useGetRestaurantQuery()

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
