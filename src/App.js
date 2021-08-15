import React, { Component } from 'react';
import Movies from "./Components/Movies/Movies.jsx";
import Header from "./Components/Header/Header.jsx";
import Pagination from "./Components/Pagination/Pagination.jsx";
import axios from "axios";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { API_KEY, API_URL } from "./API/secret.js";
import "./App.css";
import MoviePage from './Components/MoviePage/MoviePage.jsx';
import Favourite from './Components/Favourite/Favourite.jsx';


class App extends Component {
  state = {
    moviesData:[],
    currentMovie:"batman",
    pages:[],
    currPage:1,
    favouritePage:[]
    }

  async componentDidMount(){
    let data=await axios.get(API_URL+"/search/movie", {
      params: { api_key: API_KEY, page: 1, query: this.state.currentMovie },
    });
    let pages=[];
    for(let i=1;i<=data.data.total_pages;i++){
      pages.push(i);
    }
    this.setState({
      moviesData:data.data.results,
      pages:pages,
    })
  
  }
   searchMovie=async (newMovie)=>{

    let data=await axios.get(API_URL+"/search/movie", {
      params: { api_key: API_KEY, page: 1, query: newMovie },
    });
    let pages=[];
    if(data.data.total_pages>10){
      data.data.total_pages=data.data.total_pages%10;
    }
    for(let i=1;i<=data.data.total_pages;i++){
      pages.push(i);
    }
    this.setState({
      moviesData:data.data.results,
      currentMovie:newMovie,
      pages:pages,
      currPage:1,
    });
  }
   nextPage=async()=>{
    let data=await axios.get(API_URL+"/search/movie", {
      params: { api_key: API_KEY, page: this.state.currPage+1, query: this.state.currentMovie },
    });


    this.setState({
    moviesData:data.data.results,
     currPage:this.state.currPage+1,
    });
  }
  previousPage=async()=>{
    let data=await axios.get(API_URL+"/search/movie", {
      params: { api_key: API_KEY, page: this.state.currPage-1, query: this.state.currentMovie },
    });


    this.setState({
    moviesData:data.data.results,
     currPage:this.state.currPage-1,
    });
  }
  setPage= async (pageCount)=>{
    let data=await axios.get(API_URL+"/search/movie", {
      params: { api_key: API_KEY, page: pageCount, query: this.state.currentMovie },
    });


    this.setState({
    moviesData:data.data.results,
     currPage:pageCount,
    });
  }
  setFav(){
    
  }
  render() { 
    return ( <Router>
      <div className="App">
      <Header searchMovie={this.searchMovie}></Header>
      <Switch>
        <Route path="/" exact>
        {this.state.moviesData.length?(
        <>
    <Movies movies={this.state.moviesData}></Movies>
    <Pagination
    pages={this.state.pages}
    currPage={this.state.currPage}
    nextPage={this.nextPage}
    previousPage={this.previousPage}
    setPage={this.setPage}></Pagination>
    </> ):(<h1>OOPS! no movies by that name</h1>)}
        </Route>
        <Route path="/fav" exact component={Favourite}>
          {/* <Favourite></Favourite> */}
        </Route>
        <Route path="/moviepage" exact component={MoviePage}>
        </Route>
      </Switch>
      
    </div>
    </Router>
    );
  }
}
 
export default App;
