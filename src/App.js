// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './styles.css';
import Home from './components/Home'
import Book from './components/Book'
import AddBook from './components/AddBook'
import UpdateBook from './components/UpdateBook'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>CSIS 3380 Finals</h1>
     
      <div>
        <Routes>
          <Route path='/'  element={<Home />}></Route>
          <Route path='/:id' element={<Book />}></Route>
          <Route path='/add' element={<AddBook />}></Route>
          <Route path='/update/:id' element={<UpdateBook />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
