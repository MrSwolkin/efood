import { useSelector, useDispatch } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProfileList'

import {
  Overlay,
  CartContainer,
  SideBar,
  CartItems,
  Price,
  CartButton
} from './styled'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <div></div>
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItems key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} />
            </CartItems>
          ))}
        </ul>
        <Price>
          <p>Valor Total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Price>
        <CartButton>Continuar com a entrega</CartButton>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
