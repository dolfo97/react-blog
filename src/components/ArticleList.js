import Article from './Article'
import data from '../data'
const blogArr = data.map((element, index) => {
  return (
    <Article
      key={index}
      date={element.date}
      title={element.title}
      img={element.img}
      paragraph={element.paragraph}
      tag={element.tag}
    />
  )
})

export default function ArticleList () {
  return (
    <main>{blogArr}</main>
  )
}