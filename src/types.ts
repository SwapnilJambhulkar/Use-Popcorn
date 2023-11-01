
export interface searchQuery {
  Title : string ; 
  Year : string  ;
  imdbID : string ; 
  Type : string ; 
  Poster : string ; 
}

type hanldeSelection = (id : string) => void ; 

export interface listProps  {
  movies : Array<searchQuery>;
  isLoading : boolean ;
  input : string ; 
  error : string ; 
  hanldeSelection : hanldeSelection ;
}
 
type handleSearchQuery  = (query : string) => void ; 
 
export interface headerProps  {
  movies : Array<searchQuery>;
  handleSearchQuery : handleSearchQuery ;
}


 type handleSavingMovies = (save  : ExtendedQueryDetails , rating : number) => void ; 

export interface detailsProps  {
  selectedId  :string ; 
  hanldeSelection : hanldeSelection ;
  handleSavingMovies : handleSavingMovies ;
  savedMovies : Array<ExtendedQueryDetails> ;
}



export interface queryDetails {
  Title : string ; 
  Released : string ; 
  Runtime : string ; 
  Genre : string ;
  imdbRating : string ;
  Plot : string ; 
  Actors : string ;
  Director : string ;
  Poster: string ; 
  imdbID : string ;
  rating : number ;
}

export type ExtendedQueryDetails = queryDetails | Record<string  , never> ; 

export interface ratingProps {
  data : ExtendedQueryDetails;
  handleSavingMovies : handleSavingMovies ;
  savedMovies : Array<ExtendedQueryDetails> ;
}

type deleteSavedMovie = (movie : ExtendedQueryDetails) => void ;

export interface savedMoviesProps {
  savedMovies : Array<ExtendedQueryDetails> ;
  selected :string ;
  deleteSavedMovie : deleteSavedMovie ;
}

export interface statsProps {
  savedMovies : Array<ExtendedQueryDetails> ;
}