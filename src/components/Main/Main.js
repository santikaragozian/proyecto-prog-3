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
            pagina: 1,
            datos: '',
            nextURl:'' ,
            filas: true,
        }
    }

    componentDidMount(){
        console.log('Funciona')
        let  url = 'https://api.themoviedb.org/3/movie/popular?api_key=decfa5bfc3151df1ce9acb9ac606d5c4&language=en-US&page=' + this.state.pagina;
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.setState({
                movie: data.results,
                moviesIniciales: data.results,
                isLoaded: true,
                nextUrl:  this.state.pagina +1
            }, ()=>console.log(this.state.movie))
        })
        .catch( error => console.error())
    }


    deleteCard(movieABorrar){
        let moviesQueQuedan = this.state.movie.filter(movie => movie.id !== movieABorrar)

        this.setState({
            movie: moviesQueQuedan,
            moviesIniciales: moviesQueQuedan
        })
    }

    filtrarMovies(textoAFiltrar){
        let moviesFiltradas = this.state.moviesIniciales.filter(movie => movie.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))

        this.setState({
            movie: moviesFiltradas
        })
    }

    addMore(){

        let  url = 'https://api.themoviedb.org/3/movie/popular?api_key=decfa5bfc3151df1ce9acb9ac606d5c4&language=en-US&page=' + this.state.nextUrl;
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.setState({
                movie: this.state.movie.concat(data.results),
                nextUrl:  this.state.nextUrl +1

            })
        })
        .catch( error => console.error())

    }

    cambioColumnas(){
        this.setState({
            filas: false
        })
    }

    cambiarFilas(){
        this.setState({
            filas: true
        })
    }


    render(){
        //console.log(this.state.movie);
        return(
            <React.Fragment>
            <Header filtrarMovies={(textoAFiltrar)=>this.filtrarMovies(textoAFiltrar)} />
            <i className="fas fa-th" onClick={()=>this.cambiarFilas()} ></i>
            <i className="fas fa-align-justify" onClick={()=>this.cambioColumnas()} ></i>
            <div className={this.state.filas ? 'filas' : 'columnas'}>

                {
                    this.state.isLoaded === false ?
                    <p> Loading... </p> :
                    this.state.movie.map((movie, idx) => <Cards key={movie.title + idx} dataMovie={movie} remove={(movieABorrar)=>this.deleteCard(movieABorrar)}/>)
                }
                
            </div>
            <button type="button" onClick={() => this.addMore()}>Cargar m??s tarjetas</button>
            </React.Fragment>
            
        )
    }
}

export default Main
