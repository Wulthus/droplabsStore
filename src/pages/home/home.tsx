import { Link, useOutletContext } from "react-router-dom"
import { Section } from "../../components/section"

export const Home: React.FC = function(){

    const { lastProduct, setLastProduct } = useOutletContext();

    return(
        <Section>
            <h1>Welcome to Droplabs Store!</h1>
            <h2>This is h2!</h2>
            <br />
            <Link to="#">
                Wróć do przeglądania produktu
            </Link>
        </Section>
    )
}