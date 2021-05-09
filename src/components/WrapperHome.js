import React from 'react';
import './WrapperHome.css';


function WrapperHome() {
    return (
      <section className="wrapper-home2">
        <div className="center-align-container2">
            <div className="text-center2">
              <h2 className="title-center">Make your online store a money-making machine</h2>
            </div>
        </div>

        <div className="vertical-align-container">
           <div className="col-6">
              <div className="wrapper-home-b">
                 <h3 className="title-wrapper">Integrate instantly</h3>
                 <p className="vertical-text">
                 AdRoll connects seamlessly with your store to analyze shopper behavior, recommend popular products, and track revenue growth.
                 
                 </p>
              </div>

              <div className="wrapper-home-b">
                 <h3 className="title-wrapper">Integrate instantly</h3>
                 <p className="vertical-text">
                 AdRoll connects seamlessly with your store to analyze shopper behavior, recommend popular products, and track revenue growth.
                 </p>
              </div>

              <div className="wrapper-home-b">
                 <h3 className="title-wrapper">Integrate instantly</h3>
                 <p className="vertical-text">
                 AdRoll connects seamlessly with your store to analyze shopper behavior, recommend popular products, and track revenue growth.
                 
                 </p>
              </div>
              <p>
                 <a className="cta-seconday" href="/Services">
                 Para más información revisa nuestros servicios
                 </a>
              </p>
           </div>

           <div className="col-6">
             <picture className="responsive-image2">
                    <img className="logoEnfermeria" src="images/enfermera.png" />
             </picture>
           </div>

        </div>

      </section>
    )
}

export default WrapperHome;
