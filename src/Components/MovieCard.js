import React from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Button, Container,Form, Row,Col, Card }  from 'react-bootstrap';

const initialList = [
  {title:"Amour impossible",description:"my desct",postUrl:"https://resizing.flixster.com/ooA_GVdhxmFrrvf0xTZC-POcQm4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p13700_p_v8_aa.jpg",rating:10},
  {title:"Amour2",description:"my desct",postUrl:"https://resizing.flixster.com/ooA_GVdhxmFrrvf0xTZC-POcQm4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p13700_p_v8_aa.jpg",rating:11},
  {title:"Amour3",description:"my desct",postUrl:"https://resizing.flixster.com/ooA_GVdhxmFrrvf0xTZC-POcQm4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p13700_p_v8_aa.jpg",rating:12},
  {title:"Amour4",description:"my desct",postUrl:"https://resizing.flixster.com/ooA_GVdhxmFrrvf0xTZC-POcQm4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p13700_p_v8_aa.jpg",rating:10},
  {title:"Amour5",description:"my desct",postUrl:"https://resizing.flixster.com/ooA_GVdhxmFrrvf0xTZC-POcQm4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p13700_p_v8_aa.jpg",rating:10},
  {title:"Amour6",description:"my desct",postUrl:"https://resizing.flixster.com/ooA_GVdhxmFrrvf0xTZC-POcQm4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p13700_p_v8_aa.jpg",rating:10}
];


  
const App = () => {
    
    const [list, setList] = React.useState(initialList);
    
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [postUrl, setPostUrl] = React.useState('');
    const [rating, setRating] = React.useState('');

    const [showForm, setShowForm] = React.useState(false);
    const [query, setQuery] = React.useState('');

    // creation du filtre
    const filteredMovies = list.filter((renderCard) => renderCard.title.toLowerCase().includes(query) || renderCard.rating === Number(query) );

    const ViewForm = () => {
      setShowForm(!showForm);
    }
    function handleChangeTitle(event) {
      setTitle(event.target.value);
    }
    function handleChangeProfession(event) {
      setDescription(event.target.value);
    }
    function handleChangePostUrl(event) {
      setPostUrl(event.target.value);
    }
    function handleChangeRating(event) {
      setRating(event.target.value);
    }
    function handleAdd() {
        // ici on met a jour notre list en cliquant sur le bouton
        // en lui specifiant les les champs a prendre en compte
        if(title !=='' && description !== '' && postUrl!== '' && rating !== '' ){
          const newList = list.concat({ title, description, postUrl, rating, id: uuidv4()});
          console.log(newList);
          setList(newList);
          setTitle('');
          setDescription('');
          setPostUrl('');
          setRating('');
        }
    }
    const renderCard = (card, index) => {
      //if (!selectedTitle){
      return (
        <Card style={{ width: '18rem' , marginTop: "30px" ,}} key={index} className="col-md-4 col-sm-6 card my-3 py-3">
          <Card.Img variant="top" src={card.postUrl}/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.description}<br />
              {card.rating}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    };
    
   console.log(query);
    return (
        
      <div className="App">
        <header className="App-header">
          <Container>
            <div>
            <Button variant="info" onClick={ViewForm}>Add Movies</Button>
            <Form.Group className="mb-3">
                <Form.Label>Search</Form.Label>
                <Form.Control  type="text" onChange={(e) => setQuery(e.target.value)} className="input"
                  placeholder="Filter">
                </Form.Control>
            </Form.Group>
            </div>
            {showForm &&(
            <Form className="Form-movies" style={{marginTop:"40px"}}>
              <Row>
                <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control size="sm" type="text" value={title} onChange={handleChangeTitle}>
                </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control size="sm" type="text" value={description} onChange={handleChangeProfession}>
                </Form.Control>
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="mb-3">
                  <Form.Label>PostUrl</Form.Label>
                  <Form.Control size="sm" type="text" value={postUrl} onChange={handleChangePostUrl}>
                </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control size="sm" type="text" value={rating} onChange={handleChangeRating}>
                </Form.Control>
                </Form.Group>
                </Col>
              </Row>
              <Button variant="secondary" size="lg" type="button" onClick={handleAdd}>
                Save Movies
              </Button>
            </Form>)}
            <div className="container-fluid">
              <div className="row">
                <div className="row justify-content-between">
                  {filteredMovies.map(renderCard)}
                </div>
              </div>
            </div>
            </Container>
          </header>
      </div>
    );
  };
  export default App;