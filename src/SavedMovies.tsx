import React from "react";
import { savedMoviesProps } from "./types";

const SavedMovies : React.FC<savedMoviesProps> = ({savedMovies , selected , deleteSavedMovie}) => {


  return (
    <div className={`saved ${selected ? 'hideSaved' : 'showSaved'}`}>
          <ul>
              {
                savedMovies.map((element, idx) : JSX.Element => {
                    return (
                      <li key={idx}>
                      <img src={element.Poster} alt="" />
                      <div className="stats">
                        <h3>{element.Title}</h3>
                        <p>⭐️ {element.imdbRating}</p>
                        <p>🌟 {element.rating}</p>
                        <p>⏳ {element.Runtime}</p> 
                        <p className="close" onClick={() => deleteSavedMovie(element)}>❌</p>
                      </div>
                    </li>
                    )
                })
              }
          </ul>
    </div>
  )

}


export default SavedMovies ;