import {useState} from 'react'

import React from 'react'

const Contador = ({stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad (cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1);
        }
    };

    const reset = () => {
        setCantidad (1);
    };

    return (
        <div
            style={{
                
                height: '40px',
                width:'182px',

            }}
        >
            <p className='pinkStyle'>{cantidad}</p>
            <button className='pinkStyle' disable={cantidad === stock} onClick={sumar}>
                +
            </button>
            
            <button  className='pinkStyle' disable={cantidad === 1} onClick={restar}>
                -
            </button>
            <button className='pinkStyle' onClick={reset}>Borrar</button>
            <button className='pinkStyle' onClick={onAdd}>Agregar</button>

        </div>
    )
  
}

export default Contador;