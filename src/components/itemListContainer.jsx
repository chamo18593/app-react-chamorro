import React, { useEffect, useState } from 'react';
import { products } from '../mock/products';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () => {
             return new Promise((res, rej) => {
                setTimeout(() =>{
                    res (products);
                }, 2000)
                
            });
        }
    
        getProducts ()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log('rej', error);
            });
    }, []);

    return(
        <div id="container">
            {
                items.map ((producto) => {
                    return (
                        <div>
                            <img src={producto.img} width='200px' alt={producto.title}/>
                            <article>
                                <h2>{producto.title}</h2>
                                <h3>${producto.price}.-</h3>
                            </article>
                            
                            </div>
                    )
                })
            }
         </div>
    );

 };

export default ItemListContainer