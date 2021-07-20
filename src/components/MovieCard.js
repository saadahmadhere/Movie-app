const MovieCard = (props) => {
    return ( 
        <div className="movie-card">
            <div className="left">
                <img src={props.movie.Poster} alt="Movie Poster" />
            </div>
            <div className="right">
                <div className="title">{props.movie.Title}</div>
                <div className="title">{props.movie.Plot}</div>
                <div className="footer">
                    <div className="rating">imdb: {props.movie.imdbRating}</div>
                    <button className="favourite-btn">Add to Favourite</button>
                </div>
            </div>
        </div>
     );
}
 
export default MovieCard;