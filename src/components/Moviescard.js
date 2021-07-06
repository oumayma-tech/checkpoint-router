import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';



 function Moviescard(props){

     return(
  <div className="movie">
  <Card>
    <Card.Img variant="top" src={props.el.posterURL} className="img" alt="ph"/>
    <Card.Body>
      
      <Card.Title>{props.el.title}</Card.Title>
      <Card.Text>
        {props.el.description}
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <ReactStars
    count={5}
    value={props.el.rating}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Footer>
    <div>
    <Link to={'/movie/'+props.el.id}>Movie details </Link> {' '}
    </div>
  </Card>
  
  </div>

     )
 }
 export default Moviescard