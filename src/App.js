
import './App.css';
import Movieslist from './components/Movieslist.js';
import  AddMovie from './AddMovie'
import {useState} from 'react'
import MNav from './components/MNav'
import {HashRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Movie from './components/Movie'



function App() {
  const [movies,setMovie] = useState([
    {id:0,title:'jJust another dream',description:'When a fateful injury sparks an ordinary girl to have foretelling dreams', posterURL:'https://i.egycdn.com/pic/RHNhSUNlY21IY21tdk5FbWJtRUVjbW12TkVtYnZjbUVtdm1J.jpg', rating:5,trailer:"https://www.youtube.com/embed/FrCEGox1ZIY"},
    {id:1,title:'In the Heights',description:'A film version of the Broadway musical.', posterURL:'https://i.egycdn.com/pic/RHNhSUNlY21IY21tbXZtYm1wbUVjd2ZOdm1wdmFtcEk.jpg', rating:4,trailer:"https://www.youtube.com/embed/U0CL-ZSuCrQ"},
    {id:2,title:'The Invisible Guest',description:'A successful entrepreneur accused of murder and a witness preparation ', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21idmNtbW1qbWp2Y0VjdmNQdk5FYW1tbXpQ.jpg', rating:4,trailer:'https://www.youtube.com/embed/epCg2RbyF80'},
    {id:3,title:'Hi, Mom',description:'A woman travels back in time to befriend her own mother .', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ZWW1tVGp2TnVjdk5ZSXhsbW12TnY.jpg', rating:2,trailer:"https://www.youtube.com/embed/GjrtxkuFBtk"},
    {id:4,title:'Raya and the Last Dragon',description:'Action et aventures, Animation, Family, Fantastique', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ZRW12dk5tbVRiRWNtSVBtbW1qY3RjYWN3.jpg', rating:1,trailer:"https://www.youtube.com/embed/1VIZ89FEjYI"},
    {id:5,title:'Me Before You',description:'(Me Before You) est un drame romantique britannico-américain réalisé par Thea Sharrock,', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ZcFl2bXZtYkVjUHh2Y21qdndLeG1q.jpg', rating:2,trailer:"https://www.youtube.com/embed/Eh993__rOxA"},
    {id:6,title:'Friends: The Reunion',description:'An unscripted Friends reunion special.', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21IY21UVGJ2TkVFY1BtYnZOdm1qbGNOSQ.jpg', rating:3,trailer:"https://www.youtube.com/embed/HRXVQ77ehRQ"},
    {id:7,title:'Interstellar',description:' est un film de science-fiction ', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ibXBqbXZtYkVjUG1Zdm1tYW1FeG1i.jpg', rating:5,trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"}
])
const [searchmovie, setSearchmovie] = useState("");
 const HandleAdd=(newmovie)=>{setMovie([...movies,newmovie])}
 
 const[rate,setRate]=useState(0)
 const[trailer,setTrailer]=useState("")
  return (
    <div>
      <switch>
      <Route exact path="/">
        <MNav setSearchmovie={setSearchmovie} setRate={setRate}/>
        < AddMovie HandleAdd={HandleAdd}/>  <Movieslist searchmovie={searchmovie}   movies={movies}  rate={rate} /> 
        </Route>
    
    
   <Route path='/Movie/:ID'>
     <Movie movies={movies} />
     
   </Route>
    </switch>
    
   
   
   </div>
  );
}

      


export default App
