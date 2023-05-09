import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import {Link} from 'react-router-dom'
    const MovieCard = ({id,title,description,postUrl,rating}) => {
      //if (!selectedTitle){
      return (
        <Link className="cardMovie" to={`/movieDetails/${id}`}>
          <div className='card mb-4' style={{width:'18rem',height:'350px'}}>
            <img src={postUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="description">
                <p className="card-text">{description}</p>
                <span className="rating mt-3 fw-bold">Note: {rating}</span>
              </div>
            </div>
          </div>
        </Link>
      );
    };
export default MovieCard;