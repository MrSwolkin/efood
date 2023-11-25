import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { openCheckout } from '../../store/reducers/checkout'
import { formatPrice, getTotalPrice } from '../../utils'

import * as S from './styled'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const paymentPage = () => {
    dispatch(close())
    dispatch(openCheckout())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItems key={item.id}>
                  <img src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formatPrice(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} />
                </S.CartItems>
              ))}
            </ul>
            <S.Price>
              <p>Valor Total</p>
              <p>{formatPrice(getTotalPrice(items))}</p>
            </S.Price>
            <S.CartButton onClick={paymentPage}>
              Continuar com a entrega
            </S.CartButton>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio. adicione um produto para proseguir com a
            compra.
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
