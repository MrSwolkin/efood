import CardRestaurante from '../CardRestautrante'

import * as S from './styles'

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
    <S.ListaContainer className="container">
      <S.Lista>
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
      </S.Lista>
    </S.ListaContainer>
  )
}

export default ListaRestaurante
