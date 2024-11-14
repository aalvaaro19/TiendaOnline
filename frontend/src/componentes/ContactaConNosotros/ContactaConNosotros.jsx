import './ContactaConNosotros.css';

function ContactaConNosotros() {
    return (
        <div className="div-externo-contacta">
            <h1 className="texto-contacta-con-nosotros">Contacta con nosotros</h1>
            <div className="container-contacta">
                <div className="container-parte-izquierda">
                    <div className="input-nombre">
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div className="input-correo">
                        <input type="email" placeholder="Correo Electrónico" />
                    </div>
                    <div className="boton-enviar">
                        <button>Enviar</button>
                    </div>
                </div>
                <div className="container-parte-derecha">
                    <textarea placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
            </div>
        </div>
    );
}

export default ContactaConNosotros;
