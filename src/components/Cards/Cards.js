import React, {Component} from 'react'
import './Cards.css'

class Cards extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewMore: false,
            text:'Ver más',
            selected: false,
        }
    }

    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'ver menos'
            })            
        }
    }

    selected(){
        if(this.state.selected){
            this.setState({
                selected: false,
            })
        } else {
            this.setState({
                selected: true,
            })
        }
    }

    render(){
        console.log('me renderice')
        return(
                    <article className='eachCard'>
                        <section className="navigation">
                            <div>
                                <i className="fas fa-chevron-left"></i>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                            <i className="far fa-window-close"></i>
                        </section>
                        <div>
                            <img src="./assets/img/image-default.png" alt="" />
                            <h3>Título/ Nombre</h3>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                            <section class="aditional-info">
                                <p className={`${this.state.viewMore ? 'mostrar' : 'esconder'}`}>info adicional 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                {/* <p className={`${this.state.viewMore ? 'mostrar' : 'esconder'}`}>info adicional 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                <p className={`${this.state.viewMore ? 'mostrar' : 'esconder'}`}>info adicional 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p> */}
                            </section>
                            <p className="verMas" onClick={()=>this.viewMore}>{this.state.text}</p>
                        </div>
                    </article>
                
        )
    }
}

export default Cards