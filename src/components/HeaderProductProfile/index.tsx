import { Link } from 'react-router-dom'
import { BannerImage, BannerContente } from './styles'
import bannerImage from '../../asset/images/fundo.png'
import logo from '../../asset/images/logo.png'

const HeaderProduct = () => (
  <BannerImage style={{ backgroundImage: `url(${bannerImage}` }}>
    <BannerContente className="container">
      <h3>Restaurantes</h3>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      <h4>0 Produto(s) no carrinho</h4>
    </BannerContente>
  </BannerImage>
)

export default HeaderProduct
