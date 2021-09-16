import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            valor: '',
            orientacionColumnas: false,
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

    orientacionColumnas(){
        if(this.state.orientacionColumnas){
            this.setState({
                orientacionColumnas: false, 
                icon: <i className="fas fa-th"></i>
            })
        } else {
            this.setState({
                orientacionColumnas: true,
                icon: <i className="fas fa-align-justify"></i>
            })
        }
    }

    render(){
        return(
            <div className='headerFlex'>
            <h1>Título/ Nombre de la app</h1>
            <div className='headerDerecha'>
                <p>Ordenar ASC/ DESC</p>
                <i className="fas fa-th" onClick={()=>this.orientacionColumnas()} ></i>
                <i className="fas fa-align-justify" onClick={()=>this.orientacionColumnas()} ></i>
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