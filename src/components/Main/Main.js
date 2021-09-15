import React, {Component} from 'react'
import Cards from '../Cards/Cards'
import Header from '../Header/Header'
import './style.css'

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            movie: [],
            moviesIniciales: [],
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
                movie: data.results,
                moviesIniciales: data.results,
                isLoaded: true,
                //nextUrl:  data.info.next
            }, ()=>console.log(this.state.movie))
        })
        .catch( error => console.error())
    }


    

    deleteCard(movieABorrar){
        let moviesQueQuedan = this.state.movie.filter(movie => movie.id !== movieABorrar)

        this.setState({
            movie: moviesQueQuedan
        })
    }

    filtrarMovies(textoAFiltrar){
        let moviesFiltradas = this.state.moviesIniciales.filter(movie => movie.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))

        this.setState({
            movie: moviesFiltradas
        })
    }

    render(){
        //console.log(this.state.movie);
        return(
            <React.Fragment>
            <Header filtrarMovies={(textoAFiltrar)=>this.filtrarMovies(textoAFiltrar)} />
            <button type="button">Cargar más tarjetas</button>
            <div className="card-container">

                {
                    this.state.isLoaded === false ?
                    <p> Loading... </p> :
                    this.state.movie.map((movie, idx) => <Cards key={movie.name + idx} dataMovie={movie} remove={(movieABorrar)=>this.deleteCard(movieABorrar)}/>)
                }
                
            </div>
            </React.Fragment>
            
        )
    }
}

export default Main
