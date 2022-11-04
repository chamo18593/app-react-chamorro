import React, { useEffect, useState } from 'react';

const ItemListContainer = () => {
    const [count, setCount] = useState(0);
    const [texto, setTexto] = useState('Stefi');

    useEffect(() => {
        console.log('Renderizar siempre');
    });

    useEffect(() => {
        console.log('renderizar 1 vez');
    }, []);

    useEffect(() => {
        console.log('renderizar 1 vez y cada vez que cambie el texto');
    }, [texto]);

    const sumar = () => {
        setCount(count + 1);
    };

    const cambiarTexto = () => {
        setTexto('Sol');
    };

    return(
        <div id="container">
            <p onClick={sumar}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet officia dolorem temporibus eaque dignissimos iure deleniti similique totam explicabo odio voluptate repudiandae cum est blanditiis, at quaerat dolore quod!
                Veniam nam cupiditate dolores, rerum similique laudantium magni excepturi ea! Nesciunt impedit tempore alias minus consequatur quaerat unde laudantium omnis necessitatibus voluptatem, quas inventore harum consectetur pariatur vitae praesentium odit! e corporis? Nesciunt accusantium adipisci praesentium quod in dolore saepe voluptatem veritatis temporibus ea voluptatum esse neque, nemo rerum impedit rem porro ducimus numquam sunt inventore quidem? Velit!
            </p>
            <h1>
                {texto}
            </h1>
            <button onClick={cambiarTexto}>Cambiar texto</button>
        </div>
    );

 };

export default ItemListContainer