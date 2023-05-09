import React from 'react'
import { Link, useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Style.css'
import initialList from './Data';
console.log(initialList)
const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  let films= initialList.filter((film)=> film.id === Number(id) );
  console.log(films);
    return (
      <div >
        {
            films.map((film)  =>(
              <div key={film.id} className="mb-4 d-flex container" style={{ marginTop:'100px', backgroundColor:'#D8DBE2',padding:'0px',borderRadius:'5px', width:'900px'}}>
              <div className="col-6" style={{ width:'300px', height:'400px'}}>
                <img src={film.postUrl} alt="...." style={{height:'100%',width:'100%'}} className=' g-0'/>
              </div>
              <div className="col-6" style={{width: '30rem',marginLeft:'40px',padding:'80px'}}>
                <div className="moviedetail">
                <h3 className="">{film.title}</h3>
                <p className="lh-lg">{film.description}</p>
                </div> 
                <div className="d-flex justify-content-between ">
                  <Link to ={film.trailerLink} className="liens"> Regarder</Link>
                  <Link to="/" className="liens">Accueil</Link>
                </div>
              </div>
            </div>
          ))
      }
    </div>
  );
};
export default MovieDetails;