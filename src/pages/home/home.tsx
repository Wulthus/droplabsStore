import { Link, useOutletContext } from "react-router-dom"
import { Section } from "../../components/section"
import { ProductContextType } from "../../types/ProductContext";

export const Home = function(){

    const { lastProduct }: ProductContextType = useOutletContext();

    return(
        <Section>
            <h1>Welcome to Droplabs Store!</h1>
            <h2>This is h2!</h2>
            <br />
            {lastProduct && 
                <Link to={lastProduct} className="standard-button">
                    &larr; Wróć do przeglądania produktu
                </Link>
            }
        </Section>
    )
}