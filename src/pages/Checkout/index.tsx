import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

import { open, clear } from '../../store/reducers/cart'
import { closeCheckout } from '../../store/reducers/checkout'
import { formatPrice, getTotalPrice } from '../../utils'
import * as S from './styles'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { isVisible } = useSelector((state: RootReducer) => state.checkout)

  const dispatch = useDispatch()

  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const backToCart = () => {
    dispatch(open())
    dispatch(closeCheckout())
  }
  const purchaseSucess = () => {
    dispatch(clear())
    dispatch(closeCheckout())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      numberAddress: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome deve conter no minímo 3 caracteres')
        .required('O campo é obrigatorio'),
      address: Yup.string()
        .min(3, 'O endereço deve conter no minimo 3 caracteres ')
        .required('O campo é obrigatorio'),
      city: Yup.string()
        .min(3, 'deve conter no mínimo 3 caracteres')
        .required('O campo é obrigatorio'),
      zipCode: Yup.string()
        .min(9, 'deve conter no mínimo 9 digitos')
        .max(9, 'deve conter no maximo 9 digitos')
        .required('O campo é obrigatorio'),
      numberAddress: Yup.string().required('O campo é obrigatorio'),
      cardName: Yup.string()
        .min(3, 'O nome deve conter no minímo 3 caracteres')
        .required('O campo é obrigatorio'),
      cardNumber: Yup.string().required('O campo é obrigatorio'),
      cardCode: Yup.string()
        .min(3, 'mínimo de 3 números')
        .max(3, 'máximo de 3 números')
        .required('O campo é obrigatorio'),
      expireMonth: Yup.string()
        .min(2, 'mínimo de 3 números')
        .max(2, 'máximo de 3 números')
        .required('O campo é obrigatorio'),
      expireYear: Yup.string()
        .min(2, 'mínimo de 3 números')
        .max(2, 'máximo de 3 números')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberAddress),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isValid = fieldName in form.errors
    const hasError = isTouched && isValid

    return hasError
  }

  if (items.length === 0 && isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <S.CheckoutContainer className={isVisible ? 'is-visible' : ''}>
      <S.Overlay />
      <S.SideBar>
        <>
          {isSuccess && data ? (
            <S.FormContainer>
              <h2>Pedido realizado - {data.orderId} </h2>
              <S.SucessText>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <S.Button onClick={purchaseSucess}>Concluir</S.Button>
              </S.SucessText>
            </S.FormContainer>
          ) : (
            <form onSubmit={form.handleSubmit}>
              {payWithCard ? (
                <S.FormContainer>
                  <h2>
                    Pagamento - Valor a pagar{' '}
                    {formatPrice(getTotalPrice(items))}
                  </h2>
                  <label htmlFor="cardName">Nome do Cartao</label>
                  <input
                    id="cardName"
                    type="text"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                  />
                  <S.SplitInputRow>
                    <div>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber')
                            ? 'error cardNumber'
                            : 'cardNumber'
                        }
                        mask="9999.9999.9999.9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode')
                            ? 'error cardCode'
                            : 'cardCode'
                        }
                        mask="999"
                      />
                    </div>
                  </S.SplitInputRow>
                  <S.SplitInputRow>
                    <div>
                      <label htmlFor="expireMonth">Mês de vencimento</label>
                      <InputMask
                        id="expireMonth"
                        type="text"
                        name="expireMonth"
                        value={form.values.expireMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expireMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                    <div>
                      <label htmlFor="expireYear">Ano de vencimento</label>
                      <InputMask
                        id="expireYear"
                        type="text"
                        name="expireYear"
                        value={form.values.expireYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expireYear') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                  </S.SplitInputRow>
                  <S.Button type="submit" marginTop="24px">
                    Finalizar pagamento
                  </S.Button>
                  <S.Button onClick={() => setPayWithCard(false)}>
                    Voltar para Edição de Endereço
                  </S.Button>
                </S.FormContainer>
              ) : (
                <S.FormContainer>
                  <h2>Entrega</h2>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    type="text"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('receiver') ? 'error' : ''}
                  />
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                  <S.SplitInputRow>
                    <div>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </div>
                    <div>
                      <label htmlFor="numberAddress">Número</label>
                      <input
                        id="numberAddress"
                        type="text"
                        name="numberAddress"
                        value={form.values.numberAddress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('numberAddress') ? 'error' : ''
                        }
                      />
                    </div>
                  </S.SplitInputRow>
                  <label htmlFor="complement">Complemento (opcional) </label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                  <S.Button
                    marginTop="24px"
                    onClick={() => setPayWithCard(true)}
                  >
                    Continuar com pagamento
                  </S.Button>
                  <S.Button type="button" onClick={backToCart}>
                    Voltar ao carrinho
                  </S.Button>
                </S.FormContainer>
              )}
            </form>
          )}
        </>
      </S.SideBar>
    </S.CheckoutContainer>
  )
}

export default Checkout
