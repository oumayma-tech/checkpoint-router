import { render } from "@testing-library/react"
import Moviescard from '../components/Moviescard'
import {CardGroup} from 'react-bootstrap'
import Movie from '../components/Movie'



function Movieslist({movies,searchmovie,rate}){

    return(
        <CardGroup className="card">

        {movies.filter(el=> el.title.toUpperCase().includes(searchmovie.toUpperCase()) && rate<=el.rating).map((el,i)=><Moviescard el={el} />
        )}
        
       </CardGroup>
    )

}
export default Movieslist