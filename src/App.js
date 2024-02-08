import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './ShowData/Navbar';
import MovieDetail from './ShowData/MovieDetail'
import Form from './ShowData/Form';
import Home from './ShowData/Home';
import Search from './ShowData/Search';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
         <Route index element={<Home/>}/>
         <Route path='/movie/:id' element={<MovieDetail/>}/>
         <Route path='/show/:id' element={<Form/>}/>
         <Route path='/search/:key' element={<Search/>}/>
         <Route path='*' element={<h1>Something went wrong</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
