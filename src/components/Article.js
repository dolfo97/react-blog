
export default function Article (props) {
    return (
      <article>
        <time datetime={props.time}>{props.date}</time>
        <h2>{props.title}</h2>
        <img src={props.img} alt={props.alt} />
        <p>{props.paragraph}</p>
        <a href='#'>{props.tag}</a>
      </article>
    )
  }