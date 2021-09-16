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
            //nextURl:''
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
            movie: moviesQueQuedan
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

    this.setState({
        movie: moviesFiltradas
    })

    filtrarMovies(textoAFiltrar){
        let moviesFiltradas = this.state.moviesIniciales.filter(movie => movie.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
   



    render(){
        //console.log(this.state.movie);
        return(
            <React.Fragment>
            <Header filtrarMovies={(textoAFiltrar)=>this.filtrarMovies(textoAFiltrar)} />
            <div className="card-container">

                {
                    this.state.isLoaded === false ?
                    <p> Loading... </p> :
                    this.state.movie.map((movie, idx) => <Cards key={movie.name + idx} dataMovie={movie} remove={(movieABorrar)=>this.deleteCard(movieABorrar)}/>)
                }
                
            </div>
            <button type="button" onClick={() => this.addMore()}>Cargar más tarjetas</button>
            </React.Fragment>
            
        )
    }
}

export default Main
