
import {Card,Button } from 'react-bootstrap'
import {Moviecard} from './Moviescard'
import {useHistory, useParams} from "react-router-dom";



function Movie({movies,title,trailer,description}) {
  const history = useHistory()
  const {ID}=useParams()
  const T= movies.find((mov,i)=>mov.id===Number(ID))

    return(

   <div>
<Card style={{ width: '18rem' }}>
<iframe width="560" height="315" src={T.trailer}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <Card.Body>
    <Card.Title>{T.title}</Card.Title>
    <Card.Text>
      {T.description}
    </Card.Text>
   
   <button  className="button" onClick={() => history.goBack()} variant="primary" >Go Back</button>
  </Card.Body>
</Card>
</div>
    )
}
export default Movie