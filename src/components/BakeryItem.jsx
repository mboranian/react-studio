// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div class="BakeryItem">
            <img src={props.item.image} alt={props.item.decription} class="pic" />
            <div class="BakeryButtons">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <p>{props.item.price}</p>
                <button onClick={() => { props.incr(props.item.name) }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}