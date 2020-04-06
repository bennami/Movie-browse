import React from "react";

function Search(props) {

  return(
      <div  className={'search'}>
      <form action="" onSubmit={props.handleSubmit}>
          <input onChange={props.handleChange}  type="text" placeholder={'search for a movie'}/>

          <button type={'submit'} >search</button>

      </form>
      </div>
  )

}

export default Search;