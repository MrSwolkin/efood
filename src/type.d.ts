declare interface CardapioItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}
declare type Restaurants = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
