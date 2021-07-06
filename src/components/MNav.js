import {Navbar,Button,Form,FormControl,Nav} from 'react-bootstrap'
import Rating from 'react-simple-star-rating'


function MNav({searchmovie,setRate,setSearchmovie,rate}) {
  const searching=(newmovie)=>{
    setSearchmovie(newmovie)
  }
  const handleRating = (rate) => {
    setRate(rate)
  
  };
	return(
		<div>
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <div className='App'>
      <Rating
        onClick={handleRating}
   
        size={20}
        // label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' 
      />

    </div>
    <Form inline>
      <FormControl onChange={(e)=>setSearchmovie(e.target.value)}type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

  <br />
  
  
</>
</div>
	
	)
	
}
export default MNav