import React from 'react'
import './Header.css'

function Header(){
    return(
        <div className='headerFlex'>
        <h1>Título/ Nombre de la app</h1>
        <div className='headerDerecha'>
            <p>Ordenar ASC/ DESC</p>
            <i class="fas fa-th"></i>
            <i class="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search" /> 
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
        </div>
        
    )
}

export default Header