import {useState} from 'react'

const Contador = ({stock}) => {
  
    const [cantidad, setCantidad] = useState(0);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
        
    };

    const reset = () => {
        setCantidad(0);
    };
  
    return (
        <div
            style={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '20vh',
            }}
        >

            <p>{cantidad}</p>
            <button onClick={sumar}>+</button>
            <button onClick={reset}>Quitar del carrito</button>
        </div>
    )
}

export default Contador;