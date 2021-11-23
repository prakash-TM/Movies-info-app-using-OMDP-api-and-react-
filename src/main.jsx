import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import Calculator from './App'
import MovieList from "./Components/MovieList"


ReactDOM.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>,
  document.getElementById('root')
)

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Pagination from "react-js-pagination";
// // require("../node_modules/bootstrap/less/bootstrap.less");
// require("../node_modules/bootstrap-less")
 
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activePage: 25
//     };
//   }
 
//   handlePageChange(pageNumber) {
//     console.log(`active page is ${pageNumber}`);
//     this.setState({activePage: pageNumber});
//   }
 
//   render() {
//     return (
//       <div >
//         <Pagination style={{listStyle:"none"}}
//           activePage={this.state.activePage}
//           itemsCountPerPage={10}
//           totalItemsCount={1000}
//           pageRangeDisplayed={5}
//           onChange={this.handlePageChange.bind(this)}
//         />
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(<App />, document.getElementById("root"));
