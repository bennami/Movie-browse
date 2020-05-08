import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from "../Components/commons/spinner/Spinner"
import {toast} from "react-toastify"
import {loadTrendyMovies} from "../redux/actions/homePageActions";
import List from "../Components/commons/List";

function ManageHomePage({
    trendingMovies,
    ...props
    }) {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    //loads courses and authors on load
    useEffect( ()=>{
        if (trendingMovies.length === 0) {
            loadTrendyMovies().catch(error => {
                alert("Loading trending" + error);
            });
        }else {
            setTrendingMovies({ ...props.trendingMovies });
        }

    },[props.trendingMovies]);



return(
    trendingMovies.length === 0
        ?(<Spinner/>)
        :(
            <List
                movieList={trendingMovies}
            />
        )
);

}

ManageHomePage.prototype={
    popularMovies: PropTypes.object.isRequired,
    trendingMovies: PropTypes.object.isRequired,
}

//redux mapping function (converted to an object now) that determine what we want to access
function mapStateToProps(state, ownProps) {
    return {trendingMovies: state.trendingMovies,};
}



//by using mapDispatchToProps as object redux automatically wraps all actions inside a dispatch
const mapDispatchToProps = {
    loadTrendy: loadTrendyMovies()
};

//call to connect to redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageHomePage);
