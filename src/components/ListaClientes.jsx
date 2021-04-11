import React, { useState } from 'react'
import DatosCliente from './DatosCliente'

const ListaClientes = ({cliente, eliminarCliente}) => {

    const [ mostrarDatos, setMostrarDatos ] = useState(false)

    const verMasDatosCliente = () => {
        setMostrarDatos(true)
    }

    return(
        <div className="cliente">
            <p>Nombres: <span>{cliente.nombres}</span></p>
            <p>Apellidos: <span>{cliente.apellidos}</span></p>
            <p>Edad: <span>{cliente.edad}</span></p>

            <button
                className="button editar"
                onClick={verMasDatosCliente}
            >
                Ver más
            </button>
            <button
                onClick={eliminarCliente}
                className="button eliminar"
            >
                Eliminar &times;
            </button>
            <DatosCliente
                mostrarCliente={mostrarDatos}
                setCliente={setMostrarDatos}
                datos={cliente}
                ancho= '500px' altura='400px'
            />
        </div>
    )
}

export default ListaClientes