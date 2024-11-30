import '../PaginaCarrito/PaginaCarrito.css';
import camiPrueba from '../../images/equipacion-arsenal.png';
import Header from '../HeaderAuxiliar/HeaderAuxiliar';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import BotonProcederAPagarCarrito from '../BotonProcederAPagarCarrito/BotonProcederAPagarCarrito';
import Footer from '../footer/Footer'
import BotonSeguirComprandoCarrito from '../BotonSeguirComprandoCarrito/BotonSeguirComprandoCarrito';
import Certificacion from '../Certificacion/Certificacion';

function PaginaCarrito(){
	return (
        <div className='general-carrito'>
            <Header />
        <div className='pagina-carrito-main'>
            <div className='pagina-carrito-sector-1'>
                <img src={camiPrueba} alt='camiPrueba' className='camiPrueba' />
                <div className='conjunto-texto-carrito-sector-1'>
                    <div className='camiPrueba-div'>
                    <p className='h2-texto-carrito-sector-1'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                    </div>
                    <p className='p-texto-carrito-sector-1'>Cantidad: 1</p>
                    <p className='precio-texto-carrito-sector-1'>Precio:</p>
                </div>
            </div>
            <hr />
            <div className='pagina-carrito-sector-2'>
                <div className='columna-izq-carrito-sector-2'>
                    <p className='texto-columna-izq-sector-2'>Total Parcial</p>
                    <p className='texto-columna-izq-sector-2'>Envio (DHL)</p>
                    <p className='texto-columna-izq-sector-2'>Impuestos</p>
                </div>
                <div className='columna-der-carrito-sector-2'>
                    <p className='texto-columna-der-sector-2'>***€</p>
                    <p className='texto-columna-der-sector-2'>***€</p>
                    <p className='texto-columna-der-sector-2'>***€</p>
                </div>
            </div>
            <hr />
            <div className='pagina-carrito-sector-3'>
                <div className='columna-izq-carrito-sector-3'>
                    <p className='texto-columna-izq-sector-3'>Total Incluyendo Impuestos</p>
                </div>
                <div className='columna-der-carrito-sector-3'>
                    <p className='texto-columna-der-sector-3'>***€</p>
                </div>
            </div>
            <hr />
            <div className='pagina-carrito-sector-4'>
                <div className='columna-izq-carrito-sector-4'>
                    <p className='texto-columna-izq-sector-4'>Total sin Incluir Impuestos</p>
                </div>
                <div className='columna-der-carrito-sector-4'>
                    <p className='texto-columna-der-sector-4'>***€</p>
                </div>
            </div>
            <BotonProcederAPagarCarrito />
            <BotonSeguirComprandoCarrito />
        </div>
        <div className='certificacion-carrito'>
            <Certificacion />
        </div>
        <ContactaConNosotros />
        <Footer />
        </div>
	);
};

export default PaginaCarrito;