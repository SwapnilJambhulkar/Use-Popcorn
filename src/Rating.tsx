import React , {useState} from 'react'
import { ratingProps } from './types'

const Rating : React.FC<ratingProps> = ({data ,handleSavingMovies, savedMovies}) => {

  const [tempRating , setTempRating] = useState<number>(0) ;

  const [rating , setRating] = useState<number>(0) ;

  let currentRating ; 

  const isSaved = ()  : boolean => {
    let saved : boolean = false ; 
      savedMovies.forEach((element) => {
        if(element.imdbID === data.imdbID) {
          saved = true ; 
          currentRating = element.rating ;
          return true  ;
        }
      });

      return saved ; 
  } 


  const handleRating = (idx : number) : void => {
    setTempRating(idx + 1) ;
  }

  return (

    <div className='rating'>
      {
       
        isSaved() ? <p>You rated this movie {currentRating} ⭐</p> : <>  
         
      <div>
        <div>
        {
          Array.from({length : 10} , (_, idx)  :JSX.Element => {
              return (
                <svg onClick={() => setRating(idx + 1)} onMouseEnter={() => handleRating(idx)}  onMouseLeave={() => setTempRating(0)} className={`star ${tempRating >= idx + 1 || rating >= idx + 1 ? 'fillStar' : ''}`} key={idx + 1} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffd700"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              )
          })
        }
        <p className={'rate'}>{tempRating ? tempRating : rating ? rating : ''}</p>
        </div>
  
      
      </div>
        {
          rating ||tempRating ?   <button className='btn' onClick={() => handleSavingMovies(data , rating)}>+ Add to list</button> : <></>
        }

        </>
      }
    </div>

  )

}



export default Rating ; 