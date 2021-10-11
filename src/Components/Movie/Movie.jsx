import React, { Component } from 'react';
import "./Movie.css";
import {Link} from "react-router-dom";
import {API_KEY, API_URL, IMAGE_URL } from "../../API/secret";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { toHtml } from '@fortawesome/fontawesome-svg-core';
class Movie extends Component {
    state = {
      detailedMovieObj:{},
      

      }
     
      
      handleClick=(e)=>{
        console.log(e);
        if(e.target.style.color==="red"){e.target.style.color="white";
      this.props.handleFavRemove(this.props.movie);
      
    } 
        else{e.target.style.color="red";
        
        this.props.handleFavAdd(this.props.movie);}
  }
     
            async componentDidMount() {
        // https://api.themoviedb.org/3/movie/299534?api_key=bdd243ea847239dc0799805e63e189f0
        let response = await axios.get(
          `${API_URL}/movie/${this.props.movie.id}?api_key=${API_KEY}`
        );
        // console.log(response.data);
        let detailedMovieObj = response.data;
        let posterPath = IMAGE_URL + detailedMovieObj.poster_path;
        this.setState({
          detailedMovieObj: { ...detailedMovieObj, poster_path: posterPath },
        });
        
      }
    
    render() { 
        let { poster_path, title, vote_average } = this.props.movie;
        let posterPath = IMAGE_URL + poster_path;
        return (<div className="movie-item">
        <div className="movie-poster">
          <Link to={{ pathname: "/moviepage", state: this.state.detailedMovieObj }}>
          <img src={posterPath} alt="" />
          </Link>
               
        </div>
        <div className="movie-info">
          {!this.props.isFav?(this.props.isFavMovie?(<FontAwesomeIcon size={"2x"} icon={faHeart} color="red" onClick={this.handleClick} />):(<FontAwesomeIcon size={"2x"} icon={faHeart}  onClick={this.handleClick} />)):("")}
          <div className="movie-title">{title}</div>
          <div className="movie-rating">{vote_average} IMDB</div>
        </div>
      </div>  );
    }
}
 
export default Movie;