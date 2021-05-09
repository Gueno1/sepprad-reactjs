import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <div className='footer-container'>
    {/*

       -- Texto que se puede agregar al footer--

      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contrata nuestro servicio para obtener....... 
        </p>
        <p className='footer-subscription-text'>
          Puedes informarte mejor en .....
        </p>   
      </section>
*/}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre Nosotros</h2>
            <Link to='/products'>Como funciona</Link>
            <Link to='/products'>Terminos del servicio</Link>
          </div>
           <div class='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
            <Link to='/'>Patrocinios</Link>
          </div>
        </div>
        
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SEPPRAD
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Sepprad © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
       
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    );
}

export default Footer;
