import { useParams } from 'react-router-dom'

import HeaderProductProfile from '../../components/HeaderProductProfile'
import BannerProfile from '../../components/ProfileBanner'
import ProfileList from '../../components/ProfileList'
import { useGetCarpadioItemQuery } from '../../services/api'

import { Restaurants } from '../Home'
import Cart from '../../components/Cart'

const ProductPage = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetCarpadioItemQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <HeaderProductProfile />
      <BannerProfile bannerRestaurants={restaurante} />
      <ProfileList items={restaurante.cardapio} />
      <Cart />
    </>
  )
}

export default ProductPage
