import React, {useState} from 'react'
const Contador = () => {
    const [contador, setContador] = useState(0)
    const aumentar = () =>{
        console.log('click')
        setContador(contador + 1)
    }
    return (
        <div>
           <h2>Contador</h2>
           <h3>El número va aumentando :{contador}</h3> 
           <button onClick={() => aumentar()}>Aumentar</button>
        </div>
    )
}
export default Contador
