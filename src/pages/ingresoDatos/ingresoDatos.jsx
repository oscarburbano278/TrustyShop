import '../../styles/estilosIngresoDatos.css';
import Inicio from '../../components/Inicio';
import Input from '../../components/Input';
import imgPse from '../../assets/imgPse.png';
import ComponentButton from '../../components/ComponentButton';


const IngresoDatos = () => {
    return(
        <div className="clsContainerIngresoDatos">

            <div className="clsContLogo">
            <Inicio />
            </div>

            <div className="clsContDOS">

                <div className="clsContDatosComprador">
                    <h2>Ingrese los datos de Comprador</h2>

                    <Input
                    type={Text}
                    placeholder='Nombre'
                    />

                    <Input
                    type={Text}
                    placeholder='Identificacion'
                    />

                    <Input
                    type={Text}
                    placeholder='Telefono'
                    />

                <div className="clsContaMonto">
                    <Input
                    type={Text}
                    placeholder='monto $$$'
                    className='clsMonto'
                    />
                </div>
                </div>

                <div className="clsContDatosVendedor">

                    <h2>Ingrese los datos del Vendedor</h2>

                    <Input
                    type={Text}
                    placeholder='Nombre'
                    />

                    <Input
                    type={Text}
                    placeholder='Identificacion'
                    />

                    <Input
                    type={Text}
                    placeholder='Telefono'
                    />
                <div className="clsContaImg">
                    <img 
                    src={imgPse}
                    alt="imagen pse"
                    className="clsImgPSE"
                    />
                </div>

                </div>
            </div>

            <div className="clsContBoton">
                <ComponentButton 
                text='enviar'
                />             
                        
            </div>

        </div>
    );
}

export default IngresoDatos;