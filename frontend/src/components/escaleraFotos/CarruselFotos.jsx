import React from "react";
import "../escaleraFotos/CarruselFotos.css";
import fotoIniesta from "../../images/fotoiniesta.png";
import fotoMaradona from "../../images/fotomaradona.png";
import fotoMilan from "../../images/fotomilan.png";
import fotoPele from "../../images/fotopele.png";

function CarruselFotos() {
  return (
    <div className="App">
      <div className="contendor-carrusel-principal">
        <div className="contendor-titulo-carrusel">
          <h1>Carrusel de fotos históricas</h1>
        </div>
        <div className="contendor-imagenes-carrusel">
          <div className="contenedor-imagen-1">
            <div className="imagen-contenedor-1">
              <img src={fotoIniesta} alt="Andrés Iniesta celebrando el gol decisivo en Sudáfrica 2010" />
            </div>
            <div className="info-contenedor-1">
              <h2>Andrés Iniesta, Sudáfrica 2010</h2>
              <p>
                Andrés Iniesta en el momento decisivo del Mundial 2010, justo antes de rematar 
                el balón que daría el gol de la victoria a España en la final contra Países Bajos. 
                Su gol en el minuto 116 aseguró la primera Copa del Mundo para España.
              </p>
            </div>
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
                <p className="info-texto">Andrés Iniesta en el momento decisivo del Mundial 2010, justo antes de rematar el balón que daría el gol de la victoria a España en la final contra Países Bajos. Con serenidad y precisión, Iniesta prepara el disparo que cambiaría la historia del fútbol español, capturando un instante inmortal de gloria.</p>
                </div>
              </div>
            </div>
            <div className="info-contenedor-2">
              <h2>Diego Maradona, Argentina 1986</h2>
              <p>
                Diego Maradona, el genio del fútbol, levantando la Copa del Mundo de 1986 después 
                de liderar a Argentina con actuaciones memorables. En ese torneo, se recordará 
                para siempre su gol conocido como "La Mano de Dios" y su legendaria jugada 
                del "Gol del Siglo" contra Inglaterra.
              </p>
            </div>
          </div>

          <div className="contenedor-imagen-3">
            <div className="imagen-contenedor-3">
              <img src={fotoMilan} alt="Marco Materazzi y Rui Costa en San Siro" />
            </div>
            <div className="info-contenedor-3">
              <h2>San Siro: Materazzi y Rui Costa</h2>
              <p>
                Una icónica imagen de respeto en el fútbol: Marco Materazzi y Rui Costa observando juntos el caos 
                de bengalas y humo que invadió el estadio de San Siro durante un derbi entre Inter de Milán y AC Milán. 
                Un momento que simboliza la pasión y emoción del fútbol italiano.
              </p>
            </div>
          </div>

          <div className="contenedor-imagen-4">
            <div className="imagen-contenedor-4">
              <img src={fotoPele} alt="Pelé celebrando un gol en la final del Mundial de 1970" />
            </div>
            <div className="info-contenedor-4">
              <h2>Pelé, Brasil 1970</h2>
              <p>
                Pelé, el rey del fútbol, celebra con el puño en alto tras marcar en la final del 
                Mundial de 1970, liderando a Brasil hacia su tercer campeonato mundial. Ese torneo 
                consolidó a Pelé como uno de los mejores jugadores de la historia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarruselFotos;
