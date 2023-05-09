import React from 'react';
//import { v4 as uuidv4 } from 'uuid';
import Navebar from './Navebar';
import '../style/Style.css'
import initialList from './Data';
import { Button, Container,Form, Row,Col}  from 'react-bootstrap';
import MovieCard from './MovieCard'
import  'bootstrap/dist/css/bootstrap.min.css' ;

//import {MovieDetails} from './MovieDetails'



const MovieList = () =>{
    const [list, setList] = React.useState(initialList);
    

    const [showForm, setShowForm] = React.useState(false);
    const ViewForm = () => {
        setShowForm(!showForm);
    }
    const [query, setQuery] = React.useState('');
    // ancien filtre
    const filteredMovies = list.filter((renderCard) => renderCard.title.toLowerCase().includes(query) || renderCard.rating === Number(query) );
    // nouveau filtre
    //const keys = ["title",'rating'];
    // console.log(query)
    // const filteredMovies = (data) => {
    //     return data.filter((item) =>
    //     keys.some((key) => item[key].toLowerCase().includes(query))
    //     );
    // };
    const [formData, setFormData] = React.useState({title :'',description : '', postUrl : '',rating : ''});
    const handleAdd = (event) => {
        event.preventDefault();
        const newList = list.concat({ 
            id: list.lenght + 1,
            title: formData.title,
            description: formData.description,
            postUrl: formData.postUrl,
            rating: formData.rating
        });
        setList(newList);
        setFormData({title:'',description:'', postUrl: '', rating: ''});
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     handleAddMovie(event);
    // };
    return (
            
        <div>
            <Navebar />
            <Container className="formcontainer">
            <div>
            <Row>
                <Col>
                    <br />
                    <Button variant="info" onClick={ViewForm}>Add Movies</Button>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Search</Form.Label>
                        <Form.Control  type="text" onChange={(e) => setQuery(e.target.value)} className="input"
                            placeholder="Filter">
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            
            </div>
            {showForm &&(
            
            <Form  className="Form-movies" style={{marginTop:"40px"}}>
                <label> <h3>Ajout de nouveau film </h3></label>
                <Row className="input-movies">
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control size="sm" type="text" value={formData.title} onChange={(event) => setFormData({...formData,title: event.target.value})}>
                </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control size="sm" type="text" value={formData.description} onChange={(event) => setFormData({...formData,description: event.target.value})}>
                </Form.Control>
                </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>PostUrl</Form.Label>
                    <Form.Control size="sm" type="text" value={formData.postUrl} onChange={(event) => setFormData({...formData,postUrl: event.target.value})}>
                </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control size="sm" type="text" value={formData.rating} onChange={(event) => setFormData({...formData,rating: event.target.value})}>
                </Form.Control>
                </Form.Group>
                </Col>
                </Row>
                <Button className="btn-add-movies" variant="primary" size="lg" type="button" onClick={handleAdd}>
                Save Movies
                </Button>
                
            </Form>)}
                <div className="container-fluid">
                    <div className="d-flex justify-content-between flex-wrap mt-4 mb-3">
                        {filteredMovies.map((movie) => (
                            <div key={movie.id }>
                                <MovieCard
                                    id = {movie.id}
                                    title = {movie.title}
                                    description = {movie.description}
                                    postUrl = {movie.postUrl}
                                    rating = {movie.rating}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        
        </div>
    );

    };
    export default MovieList;