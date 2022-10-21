import React from 'react'
import styled from 'styled-components'

const Cards = () => {
    return(
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-title'>Donas</h4>
                <p className='card-text text-secondary'>Donas glaseadas de chocolate</p>
            </div>
            <div className='card-body'>
                <h4 className='card-title'>Donas Rosas</h4>
                <p className='card-text text-secondary'>Donas glaseadas de chocolate blanco</p>
            </div>
            <div className='card-body'>
                <h4 className='card-title'>Waffles</h4>
                <p className='card-text text-secondary'>Waffles con dulce de leche</p>
            </div>
        </div>
    )
}

export default Cards