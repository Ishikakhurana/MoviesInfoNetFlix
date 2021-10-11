import React, { Component } from 'react';
import "./MoviePage.css";
import YouTube from "react-youtube";
import axios from "axios";
import { API_URL, API_KEY } from "../../API/secret";
class MoviePage extends Component {
    state = {  
        videoObject:{},
    };

    async componentDidMount(){
        let response=await axios.get(`${API_URL}/movie/${this.props.location.state.id}/videos?api_key=${API_KEY}&language=en-US`)
        // console.log(response);
        let videoObject = response.data.results.filter((videoObj) => {
            if (videoObj.type === "Trailer" && videoObj.site === "YouTube") {
              return true;
            }
            return false;
          });
          this.setState({
            videoObject: videoObject[0],
          });
    }
    
    render() {
        const opts= {
            height:"100%",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          };
        let {title, tagline, vote_average, poster_path, overview}=this.props.location.state;
        
        return ( 
        <div className="moviepage">
            <div className="movie-page-poster">
                <img src={poster_path} alt="movie-poster"/>
            </div>

            <div className="movie-page-details">
                <div className="movie-title-info">
                <h1 >{title}</h1>
                <h4>{tagline}</h4>
                <span>{vote_average}IMDB</span>
                </div>
                <p>{overview}</p>
                <div className="movie-trailer">
                    <YouTube videoId={this.state.videoObject?this.state.videoObject.key : 0} opts={opts} ></YouTube>
                </div>
            
               


            </div>

        </div>);
    }
}
 
export default MoviePage;