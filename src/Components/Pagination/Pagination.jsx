import React, { Component } from 'react';
import "./Pagination.css"
class Pagination extends Component {
    state = {  }
    render() { 
        return (<>
        <nav aria-label="...">
  <ul className="pagination justify-content-center">
    {
      this.props.currPage===1?
      <li className="page-item disabled">
      <a className="page-link" >Previous</a>
    </li>:
    <li className="page-item"onClick={this.props.previousPage}>
    <a className="page-link" >Previous</a>
  </li>
    
    }
    
    {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li> */}

  {
    this.props.pages.map((pageCount)=>{
      return pageCount === this.props.currPage ? (
        <li className="page-item active">
          <a className="page-link" >
            {pageCount}
          </a>
        </li>
      ):(
        <li
          className="page-item"
          onClick={() => {
            this.props.setPage(pageCount);
          }}
        >
          <a className="page-link">
            {pageCount}
          </a>
        </li>
      );
    })
  }{
    this.props.currPage===this.props.pages.length?
    <li className="page-item disabled" >
      <a className="page-link">Next</a>
    </li>:<li className="page-item" onClick={this.props.nextPage}>
      <a className="page-link">Next</a>
    </li>
  }
    
  </ul>
</nav>
</>  );
    }
}
 
export default Pagination;