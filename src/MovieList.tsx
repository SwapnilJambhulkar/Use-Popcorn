import React from 'react'; 
import { listProps } from './types';



const MovieList : React.FC<listProps> = ({movies , isLoading , input , error , hanldeSelection }) => {

return (

  <div className="box list">
    {
    error ? <h2 className='error'>{error}</h2>  :  isLoading && input.length > 2 ? <h2 className='loading'>LOADING...</h2> : !movies?.length && input.length > 2  ?  <h2 className='found'>⛔ Movies not found</h2> : 
    <ul>
            {
             movies?.map((element) : JSX.Element => {
                return (
                  <li onClick={() => hanldeSelection(element.imdbID)}  className="movie" key={element.imdbID}>
                  <img src={element.Poster} alt="" />
                  <div className="title">
                    <h3>{element.Title}</h3>
                    <p>🗓 {element.Year}</p>
                  </div>
                </li>
                )
              })
            }
          </ul>

    }


  </div>

)

}




export default MovieList ;