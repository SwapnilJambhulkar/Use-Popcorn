import React , {useEffect , useState}  from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Stats from "./Stats";
import SavedMovies from "./SavedMovies";
import MovieDetails from "./MovieDetails";

import { searchQuery , ExtendedQueryDetails } from "./types";


const App : React.FC = () => {

  const [movies , setMovies] = useState<Array<searchQuery>>([]);

  const [input , setInput] = useState<string>('') ;

  const [isLoading , setIsLoading] = useState<boolean>(false) ;

  const [error , setError] = useState<string>('') ;

  const [selected , setSelected] = useState<string>('');

  const [savedMovies , setSavedMovies] = useState<Array<ExtendedQueryDetails>>([]);

  const hanldeSearchQuery = (query : string ) :void => {
    setInput(query) ; 
  }

  const hanldeSelection = (id : string) : void => {
    if(id === selected) {
      setSelected('');
    }
    else {
      setSelected(id) ;
    }
  }


  const hanldeSavingMovies = (current : ExtendedQueryDetails , rating : number) :void => {
    current.rating = rating ; 
    setSavedMovies((saved) => [...saved , ...[current] ])
    setSelected('');
  }

  const deleteSavedMovie = (movie : ExtendedQueryDetails) : void  => {
    setSavedMovies((saved) => {
      return saved.filter((element) => {
        return element !== movie ;
      })
    })
  }



  useEffect(() => {

    const controller  : AbortController = new AbortController() ;

    const getQuery =  async () : Promise<void> => {
        try {
          setIsLoading(true);

          const url = `https://www.omdbapi.com/?apikey=d061bd37&s=${input}`;

          const res = await fetch(url , {signal : controller.signal}); 

          if(!res.ok) {
            throw new Error('Something went Wrong') ;
          }
          else {
            setError('');         
          }

          const data  = await res.json();

          setMovies(data.Search) ;

          setIsLoading(false) ;
        }
        catch (err) {
          if (err instanceof Error && err.name !== 'AbortError') {
            setError(err.message);
          }
        }
    }

    if(input.length < 3) {
      setMovies([]);
      return  ;
    }
    else {
      getQuery();
    }

    return function() {
       controller.abort() ;
    }

  },[input]);




    return (

    <>
    <Header movies = {movies} handleSearchQuery = {hanldeSearchQuery}  />
    <div className="container">
    <MovieList hanldeSelection = {hanldeSelection} movies = {movies} isLoading = {isLoading} input = {input} error = {error}/>
    <div className="box">
      <Stats savedMovies = {savedMovies}/>
      <SavedMovies deleteSavedMovie = {deleteSavedMovie} savedMovies = {savedMovies} selected ={selected}/>
      <MovieDetails savedMovies ={savedMovies}  hanldeSelection = {hanldeSelection}  selectedId = {selected} handleSavingMovies = {hanldeSavingMovies}/>
    </div>
    </div>
    </>

  ) 


}



export default App ; 