
interface IPortfolioItem {
  id: number,
  title: string,
  summary: string,
  link: string,
  tags: string[],
  imageURL: string
}

export { IPortfolioItem }