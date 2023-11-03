import CardRestaurante from '../CardRestautrante'

import { Restaurants } from '../../pages/Home'
import { ListaContainer, Lista } from './styles'

type Props = {
  restaurants: Restaurants[]
}

const ListaRestaurante = ({ restaurants }: Props) => {
  const getTags = (restaurant: Restaurants) => {
    const tags = []
    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }
    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }
    return tags
  }

  return (
    <ListaContainer className="container">
      <Lista>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <CardRestaurante
              id={restaurant.id}
              image={restaurant.capa}
              infoTag={getTags(restaurant)}
              title={restaurant.titulo}
              score={restaurant.avaliacao}
              description={restaurant.descricao}
            />
          </li>
        ))}
      </Lista>
    </ListaContainer>
  )
}

export default ListaRestaurante
