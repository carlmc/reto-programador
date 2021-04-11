import React, { Fragment, useState } from 'react'
import * as Funciones from '../utils/funciones'

const FormularioCliente = ({agregarClientes}) => {

    const initialState = {
        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        numeroDocumento: '',
        fecha: '',
        edad: '',
        sexo: '',
        descripcion: ''
    }

    const [ cliente, setCliente ] = useState(initialState)
    const [ error, setError ] = useState(false)

    const { nombres, apellidos, tipoDocumento, numeroDocumento, fecha, edad, sexo, descripcion } = cliente
    const fechaHoy = new Date()

    const actualizarCliente = e => {
        const { name, value } = e.target
        if (name === 'fecha') {
            let fechaSelect = new Date(Funciones.formatearTextoAFecha(value))
            setCliente({
                ...cliente,
                [name]: value,
                edad: Funciones.obtenerEdadExacta(fechaSelect)
            })
        } else if (name === 'sexo') {
            setCliente({
                ...cliente,
                [name]: parseInt(value)
            })
        } else {
            setCliente({
                ...cliente,
                [name]: value
            })
        }
    }

    const clienteSubmit = (e) => {
        e.preventDefault()

        if (nombres.trim() === '' || apellidos.trim() === '' || tipoDocumento.trim() === ''  ||
            numeroDocumento.trim() === '' || fecha.trim() === '' || sexo === '' || descripcion.trim() === '') {
                setError(true)
                return;
        } else {
            setError(false)
        }
        agregarClientes(cliente)
        setCliente({...initialState})
    }
    
    return (
        <Fragment>
            <h2>Registrar Cliente</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={clienteSubmit}>
                <label>Nombres</label>
                <input 
                    type="text"
                    className="u-full-width"
                    name="nombres"
                    onChange={actualizarCliente}
                    value={nombres}
                />

                <label>Apellidos</label>
                <input 
                    type="text"
                    className="u-full-width"
                    name="apellidos"
                    onChange={actualizarCliente}
                    value={apellidos}
                />
                <label>Tipo de Documento</label>
                <select 
                    className="u-full-width"
                    name="tipoDocumento"
                    value={tipoDocumento}
                    onChange={actualizarCliente}
                >
                    <option value={0}>Seleccione</option>
                    <option value={1}>DNI</option>
                    <option value={2}>RUC</option>
                    <option value={3}>Carnet de Extranjería</option>
                </select>

                <label>Número de documento</label>
                <input 
                    type="text"
                    className="u-full-width"
                    name="numeroDocumento"
                    onChange={actualizarCliente}
                    value={numeroDocumento}
                    maxLength={Funciones.tamanioDocumento(tipoDocumento)}
                />

                <label>Sexo</label>
                <input 
                    type="radio" 
                    name="sexo" 
                    value={0}
                    onChange={actualizarCliente}
                    selected={sexo === 0}
                    checked={sexo === 0}
                /> <span style={{color: 'white', fontWeight: 'bold'}}>Masculino</span>
                <input 
                    style={{marginLeft: '4%'}} 
                    type="radio" 
                    name="sexo" 
                    value={1}
                    selected={sexo === 1}
                    checked={sexo === 1}
                    onChange={actualizarCliente}
                /> <span style={{color: 'white', fontWeight: 'bold'}}>Femenino</span>

                <label>Fecha de Nacimiento</label>
                <input 
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange={actualizarCliente}
                    value={fecha}
                    max={Funciones.formatearFechaTextoFormat(fechaHoy, 'hoy')}
                />
                <label>Edad</label>
                <input
                    type="text"
                    name="edad"
                    value={edad}
                    disabled
                />
                
                <label>Información adicional</label>
                <textarea
                    className="u-full-width"
                    name="descripcion"
                    onChange={actualizarCliente}
                    value={descripcion}
                ></textarea>     

                <button
                    className="u-full-width button-primary"
                >
                    Agregar Cliente
                </button>           
            </form>
        </Fragment>
    )
}

export default FormularioCliente