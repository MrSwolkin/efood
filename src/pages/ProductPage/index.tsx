import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderProductProfile from '../../components/HeaderProductProfile'
import BannerProfile from '../../components/ProfileBanner'
import ProfileList from '../../components/ProfileList'

import { Restaurants } from '../Home'

const ProductPage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <HeaderProductProfile />
      <BannerProfile bannerRestaurants={restaurante} />
      <ProfileList items={restaurante.cardapio} />
    </>
  )
}

export default ProductPage
