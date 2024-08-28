import { Link } from "react-router-dom"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: number,
}

export const ProductCard = function({ image, title, price, id }: ProductCardProps){
    return (
        <Link to={`/products/${id}`} className="product-card">
                <img src={image} className="product-card__figure"/>
                <h3>{title}</h3>
                <p>Price: $<b>{price}</b></p>
        </Link>

    )

}