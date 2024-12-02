import './Certificacion.css';
import certificacionImg from '../../images/certificacion.png';

function Certificacion() {
    return (
        <div className="div-externo-certificacion">
            <div className='div-interno-certificacion'>
                <img src={certificacionImg} alt="marca-certificacion" id="img-certificacion" />
                
            </div>
        </div>
    );
}

export default Certificacion;
