  
import React from 'react'
import BarChart from 'react-bar-chart';



const GraficoEdades = ({ edades, promedio }) => {

    const obtenerData = (edades) => {
        let r1 = 0
        let r2 = 0
        let r3 = 0
        let r4 = 0

        let rango

        for (let i = 0; i < edades.length; i++) {
            if (edades[i] >= 0 && edades[i] < 20) {
                r1++
            } else if (edades[i] >= 20 && edades[i] < 40) {
                r2++
            } else if (edades[i] >= 40 && edades[i] < 60) {
                r3++
            } else if (edades[i] >= 60) {
                r4++
            }
        }

        if (r1 > r2 && r1 > r3 && r1 > r4) {
            rango = '[0-20]'
        } else if (r2 > r1 && r2 > r3 && r2 > r4) {
            rango = '[20-40]'
        } else if (r3 > r1 && r3 > r2 && r3 > r4) {
            rango = '[40-60]'
        } else if (r4 > r1 && r4 > r2 && r4 > r3) {
            rango = '[60-más]'
        } 

        const data = [
            [{text: '[0-20]', value: r1}, 
            {text: '[20-40]', value: r2},
            {text: '[40-60]', value: r3}, 
            {text: '[60-más]', value: r4}],
            rango
        ]

        return data
    }

    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    
    return (
        <div>
            <h4>Gráfico de cantidad de clientes</h4>
            <div style={{marginLeft: '25%'}}>
                <BarChart
                    ylabel='Clientes'
                    width={600}
                    height={350}
                    margin={margin}
                    data={obtenerData(edades)[0]}
                />
            </div>
            <h3>Rango de Edades</h3>
            <div className="card2">
                <p>Del gráfico se puede observar que la mayoría de los clientes se encuentran en el rango {obtenerData(edades)[1]} de edades con un promedio de edad cuyo 
                valor es {promedio}</p>
            </div>
        </div>
    )
}

export default GraficoEdades