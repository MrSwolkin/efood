import {
  CardProductContainer,
  CardProducTitle,
  CardProductDescription,
  CardProductButton
} from './styled'

type Props = {
  image: string
  title: string
  description: string
}

const CardProduct = ({ image, title, description }: Props) => (
  <CardProductContainer>
    <img src={image} alt="" />
    <CardProducTitle>{title}</CardProducTitle>
    <CardProductDescription>{description}</CardProductDescription>
    <CardProductButton to={'/'}>Adicionar ao carrinho</CardProductButton>
  </CardProductContainer>
)

export default CardProduct
