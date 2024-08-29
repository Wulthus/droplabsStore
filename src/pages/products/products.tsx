import { useEffect, useRef, useState } from "react"
import { Section } from "../../components/section";
import { ProductCard } from "../../components/product.card";
import { Loader } from "../../components/loader";
import { FakeProduct } from "../../types/FakeProduct";
import { SortBar } from "../../components/sort-bar";
import { Error } from "../error/error";

export const Products: React.FC = function(){

    //---------------------------------------------------------------------------------------STATE

    const [products, setProducts] = useState<FakeProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const productsRef = useRef([])

    //---------------------------------------------------------------------------------------EFFECTS

    useEffect(function(){
        async function getProducts(){
            try {
                setLoading(true);
                setError(false);
                const res = await fetch('https://fakestoreapi.com/products');
                const fakeProducts = await res.json();
                productsRef.current = fakeProducts;
                setProducts(fakeProducts);
            } catch(error) {
                setError(true);
            } finally {
                setLoading(false);
            }

        };
        getProducts();
    }, [])

    //---------------------------------------------------------------------------------------RENDER

    return(
        <Section>
            <hgroup className="products__hgroup">
                <h1>Products page!</h1>
                <h2>I'm a h2!</h2>
            </hgroup>
            <div className="products__content">
                {loading === true && <Loader />}
                {loading === false && isError === false &&
                <>
                <SortBar products={products} setProducts={setProducts} productsRef={productsRef}/>
                <ul className="products-list">
                    {products.map((product: FakeProduct) => {
                        return (
                            <ProductCard image={product.image} title={product.title} price={product.price} key={product.id} id={product.id}/>
                        )
                    })}
                </ul>
                </>}
                {loading === false && isError === true && <Error />}
            </div>


        </Section>
    )
}