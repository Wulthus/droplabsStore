interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}

export const ProductCard = function({ image, title, price }: ProductCardProps){
    return (
        <article className="product-card">
            <img src={image} className="product-card__figure"/>
            <h3>{title}</h3>
            <p>Price: $<b>{price}</b></p>
        </article>
    )

}