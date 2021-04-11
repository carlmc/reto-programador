import React from "react"
import * as Funciones from '../utils/funciones'

const DatosCliente = ({ mostrarCliente, setCliente, datos, ancho, altura}) => {
    
    function cerrarModal(data) {
        setCliente(data)
    }

    const tipoDocumento = tipo => {
        if (tipo === '1') {
            return 'Documento Nacional de Identidad (DNI)'
        } else if (tipo === '2') {
            return 'Registro Único de Contribuyentes (RUC)'
        } else if (tipo === '3') {
            return 'Carnet de Extranjería'
        } else {
            return 'No tiene documento'
        }
    }
    
    return (
        <div className={mostrarCliente ? "general" : "ocultarGeneral"}>
            <div className="caja" style={{height: altura, width: ancho}}>
                <h3>Datos del Cliente</h3>
                <hr className="linea"/>
                <div style={{alignContent: 'start'}}>
                    <p>Nombres: <span>{datos.nombres}</span></p>
                    <p>Apellidos: <span>{datos.apellidos}</span></p>
                    <p>Tipo de documento: <span>{tipoDocumento(datos.tipoDocumento)}</span></p>
                    <p>Número de documento: <span>{datos.numeroDocumento}</span></p>
                    <p>Sexo: <span>{datos.sexo === '0' ? 'Masculino' : 'Femenino'}</span></p>
                    <p>Fecha de nacimiento: <span>{datos.fecha}</span></p>
                    <p>Fecha estimada de muerte: <span>{Funciones.generarFechaMuerte()}</span></p>
                    <p>Información adicional: <span>{datos.descripcion}</span></p>
                </div>
                <br></br>
                <button
                    className="button-primary"
                    onClick={() => cerrarModal(false)}
                >
                    Aceptar
                </button>
            </div>
        </div>
    )
}

export default DatosCliente