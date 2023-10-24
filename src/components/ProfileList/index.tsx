import CardProduct from '../ProfileProduct'
import Products from '../../models/ItalianPage'
import { List, ListContent } from './styles'

type Props = {
  products: Products[]
}

const ListProfile = ({ products }: Props) => (
  <ListContent className="container">
    <List>
      {products.map((product) => (
        <li key={product.id}>
          <CardProduct
            image={product.image}
            title={product.title}
            description={product.description}
          />
        </li>
      ))}
    </List>
  </ListContent>
)

export default ListProfile
