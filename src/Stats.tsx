import React from 'react';
import { statsProps } from './types';



const Stats : React.FC<statsProps> = ({savedMovies}) => {
    let totalRating : number = 0 ;
    let totalImdb : number = 0
    let totalWatchingTime : number = 0 ;  

    savedMovies?.forEach((element) => {
      totalRating += element.rating ;
      totalImdb += Number(element.imdbRating)
      const regEx = element.Runtime.replace(/\D/g, '') ; 
      totalWatchingTime += Number(regEx) ;
    })

  return (
          <div className="watch-stats">
            <h3>MOVIES YOU WATCHED</h3>
            <p> 🎃 {savedMovies.length} movies ⭐️ {Math.trunc(totalImdb)} 🌟 {(totalRating / savedMovies.length) ? Math.trunc(totalRating / savedMovies.length) : 0 } ⏳ {totalWatchingTime}min</p>
          </div>
  )



}


export default Stats ; 