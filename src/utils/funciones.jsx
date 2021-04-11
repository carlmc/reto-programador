export const formatearFechaTextoFormat = (fecha, hoy) => {
    let d = new Date(fecha)
    let month = '' + (d.getMonth() + 1)
    let day
    let year = d.getFullYear()

    if (hoy === 'hoy') {
        day = '' + (d.getDate())

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    } else {
        day = '' + (d.getDate() + 1)

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }
}

export const obtenerEdadExacta = (fecha) => {
    let nacimiento = fecha
    let hoy = new Date()
    let edad = hoy.getFullYear()
    let año = nacimiento.getFullYear()
    let edadActual = edad - año
    let mesesFechaActual = hoy.getMonth() + 1
    let mesesNacimiento = nacimiento.getMonth() + 1
    let diasActual = hoy.getDate()
    let obtenerFechaSeparadaPorDia = nacimiento.getDate()
    let cumpleaños = mesesNacimiento < mesesFechaActual ? 0 : 
        mesesNacimiento === mesesFechaActual && diasActual >= obtenerFechaSeparadaPorDia ? 0 : -1 
    let edadExacta = edadActual + cumpleaños

    return edadExacta
}

export const formatearTextoAFecha = (fechaString) => {
    let fechaSalida = null
    let dateParts = null
    
    dateParts = fechaString.substr(0, 10).split("-")
    fechaSalida = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    
    return fechaSalida
}

export const tamanioDocumento = (tipoDoc) => {
    if (tipoDoc === '1') {
        return '8'
    } else if (tipoDoc === '2') {
        return '11'
    } else if (tipoDoc === '3') {
        return '12'
    } else {
        return '0'
    }
}

export const generarFechaMuerte = () => {
    let fecIni = new Date()
    let fecFin = new Date('2071-12-31')

    let final = new Date(fecIni.getTime() + Math.random() * (fecFin.getTime() - fecIni.getTime()))
    
    return formatearFechaTextoFormat(final)
} 

export const promedioEdades = (clientes) => {
    if (clientes.length === 0) {
        return 0
    } else {
        let suma = 0
        clientes.forEach(cliente => {
            suma = (suma + cliente.edad)
        })
        
        return suma / clientes.length
    }
}

export const desviacionEstandar = (clientes) => {
    if (clientes.length === 0) {
        return 0
    } else {
        let prom = promedioEdades(clientes)
        
        let difCuadrado = clientes.map(cliente => {
            let dif = cliente.edad - prom
            let difCua = dif * dif
            return difCua
        })

        let promCuadradoDif = (difCuadrado.reduce(function (sum, value) {
            return sum + value
        })) / clientes.length
        
        return Math.sqrt(promCuadradoDif).toFixed(3)
    }
}