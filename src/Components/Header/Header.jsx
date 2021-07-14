import React, { Component } from 'react';
import "./Header.css"
import {Link} from "react-router-dom";
class Header extends Component {
    state = {
        newMovieName:"",
      };
      handleOnChange=(e)=>{
        let value = e.target.value;
          this.setState({
              newMovieName:value,
          })

      }

      handleOnKeypress=(e)=>{
          if(e.key === "Enter"){
              this.props.searchMovie(this.state.newMovieName);

          }
      }

    render() { 
        return (<div className="header">
            <div className="logo">
                <img src="logo.svg" alt="Netflix Logo"/>

            </div>
            <div className="search-bar">
            <Link to="/">
                <input type="text" placeholder="Looking for.." onChange={this.handleOnChange} onKeyPress={this.handleOnKeypress}></input>
                </Link>
                </div>
            <div className="header-links">
                <div className="header-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="header-link">
                    <Link to="/fav">Favourite</Link>
                </div>
            </div>
        </div>  );
    }
}
 
export default Header;

