import bannerProfile from '../../asset/images/italian-profil.png'
import { ContainerProfile, Titles } from './styles'

import { Restaurants } from '../../pages/Home'

type Props = {
  bannerRestaurants: Restaurants
}
const BannerProfile = ({ bannerRestaurants }: Props) => (
  <ContainerProfile
    style={{ backgroundImage: `url(${bannerRestaurants.capa})` }}
  >
    <Titles className="container">
      <span>{bannerRestaurants.tipo}</span>
      <h3>{bannerRestaurants.titulo}</h3>
    </Titles>
  </ContainerProfile>
)

export default BannerProfile
