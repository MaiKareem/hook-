import "./MovieCard.css"

function MovieCard ({
  Movies:{ posterURL ,title, description, rating},
}) {

  return ( 
    <div className="card movie_card">
    <img
        src={posterURL}
        width="100rem"
        height="100rem"
        className="card-img-top"
        alt="movie-poster"
    />
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="movie_info">{description}</p>
        <span className="float-right">
            <i className="fas fa-star"></i> 
            {rating} / 10
        </span>
    </div>
</div>
  
  );
}


  

export default MovieCard;