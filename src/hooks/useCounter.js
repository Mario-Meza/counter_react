import { useState } from "react"

/* Hook personalizado que recibe dos props, valorInicial y setMessage */
export const useCounter = (initial_value = 0, setMessage) => {

    const [ counter, setCounter ] = useState(initial_value)

    // Funciones que incrementan, decrementan y resetean el contador
    const increment = (valor = 1) => {
        // Si el contador es igual a 10, se muestra un mensaje, de lo contrario se incrementa el valor
        counter === 10 ? setMessage(`El valor no puede ser mayor a ${counter}`) : setCounter(counter + valor);
    }
    const reset = () => {
        setCounter(initial_value);
    }
    const decrement = (valor = 1) => {
        // Si el contador es igual a 0, se muestra un mensaje, de lo contrario se decrementa el valor
        counter === 0 ? setMessage(`El valor no puede ser menor a ${counter}`) : setCounter(counter - valor)
    }

    // Retornamos el valor del contador y las funciones
    return {
        counter,
        increment,
        decrement,
        reset
    }
}