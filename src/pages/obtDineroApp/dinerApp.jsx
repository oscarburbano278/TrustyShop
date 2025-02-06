import Inicio from "../../components/Inicio"
import Input from "../../components/Input"
import ComponentButton from "../../components/ComponentButton"
import Label from "../../components/Label"
import '../../styles/dinerApp.css'

const DinerApp = () => {

    return(
        <div className="clsContainerGnralDiner">
                  
        
            <div className="clsContImg">
                <Inicio />
                <h1>Trusty</h1>
            </div>

                <h2>Obtencion de Dinero en App Web</h2>
            <div className="clsContainerDiner">

                <div className="clsRegIdentificacion">
                    <Label 
                    label='Id vendedor'
                    />
                    <input 
                    type='text'
                    placeholder='N identificacion del Vendedor'
                    className='clsInputVC'
                    />

                    <Label 
                    label='Id Comprador'
                    />
                    <Input 
                    type='text'
                    placeholder='N identificacion del Comprador'
                    className='clsInputVC'
                    />
                </div>

                <div className="clsContValor">
                    <Input 
                    type='text'
                    placeholder='valor $$$'
                    className='clsInputVC'/>

                    <ComponentButton 
                    text='OK'
                    />

                </div>
            </div>
        </div>

    )
}

export default DinerApp;