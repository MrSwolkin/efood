import { useParams } from 'react-router-dom'
import { useGetCarpadioItemQuery } from '../../services/api'

import HeaderProductProfile from '../../components/HeaderProductProfile'
import BannerProfile from '../../components/ProfileBanner'
import ProfileList from '../../components/ProfileList'
import Cart from '../../components/Cart'
import Checkout from '../Checkout'
import Loader from '../../components/Loader'

const ProductPage = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetCarpadioItemQuery(id!)

  if (!restaurante) {
    return (
      <h3>
        <Loader />
      </h3>
    )
  }
  return (
    <>
      <HeaderProductProfile />
      <BannerProfile bannerRestaurants={restaurante} />
      <ProfileList items={restaurante.cardapio} />
      <Cart />
      <Checkout />
    </>
  )
}

export default ProductPage
