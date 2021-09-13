import React, {Component} from 'react'
import Cards from '../Cards/Cards'
import './style.css'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            tarjetas: [],
            isLoaded: false
        }
    }

    deleteCard(tarjetaABorrar){
        let tarjetasQueQuedan = this.state.tarjetas.filter(tarjeta=>tarjeta.id !== tarjetaABorrar)
        this.setState({
            tarjetas: tarjetasQueQuedan
        })
    }

    render(){
        return(
            <React.Fragment>
            <button type="button">Cargar más tarjetas</button>
            <div className="card-container">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
            </React.Fragment>
        )
    }
}

export default Main
