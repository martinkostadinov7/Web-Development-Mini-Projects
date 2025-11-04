import './Card.css'

function Card({ imageUrl, title, description }){
    return(
        <div className="card-box">
            <img src={imageUrl} alt="image" className="image"/>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </div>
    )
}

export default Card