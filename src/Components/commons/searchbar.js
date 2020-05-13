import React, {useState} from "react";
import {connect} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types'
import {loadSearch} from "../../Api/movieApi";
import {bindActionCreators} from "redux";
import * as homePageAction from "../../redux/actions/homePageActions";
function SearchBar({searchInputUser,searchResults,...props}) {



    const history= useHistory();
    const[search, setSearch]=useState('')
    //when user searches for a movie, fetch data and set movieList
    const searchItem = async (e) => {
        e.preventDefault();
        if(search === ""){
            alert("please enter a movie title")
        }else{
            props.dispatch(homePageAction.searchInputUser(search))
            alert(search);
           /* props.actions.searchMovie(search);
            history.push(`/search/${searchInput}`);*/
        }
    };


    //set search while typing
    const handleChange = (e) =>{
        setSearch(e.target.value);
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
SearchBar.prototypes={
    searchMovie:PropTypes.func.isRequired,
    searchInputUser:PropTypes.func.isRequired,
    searchInput:PropTypes.string.isRequired,
    searchResults:PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return{
        searchInput: state.searchInput,
        searchResults: state.searchResults
    };
}

/*function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(homePageAction,dispatch)
    }
}*/
export default connect(mapStateToProps) (SearchBar);
