import { useState, useEffect } from "react";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  //variable with your apiKey
  // const apiKey = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <main className="bg-slate-950 flex flex-col justify-center items-center min-h-screen">
      <div className="w-screen h-64 bg-gradient-to-r from-indigo-500 to-indigo-900 flex p-5 items-center justify-center mb-10">
        
        <h1 className="text-white lg:text-5xl md:text-2xl font-bold">
          Movie Search App
        </h1>
      </div>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </main>
  );
}
