import React, { Fragment, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import GraficoEdades from '../components/GraficoEdades'
import * as Funciones from '../utils/funciones'

import { db } from '../firebase'

const AnalisisClientes = () => {
    const history = useHistory()
    const clientesIniciales = []

    const [ clientes, setClientes ] = useState(clientesIniciales)

    useEffect(() => {
        getClientes()
    }, [])

    const getClientes = async () => {
        db.collection('clientes').onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setClientes(docs)
        })
    }

    const obtenerEdades = (clientes) => {
        let arrayEdades = []
        if (clientes.length === 0) {
            arrayEdades = []
        } else {
            clientes.forEach(cliente => {
                arrayEdades.push(cliente.edad)
            })
        }
        
        return arrayEdades
    }

    const backPage = () => {
        history.push('/clientes')
    }

    return (
        <Fragment>
            <div style={{display: 'block'}}>
                <h1>Proyección y análisis de clientes</h1>
                <div className="fila">
                    <h4 style={{marginLeft: '-18%'}}>DATOS ESTADÍSTICOS</h4>
                    <div className="columna">
                        <div className="card">
                            <h3>N° de Clientes</h3>
                            <p>{clientes.length}</p>
                        </div>
                    </div>
                    <div className="columna">
                        <div className="card">
                            <h3>Promedio de edad</h3>
                            <p>{Funciones.promedioEdades(clientes).toFixed(3)}</p>
                        </div>
                    </div>
                    <div className="columna">
                        <div className="card">
                            <h3>Desviación estándar</h3>
                            <p>{Funciones.desviacionEstandar(clientes)}</p>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <GraficoEdades edades={obtenerEdades(clientes)} promedio={Funciones.promedioEdades(clientes).toFixed(3)} />
                <div className="row">
                    <button className="footer2" onClick={backPage} >Anterior</button>
                </div>
            </div>
        </Fragment>
    )
}

export default AnalisisClientes