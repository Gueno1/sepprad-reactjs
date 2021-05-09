import React from 'react';
import './Content.css';


function Content() {
    return (
        <div className="content"> 
          <div className="container">
              <div className="row">
                  <div className="col-sm-8">
                      <h1 className="titulo">Plan Inmediato</h1>
                      <h2 className="titulo">El plan inmediato es un servicio de  
                        asistencia y cuidado en situaciones de urgencia de  salud.
                     </h2>
                     <p className="texto">
                       Se accede de manera inmediata y sin necesidad de estar afiliado/a 
                       previamente. Cuentas con todas las modalidades y planes de
                       servicio que necesites por el tiempo que requieras. Contar con el 
                       respaldo de una empresa con experiencia al servicio de la salud.
                       Brinda a las familias la tranquilidad que necesitan en los momentos
                       de mayor vulnerabilidad.
                     </p>
                  </div>
              </div>
          </div> 

                 
        </div>
    )
}

export default Content;
