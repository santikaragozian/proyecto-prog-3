import React from 'react'

function Header(){
    return(
        <div>
        <h1>Título/ Nombre de la app</h1>
        <div>
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