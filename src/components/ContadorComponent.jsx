import { useCounter } from "../hooks/useCounter"
import { useState } from "react";

export const ContadorComponent = () => {
    const [ message, setMessage ] = useState("")

    /* Desestructuramos las funciones y el valor del counter del hook useCounter
    *  y le pasamos el valor 0 y setMessage como argumentos
    */
    const { counter, increment, reset, decrement } = useCounter(0, setMessage)

    return(
        <>
            {/* Mostramos el valor actual del contador */}
            <div>Contador component: {counter}</div>
            {/*Llama a la funcion incrementar pasando 1 como argumento */}
            <button className="btn btn-primary" onClick={ () => increment(1)}>+1</button>
            {/*Llama a la funcion resetear*/}
            <button className="btn btn-danger" onClick={ () => reset()}>Reset</button>
            {/*Llama a la funcion decrementar pasando 1 como argumento */}
            <button className="btn btn-primary" onClick={ () => decrement(1)}>-1</button>
            {/* Muestra el estado 'message' */}
            {message && <div>{message}</div>}
        </>
    )
}