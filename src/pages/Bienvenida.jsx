import React from 'react'
import { useHistory } from 'react-router'
import imgOechsle from '../img/oechsle.png'

const Bienvenida = () => {
    let history = useHistory()

    const nextPage = () => {
        history.push('/clientes')
    }

    return (
        <div className="contenedor">
            <img src={imgOechsle} alt="oechsle" className="logo" />
            <br/>
            <div>
                <p className="titulo">
                    Bienvenido al registro de clientes
                </p>
                <br/>
                <div className="contenedor2">
                    <div className="botonesDiv">
                        <button 
                            onClick={nextPage} 
                            className="botones"
                        >
                            <span className="nombreBoton">Entrar</span>
                            <span className="espacioBoton"></span>
                        </button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Bienvenida