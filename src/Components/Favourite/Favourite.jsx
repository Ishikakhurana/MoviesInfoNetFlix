import React, { Component } from 'react';
import Movie from "../Movie/Movie";
import "../Movies/Movies.css";
class Favourite extends Component {
    state = {  }
    render() { 
        return (<div className="movies">
        {this.props.favMovies?(
        this.props.favMovies.map((movieObject)=>{
           return( <Movie key={movieObject.id} movie={movieObject} handleFav={this.props.handleFav} isFav={true}></Movie>);
        })):("No Favourites Added")
        }
        
    </div> );
    }
}
 
export default Favourite;