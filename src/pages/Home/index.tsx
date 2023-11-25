import { useGetRestaurantQuery } from '../../services/api'
import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'
import Loader from '../../components/Loader'

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
  return (
    <h3>
      <Loader />
    </h3>
  )
}

export default Home
