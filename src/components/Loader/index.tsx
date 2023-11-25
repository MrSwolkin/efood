import { BarLoader } from 'react-spinners'
import { Container } from '../Footer/styles'
import { color } from '../../styles'

const Loader = () => (
  <Container>
    <BarLoader color={color.lightPink} />
  </Container>
)

export default Loader
