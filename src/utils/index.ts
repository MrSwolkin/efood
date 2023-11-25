export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acumulador, curentItem) => {
    if (curentItem.preco) {
      return (acumulador += curentItem.preco)
    }
    return 0
  }, 0)
}
