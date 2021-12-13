import { MovieCard } from './MovieCard';
interface Propscontent {
PropGenre: {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
},
PropMovie:Array<{
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}>
}

export function Content(props:Propscontent) {


  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {props.PropGenre.title}</span></span>
    </header>
    <main>
          <div className="movies-list">
            {props.PropMovie.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
    </div>
  )
}