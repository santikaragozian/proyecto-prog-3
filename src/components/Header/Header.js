import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            valor: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => this.props.filtrarMovies(this.state.valor) 
        )
    }

    render(){
        return(
            <div className='headerFlex'>
            <h1>Cuevana 7</h1>
            <div className='headerDerecha'>
                <p>Ordenar ASC/ DESC</p>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="" onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder="Search" /> 
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
            </div>
        )
    }    
    
}

export default Header