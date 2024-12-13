import Inicio from '../../components/Inicio';
import { Link } from 'react-router-dom';
import '../../styles/estilosHome.css';


const Home = () => {
    return(
        <div className="clsContainerHome">
            
            <Link to="/IngresoDatos">
            <Inicio />
            </Link>

            <h1>Trusty</h1>

            <p>Tu Dinero Seguro</p>           
        </div>
    )
}

export default Home;