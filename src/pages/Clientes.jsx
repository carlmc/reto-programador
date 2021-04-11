import React, { Fragment, useEffect, useState } from 'react'
import FormularioCliente from '../components/FormularioCliente'
import ListaClientes from '../components/ListaClientes'
import { toast } from 'react-toastify'

import { db } from '../firebase'
import { useHistory } from 'react-router'

const Clientes = () => {
    const history = useHistory()
    const clientesIniciales = []

    const [ clientes, setClientes ] = useState(clientesIniciales)

    useEffect(() => {
        getClientes()
    }, [])

    const agregarClientes = async (clienteObject) => {
        await db.collection('clientes').doc().set(clienteObject)
        toast('Nuevo Cliente agregado', {
            type: 'success',
            autoClose: 2000
        })
    }

    const borrarCliente = async (id) => {
        if (window.confirm('¿Está seguro de eliminar el cliente?')) {
            await db.collection('clientes').doc(id).delete()
            toast('Cliente eliminado', {
                type: 'error',
                autoClose: 2000
            })
        }
    }

    const getClientes = async () => {
        db.collection('clientes').onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setClientes(docs)
        })
    }

    const nextPage = () => {
        history.push('analisisClientes')
    }

    const titulo = clientes.length === 0 ? 'No hay clientes' : 'Lista de clientes'

    return (
        <Fragment>
            <h1>Administrador de Clientes</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <FormularioCliente agregarClientes={agregarClientes} />
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        <div style={clientes.length > 4 ? {overflowY: 'scroll', height: '710px'} : {}}>
                            {clientes.map(cliente => (
                                <ListaClientes
                                    key={cliente.id}
                                    cliente={cliente}
                                    eliminarCliente={() => borrarCliente(cliente.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <button className="footer" onClick={nextPage}>Siguiente</button>
            </div>
        </Fragment>
    )
}

export default Clientes