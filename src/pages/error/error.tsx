import { useNavigate } from "react-router-dom"
import { Section } from "../../components/section"

export const Error = function(){

    const navigate = useNavigate();

    return (
        <Section>
            <h1>Custom error page</h1>
            <h2>There was an error processing your request</h2>
            <br />
            <button className="standard-button" onClick={()=>navigate(-1)}>&larr; Get back to safety</button>
        </Section>
    )
}