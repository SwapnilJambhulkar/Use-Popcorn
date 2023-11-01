import React from 'react'; 

import { headerProps } from './types';

const Header : React.FC<headerProps> = ({movies , handleSearchQuery}) =>  {


  return (
    <header className='header'>
        <div className='logo'>
        <h1><span className='emoji'>🍿</span> usePopcorn</h1>
        </div>
        <div>
          <input onChange={(e) => handleSearchQuery(e.target.value)} type="text" placeholder='Search movies...'/>
        </div>
        <div>
        <p>Found {movies?.length ? movies.length : 0} results</p>
        </div>
    </header>
  )

}



export default Header