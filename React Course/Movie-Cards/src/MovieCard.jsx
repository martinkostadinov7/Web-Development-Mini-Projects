import './MovieCard.css'

function MovieCard(props){
    return(
        <>
        <div className="movie-box">
            <img className="image" src={props.image} alt="movie poster" width="150"/>
            <p className="title">{props.title}</p>
            {<p>"Recommended!!!"</p> && props.rating > 8}
            <p className="year">{props.year}</p>
            <p className="description">{props.description}</p>
        </div>
        </>
    )
}

export default MovieCard