import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Sepprad</h1>
            <p>Inicia Tu Cuidado</p>

           
            
            <div className="hero-btns">
                 {/*
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                  Empezar
              </Button>
              */
            }
       
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                   Contratar <i className='far fa-play-cicle' />
              </Button>
          
            </div>
        </div>
    )
}

export default HeroSection
