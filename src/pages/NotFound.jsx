import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function NotFound(){
    return(
        <main>
            <h1>Essa página não existe.</h1>
            <Link to="/" className="mt-1 mx-auto d-block">
        <Button variant="warning" >Volte para o menu principal</Button>
      </Link> 

        </main>
    )
}

export default NotFound;