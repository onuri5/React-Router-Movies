import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';


export default function MovieList(props) {
  const {url} = useRouteMatch()
  const {movies} = props;
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id} >
          {console.log(movie)}
          <MovieDetails movie={movie} />
        </Link>
      
      ))}
   
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
