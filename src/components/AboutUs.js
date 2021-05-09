import React from 'react';
import './AboutUs.css';


function Aboutus() {
    return (

        <div className="container">
         <h3 className="title">Nuestra Empresa</h3>
            <p className="sub-title"><em>Sobre Nosotros</em></p>
                 <p className="description">Somos una organización que brinda Hospitalización Domiciliaria de manera integral, abarcando todo el ciclo vital de nuestros pacientes. 
                    Contamos con Profesionales especialistas en Cuidados Intensivos Pediátrico y Adulto, con una vasta experiencia y trayectoria. <br></br><br></br>
                    Nos enfocamos en la atención de enfermería holística e integral, interviniendo en las necesidades alteradas de nuestros pacientes, con el fin de recuperar su condición de salud de manera óptima.
                    <br></br><br></br>
                    Disponemos de personal Técnico de enfermería de nivel Superior altamente calificado para satisfacer las necesidades de salud de nuestros pacientes.
                </p>

        <div className="row">
        <div className="center">
            <img className="image" src="images/sepprad.jpg" />
        </div>
        </div>

     <div className="sub-description">
         <p className="description2">
                 <h3 className="description-title">Nuestra Misión</h3>   <br></br>
                    Otorgar cuidados de Hospitalización Domiciliaria profesional e integral, mejorando sustentablemente la calidad de vida de nuestros pacientes y sus familiares.  
                    <br></br> <br></br>
                     <h3 className="description-title">Nuestra Visión</h3> <br></br>
                        Ser una Clínica de Hospitalización Domiciliaria reconocida por la atención de pacientes de manera cercana, profesional, con altos estándares de calidad en la atención que brindamos, con un equipo médico y de enfermería dedicado absolutamente a cubrir las necesidades alteradas de nuestros pacientes.
         </p>

            <br></br> <br></br>
         <p className="description2">
            <h3 className="description-title">Ventajas de la Hospitalización Domiciliaria </h3> <br></br>
                Disminuye los riesgos asociados a la ateción en Hospitales y Clínicas. (infecciones, caidas, lesiones por presión, errores de medicamentos).
                Mejora la calidad en la relación paciente-familia y el equipo de salud, al recibir atención personalizada.
                Facilita la recuperación del paciente, al estar inserto en su núcleo familiar.
                Disminuye episodios por depresión o alteraciones del ánimo del paciente, asociados a la sensación de sentir soledad en un Hospital o Clínica.
         </p>

         <br></br><br></br>

     </div>
        </div>   
    )
}

export default Aboutus;
