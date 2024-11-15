import React from 'react';
import './escaleraFotos.css';
import foto1 from '../../imagenes/fotoiniesta.jpg';
import foto2 from '../../imagenes/fotomaradona2.jpeg';
import foto3 from '../../imagenes/fotomilan.jpg';
import foto4 from '../../imagenes/fotopele2.jpeg';

const EscaleraFotos = () => {
  return (
    <div className="escalera-fotos-container">
      <h2>Carrusel fotos históricas</h2>
      <div className='contenedor-fotos'>
        <div className="item">
            <img src={foto1} alt="Foto de Iniesta" />
            <div className='foto-pie-container'>
                <p className="foto-pie">Iniesta y la gloria</p>
                <p className="descripcion-foto">
                    Andrés Iniesta en el momento decisivo del Mundial 2010, justo antes de rematar el balón que daría el gol de la victoria a España en la final contra Países Bajos. Con serenidad y precisión, Iniesta prepara el disparo que cambiaría la historia del fútbol español, capturando un instante inmortal de gloria.            </p>
            </div>      </div>
        <div className="item">
            <div className='foto-pie-container'>
                <p className="foto-pie">Maradona y la mano de DIOS</p>
                <p className="descripcion-foto">
                    Diego Maradona, alzando la Copa del Mundo de 1986, rodeado por sus compañeros y aficionados. Con una sonrisa de triunfo y los brazos levantados, Maradona celebra el logro máximo en el fútbol, habiendo liderado a Argentina a la gloria mundial. Un momento icónico que representa la culminación de su genialidad y la pasión de todo un país.            </p>
            </div>
            <img src={foto2} alt="Foto de Maradona" />
        </div>
        <div className="item">
            <img src={foto3} alt="Foto del AC Milan" />
            <div className='foto-pie-container'>
                <p className="foto-pie">Clasico de Milan</p>
                <p className="descripcion-foto">
                    Una de las imágenes más icónicas del fútbol: Marco Materazzi y Rui Costa, rivales en el campo, observan juntos mientras las bengalas llenan el estadio de humo durante el derbi de Milán en la Liga de Campeones. En medio del caos de la afición, este momento refleja el respeto mutuo y la hermandad que el fútbol puede crear, incluso entre adversarios históricos.            </p>
            </div>
        </div>
        <div className="item">
            <div className="foto-pie-container">
                <p className="foto-pie">Pelé con Copas del Mundo</p>
                <p className="descripcion-foto">
                    Pelé, el Rey del Fútbol, celebra con el puño en alto tras marcar en la final del Mundial de 1970. Levantado por su compañero Jairzinho, la imagen captura la alegría y la grandeza del astro brasileño mientras Brasil se corona campeón por tercera vez. Un momento histórico que simboliza la supremacía de Pelé y la magia del fútbol brasileño.            </p>
            </div>
                <img src={foto4} alt="Foto de Pele" />
            </div>
      </div>
    </div>
  );
};

export default EscaleraFotos;
