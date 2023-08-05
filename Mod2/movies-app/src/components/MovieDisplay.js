export default function  MovieDisplay ({ movie }){
    //function to return loaded JSX
    const loaded = () => {
      return (
        <div className="text-white font-bold text-lg">
          <h1 className="mb-2">{movie.Title}</h1>
          <h2 className="mb-2">{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} className="mb-2 object-cover"/>
          <h2>{movie.Year}</h2>
        </div>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1 className="text-white">No Movie to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  };
