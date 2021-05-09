import React from 'react';
import './Contrata.css';


function Contrata() {
    return (


       
    
           <section className="wrapper-home contrata">
               <div className="center-align-container">
                   <div className="text-center">
                       <h2>Ventajas de la Hospitalización Domiciliaria</h2>
                   </div>
             </div>

             <div className="wrapper-low">

                <div className="col_4">
                   <div className="img-wrap">
                       <picture className="responsive-image">
                      <img src="images/sepprad.jpg" />
                      </picture>
                   </div>
                   <p className="wrap-text">
                   Disminuye los riesgos asociados a la ateción en Hospitales y Clínicas (infecciones, caidas, lesiones
                   por presión, errores de medicamentos) 
                   </p>
                </div>

                <div className="col_4">
                   <div className="img-wrap">
                       <picture className="responsive-image">
                      <img  src="images/sepprad.jpg" />
                      </picture>
                   </div>
                   <p className="wrap-text">
                   Disminuye episodios por depresión o alteraciones del ánimo del paciente, asociados a la sensación
                    de sentir soledad en un Hospital o Clínica.
                   </p>
                </div>


                <div className="col_4">
                   <div className="img-wrap">
                       <picture className="responsive-image">
                      <img  src="images/sepprad.jpg" />
                      </picture>
                   </div>
                   <p className="wrap-text">
                   Mejora la calidad en la relación paciente-familia y el equipo de salud, al recibir atención
                   personalizada.
                   </p>
                </div>

                

             </div>
            
            </section>


      
        
    )
}

export default Contrata
