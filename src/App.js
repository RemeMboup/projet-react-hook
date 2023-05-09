import MovieList from './Components/MovieList';
import {Routes, Route} from "react-router-dom";
import MovieDetails from './Components/MovieDetails'


function App() {
  return (
    <div>
       
        <Routes>
          <Route path="/" element ={< MovieList/>}/>
          <Route path="/movieDetails/:id" element={<MovieDetails />}>
          </Route>
        </Routes>
        
     

      
    </div>
  );
}

export default App;
