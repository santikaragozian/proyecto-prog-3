import React, {Component} from 'react'
import Cards from '../Cards/Cards'
import Header from '../Header/Header'
import './style.css'

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            movie: [],
            isLoaded: false,
            datos: ''
        }
    }

    componentDidMount(){
        console.log('Funciona')
        let  url = 'https://api.themoviedb.org/3/movie/popular?api_key=decfa5bfc3151df1ce9acb9ac606d5c4&language=en-US&page=1'
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.setState({
                movie: [1,2,3],
                isLoaded: true,
                nextUrl:  data.info.next
            }, ()=>console.log(this.state.movie))
        })
        .catch( error => console.error())
    }


    

    deleteCard(tarjetaABorrar){
        let tarjetasQueQuedan = this.state.tarjetas.filter(tarjeta=>tarjeta.id !== tarjetaABorrar)
        this.setState({
            tarjetas: tarjetasQueQuedan
        })
    }

    render(){
        console.log(this.state.movie);
        return(
            <React.Fragment>
            <Header />
            <button type="button">Cargar más tarjetas</button>
            <div className="card-container">

                {
                    this.state.isLoaded === false ?
                    <p> Loading... </p> :
                    this.state.movie.map((movie, idx) => <p> sdfsdfsf</p>)
                }
                
            </div>
            </React.Fragment>
            
        )
    }
}

export default Main
