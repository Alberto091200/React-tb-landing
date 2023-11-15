import Link from "./link"

const Card = ({title, link}) => (
    <article>
        <h2>{title}</h2>
        <Link to = "#">{link}</Link>
    </article>
) 



export default Card