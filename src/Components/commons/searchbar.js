import React, {useState} from "react";
import {connect} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types'
import * as homePageAction from "../../redux/actions/homePageActions";

function SearchBar({
    setSearch,
    searchInput,
    searchResults,
    currentPage,
    ...props
}) {

    const history= useHistory();
    const[search, setSearchUser]=useState('')
    //when user searches for a movie, fetch data and set movieList
    const searchItem = async (e) => {
        e.preventDefault();
        if(search === ""){
            alert("please enter a movie title")
        }else{
          setSearch(search,1);

            //alert(search);
            history.push(`/search/${search}`);
        }
    };

    //set search while typing
    const handleChange = (e) =>{
        setSearchUser(e.target.value);
    };

  return(
      <div  className={'search'}>
          <form action={<Link to={'/search'}>search</Link>} onSubmit={searchItem}>
          <input onChange={handleChange}  type="text"  value={search} placeholder={'search for a movie'} />
          <button type={'submit'} onClick={searchItem}><Link to={'/search'}>search</Link></button>
      </form>
          <p>{props.searchInput}</p>
      </div>
  )

}
SearchBar.prototypes = {
    setSearch:PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    searchMovie: PropTypes.func.isRequired,
    searchInput:PropTypes.string.isRequired,
    searchResults:PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return{
        currentPage:state.currentPage,
        searchInput: state.searchInput,
        searchResults: state.searchResults
    };
}


const mapDispatchToProps = {
    setSearch: homePageAction.setSearch,
    //searchMovie: homePageAction.searchMovie,
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchBar);
