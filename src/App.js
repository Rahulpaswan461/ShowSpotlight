import './App.css';
import {Route,Routes} from 'react-router-dom'
// import MovieData from './Components/MovieData';
// import Header from './pages/Header';
// import Detail from './pages/Detail';
// import MovieList from './pages/MovieList';
// import MyCard from './pages/MyCard';
import Navbar from './ShowData/Navbar';
import Show from './ShowData/Show';
import MovieDetail from './ShowData/MovieDetail'
import Form from './ShowData/Form';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
         <Route index element={<Show/>}/>
         <Route path='/movie/:id' element={<MovieDetail/>}/>
         <Route path='/show/:id' element={<Form/>}/>
         <Route path='*' element={<h1>Something went wrong</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
