import React from 'react';
import CardItem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Nuestros Servicios</h1>
            <div className="cards__container">
               <div className="cards__wrapper">
                 
                   <ul className="cards__items">                      
                     <CardItem src="images/VisitasEnfermeria.jpg" text=" Visitas en terreno a pacientes hospitalizados en su domicilio, quienes recibirán un plan de cuidados profesionales y holísticos, por Enfermeras Universitarias. "
                        label='Visitas de Enfermería' path='/services'/>
                   
                   <CardItem src="images/CuracionAvanzada.jpg" text="En SEPPRAD Home Care tenemos un equipo de Enfermeras especialistas en manejo de heridas complejas. Contamos con apósitos bio activos para cada necesidad."
                        label='Curaciones Avanzadas de Heridas' path='/services'/>
                                     
                    </ul>


                    <ul className="cards__items">                       
                    <CardItem src="images/TerapeutaOcupacional.jpg" text=""
                        label='Terapeutas Ocupacionales' path='/services'/>                      
                      
                      <CardItem src="images/admMedicamentos.jpg" text="Servicio de administración de medicamentos endovenosos,subcutáneos e intra musculares, por Enfermeras Universitarias."
                        label='Administración de medicamentos' path='/services' />
                      
                     </ul>
  
                    <ul className="cards__items">
                    <CardItem src="images/VisitasMedicas.jpg" text="Ayudar al enfermo a realizar los ejercicios terapéuticos que les haya recomendado su médico."
                        label='Visitas Médicas' path='/services'/>
                      
                        <CardItem src="images/Hospitalizacion.jpg" text="Contamos con un equipo de Profesionales especialistas en manejo de paciente críticamente enfermo, con lo cual abarcamos todas las necesidades alteradas de nuestros pacientes, desde el acompañamiento de un paciente
                        adulto mayor, hasta las atenciones complejas de un paciente absolutamente dependiente."
                        label='Hospitalización Domiciliaria de baja, mediana y alta complejidad' path='/services'/>                                                
                   </ul>

                   <ul className="cards__items">                    

                   <CardItem src="images/Kinesiologia.jpg" text=""
                        label='Kinesiólogos' path='/services'/>

                        <CardItem src="images/Fonoaudiologo.jpg" text=""
                        label='Fonoaudiólogos' path='/services'/>

                        
                       <CardItem src="images/vacunaInfluenza.jpg" text=""
                        label='Vacunación anti influenza' path='/services'/>  
                    </ul>

                          <ul className="cards__items">
                        <CardItem src="images/Tens.jpg" text="Contamos con Técnicos de Enfermería de Nivel Superior, para el cuidado de pacientes complejos, como también con un pool de Cuidadoras, para
                         el acompañamiento y atenciones básicas de enfermería."
                        label='Servicio de Tens y Cuidadoras a Domicilio' path='/services'/>

                        <CardItem src="images/TomadeMuestra.jpg" text="Servicio enfocado a la toma de muestras de exámenes de sangre, orina, etc. y traslado a laboratorio. Costo de exámenes según plan de salud
                        del paciente. Indispensable contar con orden médica de exámenes."
                        label='Toma de muestra de exámenes de laboratorio' path='/services'/>


                          </ul>
               </div>
            </div>
        </div>
    )
}

export default Cards;
