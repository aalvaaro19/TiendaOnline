import '../Certificacion/Certificacion.css';
import certificacionImg from '../../images/certificacion.png';

function Certificacion() {
    return (
        <div className="div-externo-certificacion">
            <div className='div-interno-certificacion'>
                <img src={certificacionImg} alt="marca-certificacion" id="img-certificacion" />
            </div>

            <div className='valoracion'>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
            </div>
        </div>
    );
}

export default Certificacion;

