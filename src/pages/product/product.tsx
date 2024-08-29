import { Link, useLocation, useOutletContext, useParams } from "react-router-dom"
import { Section } from "../../components/section";
import { useEffect, useState } from "react";
import { FakeProduct } from "../../types/FakeProduct";
import { Loader } from "../../components/loader";
import { Error } from "../error/error";
import { ProductContextType } from "../../types/ProductContext";

export const Product = function(){

    //-----------------------------------------------------------------------------------------STATE

    const { productID } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [product, setProduct] = useState<FakeProduct>({
        id: 0,
        title:'',
        image: '',
        price: 0,
        category: '',
        description: '',
        rating: {
            rate: 0,
            count: 0
        },
    });

    //-----------------------------------------------------------------------------------------HOOKS
    
    const { setLastProduct }: ProductContextType = useOutletContext();
    const location = useLocation();

    //-----------------------------------------------------------------------------------------EFFECTS

    useEffect(function(){
        const getProduct = async function(){
            try {
                setLoading(true);
                const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
                const productData = await res.json();
                setProduct(productData);
                setLastProduct(location.pathname);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }; getProduct();
    }, []);


    //------------------------------------------------------------------------------------------RENDER

    return (
        <Section>
            {isLoading === true && <Loader />}
            {isLoading === false && isError === false && 
                <div className="product">
                    <img src={product.image} className="product__image"/>
                    <br />
                    <h3>{product.title}</h3>
                    <br />
                    <div>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Rated {product.rating.rate} by {product.rating.count} users</p>
                        <br />
                        <p>{product.description}</p>
                    </div>
                </div>
            }
            {isLoading === false && isError === true && <Error />}
            <Link to="/products" className="standard-button">&larr; Back to products</Link>
        </Section>

    )
}