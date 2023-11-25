import * as S from './styles'

type Props = {
  bannerRestaurants: Restaurants
}
const BannerProfile = ({ bannerRestaurants }: Props) => (
  <S.ContainerProfile
    style={{ backgroundImage: `url(${bannerRestaurants.capa})` }}
  >
    <S.Titles className="container">
      <span>{bannerRestaurants.tipo}</span>
      <h3>{bannerRestaurants.titulo}</h3>
    </S.Titles>
  </S.ContainerProfile>
)

export default BannerProfile
