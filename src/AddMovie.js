import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Example({HandleAdd}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[title,settitle]=useState('')
    const [description,setdescription] = useState('')
    const [posterURL, setposterURL] = useState('')
    const [rating, setrating] = useState('')
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movies</Modal.Title>
          </Modal.Header>
          <Modal.Body > 

            <div className="upp">
    <label>Title:</label><input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/>
 <label>Description:</label><input type="text" value={description} onChange={(e)=>setdescription(e.target.value)}/>
 <label>PosterUrl:</label><input type="text" value={posterURL} onChange={(e)=>setposterURL(e.target.value)}/>
<label>Rating:</label><input type="text" value={rating} onChange={(e)=>setrating(e.target.value)}/>
     </div>
     </Modal.Body > 
     
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>HandleAdd({
                title:title ,description:description,posterURL:posterURL,rating:rating
            })}>
              submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Example