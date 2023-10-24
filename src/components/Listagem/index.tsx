import CardRestaurante from '../CardRestautrante'

import Restaurants from '../../models/restaurntes'
import { ListaContainer, Lista } from './styles'

type Props = {
  restaurants: Restaurants[]
}

const ListaRestaurante = ({ restaurants }: Props) => (
  <ListaContainer className="container">
    <Lista>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <CardRestaurante
            image={restaurant.image}
            infosTag={restaurant.infosTAg}
            title={restaurant.title}
            score={restaurant.score}
            description={restaurant.description}
          />
        </li>
      ))}
    </Lista>
  </ListaContainer>
)

export default ListaRestaurante
