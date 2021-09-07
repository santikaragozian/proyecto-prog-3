import React from 'react'
import './Cards.css'

function Cards(){
    return(
                <article className='eachCard'>
                    <section class="navigation">
                        <div>
                            <i class="fas fa-chevron-left"></i>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <i class="far fa-window-close"></i>
                    </section>
                    <div>
                        <img src="./img/image-default.png" alt="" />
                        <h3>Título/ Nombre</h3>
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                        <section class="aditional-info">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        </section>
                        <p>Ver más</p>
                    </div>
                </article>
            
    )
}

export default Cards