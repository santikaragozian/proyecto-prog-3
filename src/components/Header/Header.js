import React from 'react'
import './Header.css'

function Header(){
    return(
        <div className='headerFlex'>
        <h1>Cuevana 7</h1>
        <div className='headerDerecha'>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search" /> 
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>
        </div>
        
    )
}

export default Header