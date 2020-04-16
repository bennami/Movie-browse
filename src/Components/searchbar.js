import React from "react";
import {Link} from 'react-router-dom'
function SearchBar(props) {

  return(
      <div  className={'search'}>
      <form action={<Link to={'/search'}>search</Link>} onSubmit={props.handleSubmit}>
          <input onChange={props.handleChange}  type="text" placeholder={'search for a movie'}/>

          <button type={'submit'} ><Link to={'/search'}>search</Link></button>

      </form>
      </div>
  )

}

export default SearchBar;