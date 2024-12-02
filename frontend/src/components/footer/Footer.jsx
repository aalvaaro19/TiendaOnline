import './Footer.css'
function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <button className="logo-text"><span>Limited</span>Football</button>
                    <p>
                    ¡Bienvenido a Limited Football, tu destino en línea para las camisetas más exclusivas y a la moda! En nuestra tienda, encontrarás una selección cuidadosamente curada de diseños únicos que se adaptan a todos los estilos y gustos. Nos enorgullecemos de ofrecer productos de alta calidad, comodidad y originalidad, asegurándonos de que siempre luzcas a la vanguardia de la moda.
                    </p>
                </div>
                <div className="footer-section links">
                    <button className="logo-text">Enlaces Rápidos</button>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/shop">Tienda</a></li>
                        <li><a href="/about">Sobre Nosotros</a></li>
                        <li><a href="/Contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <button className="logo-text">Contáctanos</button>
                    <ul>
                        <li><i className="fas fa-phone"></i> +123-456-789</li>
                        <li><i className="fas fa-envelope"></i> info@limitedfootball.com</li>
                        <li><i className="fas fa-map-marker-alt"></i> C. de Serrano, 66, Madrid</li>
                    </ul>
                    <div class="social-card">
                        <button class="Btn whatsapp">
                            <span class="svgContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" fill="white" viewBox="0 0 448 512">
                                <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                ></path>
                            </svg>
                            </span>
                            <span class="BG"></span>
                        </button>

                        <button class="Btn instagram">
                            <span class="svgContainer">
                                <svg height="1.6em" viewBox="0 0 448 512" fill="white">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6s-57.9-34.5-93.6-36.2c-37.1-2.1-147.9-2.1-185 0-35.7 1.7-67.3 9.9-93.6 36.2s-34.5 57.9-36.2 93.6c-2.1 37.1-2.1 147.9 0 185 1.7 35.7 9.9 67.3 36.2 93.6s57.9 34.5 93.6 36.2c37.1 2.1 147.9 2.1 185 0 35.7-1.7 67.3-9.9 93.6-36.2s34.5-57.9 36.2-93.6c2.1-37.1 2.1-147.9 0-185zm-48.5 224c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.1s2.6 102.7-9 132.1z"
                                ></path>
                                </svg>
                            </span>
                            <span class="BG"></span>
                        </button>

                        <button class="Btn x-app">
                            <span class="svgContainer">
                                <svg height="1.4em" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                                </svg>
                            </span>
                            <span class="BG"></span>
                        </button>

                        <button class="Btn gmail">
                            <span class="svgContainer">
                                <svg height="1.4em" viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M502.3 190.8L327.4 317.5c-15.9 11.6-37.1 11.6-53 0L9.7 190.8C3.6 186.6 0 179.7 0 172.3V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V172.3c0-7.4-3.6-14.3-9.7-18.5zM464 48H48C21.5 48 0 69.5 0 96v20.3c0 7.4 3.6 14.3 9.7 18.5l216.7 158.3c15.9 11.6 37.1 11.6 53 0l216.7-158.3c6.1-4.2 9.7-11.1 9.7-18.5V96c0-26.5-21.5-48-48-48z"/>
                                </svg>
                            </span>
                            <span class="BG"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 TiendaCamisetas | Diseñado por TiendaCamisetas
            </div>
        </footer>
    );
}

export default Footer;