class Restaurants {
  id: number
  image: string
  infosTAg: string[]
  title: string
  score: string
  description: string

  constructor(
    id: number,
    image: string,
    infosTAg: string[],
    title: string,
    score: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infosTAg = infosTAg
    this.title = title
    this.score = score
    this.description = description
  }
}

export default Restaurants
