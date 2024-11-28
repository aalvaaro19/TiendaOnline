import './FotosApartados.css';
import { Link } from 'react-router-dom';

function FotosApartados() {
    return (
        <body>
            <div className="contenedor-apartados-imagenes">
                <Link to="/paginaRetro" className="contenedor-apartados-imagen-1">
                    <div className="header-contenedor-apartados-imagen-1">
                        <h1 className='titulo'>RETRO</h1>
                    </div>
                </Link>
                <Link to="/paginaFirmadas" className="contenedor-apartados-imagen-2">
                    <div className="header-contenedor-apartados-imagen-2">
                        <h1 className='titulo'>FIRMADAS</h1>
                    </div>
                </Link>
                <Link to="/paginaColaboraciones" className="contenedor-apartados-imagen-3">
                    <div className="header-contenedor-apartados-imagen-3">
                        <h1 className='titulo'>COLABORACIONES</h1>
                    </div>
                </Link>
            </div>
        </body>
    );
}

export default FotosApartados;
