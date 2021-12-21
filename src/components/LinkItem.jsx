import { Link } from "react-router-dom"

function LinkItem({ heading, description, url, external }) {
    return (
        external ?
            <div className="link">
                <a href={url} >
                <h3>{heading}</h3>
                <p>{description}</p>
                </a>
            </div>

        : <div className="link">
        <Link to={url} >
        <h3>{heading}</h3>
        <p>{description}</p>
        </Link>
        </div>

        
    )
}

export default LinkItem
