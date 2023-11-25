import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'
import bannerImage from '../../asset/images/fundo.png'
import logo from '../../asset/images/logo.png'

const HeaderProduct = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.BannerImage style={{ backgroundImage: `url(${bannerImage}` }}>
      <S.BannerContente className="container">
        <h3>Restaurantes</h3>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <a onClick={openCart}>{items.length} Produto(s) no carrinho</a>
      </S.BannerContente>
    </S.BannerImage>
  )
}

export default HeaderProduct
