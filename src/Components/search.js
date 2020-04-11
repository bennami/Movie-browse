import React from "react";
import {Link} from 'react-router-dom'
function Search(props) {

  return(
      <div  className={'search'}>
      <form action="" onSubmit={props.handleSubmit}>
          <input onChange={props.handleChange}  type="text" placeholder={'search for a movie'}/>
         {/* <Link  to='/search' >*/}
          <button type={'submit'} >search</button>
         {/* </Link>*/}
      </form>
      </div>
  )

}

export default Search;