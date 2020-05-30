import React, {useState} from "react";
import {connect} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types'
import * as homePageAction from "../../redux/actions/homePageActions";

function SearchBar({
    setSearch,
    loadSearchResults,
    searchInput,
    searchResults,
    currentPage,
    ...props
    }) {

    const [search, setSearchUser] = useState('');
    const history = useHistory();

    //search and  redirect to search results
    const searchItem = async (e) => {
        e.preventDefault();

        if (search === "") {
            alert("please enter a movie title")
        } else {
            setSearch(search);
            loadSearchResults(search).catch(error => {
                alert("loading popular" + error)
            })
            history.push(`/search/${search}`);
        }
    }

    const handleChange = (e) => {
        setSearchUser(e.target.value);
    };

    return (
        <div className={'search'}>
            <form action={<Link to={'/search'}>search</Link>} onSubmit={searchItem}>
                <input onChange={handleChange} type="text" value={search} placeholder={'search for a movie'}/>
                <button type={'submit'}><Link to={'/search'}>search</Link></button>
            </form>
            <p>{props.searchInput}</p>
        </div>
    )

}

SearchBar.prototypes = {
    setSearch: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    loadSearchResults: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        currentPage: state.homePageReducer.currentPage,
        searchInput: state.homePageReducer.searchInput,
        searchResults: state.homePageReducer.searchResults
    };
}


const mapDispatchToProps = {
    setSearch: homePageAction.setSearch,
    loadSearchResults: homePageAction.loadSearchResults

}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
