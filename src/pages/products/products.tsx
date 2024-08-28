import { useEffect, useState } from "react"
import { Section } from "../../components/section";
import { ProductCard } from "../../components/product.card";
import { Loader } from "../../components/loader";
import { fakeProduct } from "../../types/fakeProduct";
import { SortBar } from "../../components/sort-bar";

export const Products: React.FC = function(){

    const [products, setProducts] = useState<fakeProduct[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(function(){
        async function getProducts(){
            try {
                setLoading(true);
                const res = await fetch('https://fakestoreapi.com/products');
                const fakeProducts = await res.json();
                setProducts(fakeProducts);
            } catch(error) {
                console.log(error);
            } finally {
                setLoading(false);
            }

        };
        getProducts();
    }, [])

    useEffect(function(){
        console.log(products);
    }, [products])

    return(
        <Section>
            <hgroup className="products__hgroup">
                <h1>Products page!</h1>
                <h2>I'm a h2!</h2>
            </hgroup>
            <div className="products__content">
                {loading === true && <Loader />}
                {loading === false && 
                <>
                <SortBar />
                <ul className="products-list">
                    {products.map((product: fakeProduct) => {
                        return (
                            <ProductCard image={product.image} title={product.title} price={product.price} key={product.id}/>
                        )
                    })}
                </ul>
                </>}
            </div>


        </Section>
    )
}