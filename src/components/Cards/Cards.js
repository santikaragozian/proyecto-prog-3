import React from 'react'
import './Cards.css'

function Cards(){
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
                            <p>info adicional 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            <p>info adicional 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            <p>info adicional 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        </section>
                        <p>Ver más</p>
                    </div>
                </article>
            
    )
}

export default Cards