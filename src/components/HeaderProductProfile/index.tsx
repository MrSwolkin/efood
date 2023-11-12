import { Link } from 'react-router-dom'
import { BannerImage, BannerContente } from './styles'
import bannerImage from '../../asset/images/fundo.png'
import logo from '../../asset/images/logo.png'

import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const HeaderProduct = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  return (
    <BannerImage style={{ backgroundImage: `url(${bannerImage}` }}>
      <BannerContente className="container">
        <h3>Restaurantes</h3>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <a onClick={openCart}>{items.length} Produto(s) no carrinho</a>
      </BannerContente>
    </BannerImage>
  )
}

export default HeaderProduct
