import React from "react";
import '../escaleraFotos/CarruselFotos.css';
import fotoIniesta from '../../imagenes/fotoiniesta.png';
import fotoMaradona from '../../imagenes/fotomaradona.png';
import fotoMilan from '../../imagenes/fotomilan.png';
import fotoPele from '../../imagenes/fotopele.png';


function CarruselFotos() {
  return (
    <div className="App">
      <body>
        <div className="contendor-carrusel-principal">
          <div className="contendor-titulo-carrusel">
            <h1>Carrusel de fotos históricas</h1>
          </div>
          <div className="contendor-imagenes-carrusel">
            <div className="contenedor-imagen-1">
              <div className="imagen-contenedor-1">
                <img src={fotoIniesta} alt="fotoIniesta" id="fotoIniesta"/>
              </div>
              <div className="info-contenedor-1">
                <div className="titulo-info-contenedor-1">
                <h2>Andres Iniesta, Sudárfica 2010</h2>
                </div>
                <div className="texto-info-contenedor-1">
                <p>Andrés Iniesta en el momento decisivo del Mundial 2010, justo antes de rematar el balón que daría el gol de la victoria a España en la final contra Países Bajos. Con serenidad y precisión, Iniesta prepara el disparo que cambiaría la historia del fútbol español, capturando un instante inmortal de gloria.</p>
                </div>
              </div>
            </div>
            <div className="contenedor-imagen-2">
              <div className="imagen-contenedor-2">
              <img src={fotoMaradona} alt="fotoMaradona" id="fotoMaradona"/>
              </div>
              <div className="info-contenedor-2">
                <div className="titulo-info-contenedor-2">
                <h2>Maradona, Pais 1986</h2>
                </div>
                <div className="texto-info-contenedor-2">
                <p>Diego Maradona, alzando la Copa del Mundo de 1986, rodeado por sus compañeros y aficionados. Con una sonrisa de triunfo y los brazos levantados, Maradona celebra el logro máximo en el fútbol, habiendo liderado a Argentina a la gloria mundial. Un momento icónico que representa la culminación de su genialidad y la pasión de todo un país.</p>
                </div>
              </div>
            </div>
            <div className="contenedor-imagen-3">
              <div className="imagen-contenedor-3">
              <img src={fotoMilan} alt="fotoMilan" id="fotoMilan"/>
              </div>
              <div className="info-contenedor-3">
                <div className="titulo-info-contenedor-3">
                <h2>San Siro</h2>
                </div>
                <div className="texto-info-contenedor-3">
                <p>Una de las imágenes más icónicas del fútbol: Marco Materazzi y Rui Costa, rivales en el campo, observan juntos mientras las bengalas llenan el estadio de humo durante el derbi de Milán en la Liga de Campeones. En medio del caos de la afición, este momento refleja el respeto mutuo y la hermandad que el fútbol puede crear, incluso entre adversarios históricos.</p>
                </div>
              </div>
            </div>
            <div className="contenedor-imagen-4">
              <div className="imagen-contenedor-4">
              <img src={fotoPele} alt="fotoPele" id="fotoPele"/>
              </div>
              <div className="info-contenedor-4">
                <div className="titulo-info-contenedor-4">
                <h2>Pele, Pais 1970</h2>
                </div>
                <div className="texto-info-contenedor-4">
                <p>Pelé, el Rey del Fútbol, celebra con el puño en alto tras marcar en la final del Mundial de 1970. Levantado por su compañero Jairzinho, la imagen captura la alegría y la grandeza del astro brasileño mientras Brasil se corona campeón por tercera vez. Un momento histórico que simboliza la supremacía de Pelé y la magia del fútbol brasileño.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default CarruselFotos;