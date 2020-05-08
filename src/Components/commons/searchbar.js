import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types'
import {API_KEY} from "../../utils";
import {loadSearch} from "../../Api/movieApi";

import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function SearchBar(props) {

    const [searchInput, setSearchInput] =  useState();
    const [searchResults,  setSearchResults]  = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const history= useHistory();

    //when user searches for a movie, fetch data and set movieList
    const searchItem = async (e) => {
        e.preventDefault();

        if(searchInput === ""){
            alert("please enter a movie title")
        }else{
            loadSearch(searchInput,1)

            setSearchResults(searchInput.results);
            history.push(`/search/${searchInput}`);
        }
    };



    //set search while typing
    const handleChange = (e) =>{
        setSearchInput(e.target.value);
    };

  return(
      <div  className={'search'}>
          <form action={<Link to={'/search'}>search</Link>} onSubmit={searchItem}>
          <input onChange={handleChange}  type="text" placeholder={'search for a movie'} />
          <button type={'submit'} onClick={searchItem}><Link to={'/search'}>search</Link></button>
      </form>
      </div>
  )

}
SearchBar.prototype={
    searchResults:  PropTypes.array.isRequired
}

/*mapStateToProps(state.currentPage,ownProps){
    return {searchInput: state.searchInput,};
}*/

export default SearchBar;
