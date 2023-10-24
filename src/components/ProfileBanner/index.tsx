import bannerProfile from '../../asset/images/italian-profil.png'
import { ContainerProfile, Titles } from './styles'

const BannerProfile = () => (
  <ContainerProfile style={{ backgroundImage: `url(${bannerProfile})` }}>
    <Titles className="container">
      <span>Italiana</span>
      <h3>La Dolce Vita Trattoria</h3>
    </Titles>
  </ContainerProfile>
)

export default BannerProfile
