import { useLocation, useOutletContext, useParams } from "react-router-dom"
import { Section } from "../../components/section";
import { useEffect, useState } from "react";
import { fakeProduct } from "../../types/fakeProduct";
import { Loader } from "../../components/loader";

export const Product = function(){

    //-----------------------------------------------------------------------------------------STATE

    const { productID } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState<fakeProduct>({
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
    const {lastProduct, setLastProduct} = useOutletContext();

    //-----------------------------------------------------------------------------------------LOCATION

    const location = useLocation();
    console.log(location.pathname);

    //-----------------------------------------------------------------------------------------EFFECTS

    useEffect(function(){
        const getProduct = async function(){
            try {
                setLoading(true);
                const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
                const productData = await res.json();
                setProduct(productData);
                setLastProduct(location);

            } catch (error) {
                
            } finally {
                setLoading(false);
            }
        }; getProduct();
    }, []);


    //------------------------------------------------------------------------------------------RENDER

    return (
        <Section>
            {isLoading === true && <Loader />}
            {isLoading === false && 
                <div className="product">
                    <img src={product.image} className="product__image"/>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Rated {product.rating.rate} by {product.rating.count} users</p>
                    <br />
                    <p>{product.description}</p>
                </div>
            }
        </Section>

    )
}