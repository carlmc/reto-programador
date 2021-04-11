import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, useLocation, withRouter } from 'react-router-dom'

import Bienvenida from './pages/Bienvenida'
import Clientes from './pages/Clientes'
import AnalisisClientes from './pages/AnalisisClientes'

function _ScrollToTop(props) {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return props.children
}

const ScrollToTop = withRouter(_ScrollToTop)

const Router = () => {
    const [ rutas, setRutas ] = useState(null)

    useEffect(() => {
        setRutas(
            <BrowserRouter>
                <ScrollToTop>
                    <Route path='/' exact>
                        <Bienvenida />
                    </Route>
                    <Route path='/clientes' exact>
                        <Clientes />
                    </Route>
                    <Route path='/analisisClientes' exact>
                        <AnalisisClientes />
                    </Route>
                </ScrollToTop>
            </BrowserRouter>
        )
    }, [])

    return (
        <div>
            {rutas}
        </div>
    )
}

export default Router