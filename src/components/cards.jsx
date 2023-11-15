import Card from "./card";

const Cards = ({items}) => (
    <section>
        {items.map((item) =>
        <Card key = {item.id} title={item.title} link={item.link}/>
        )}
    </section>
)

export default Cards