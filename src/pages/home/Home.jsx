import Inicio from '../../components/Inicio';
import Label from '../../components/Label';
import '../../styles/estilosHome.css';


const Home = () => {
    return(
        <div className="clsContainerHome">
            
            <Inicio />

            <h1>Trusty</h1>

            <p>Tu Dinero Seguro</p>           
        </div>
    )
}

export default Home;