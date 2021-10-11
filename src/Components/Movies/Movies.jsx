
import React, { Component } from 'react';
import Movie from "../Movie/Movie.jsx";
import "./Movies.css";


class Movies extends Component {
    state = {
        
      }
    
    render() { 
        return ( <div className="movies">
            {
            this.props.movies.map((movieObject)=>{
                if(this.props.favMovies){
                for(let i=0;i<this.props.favMovies.length;i++){
               if(this.props.favMovies[i].id===movieObject.id){
                return( <Movie key={movieObject.id} isFavMovie={true} movie={movieObject} handleFavRemove={this.props.handleFavRemove} handleFavAdd={this.props.handleFavAdd} isFav={false} ></Movie>);
               }
               
            }
            return(<Movie key={movieObject.id} isFavMovie={false} movie={movieObject} handleFavRemove={this.props.handleFavRemove} handleFavAdd={this.props.handleFavAdd} isFav={false} ></Movie>)
        }
            else{
                return(<Movie key={movieObject.id} isFavMovie={false} movie={movieObject} handleFavRemove={this.props.handleFavRemove} handleFavAdd={this.props.handleFavAdd} isFav={false} ></Movie>)
            }
             })
            }
        </div> );
    }
}
 
export default Movies;