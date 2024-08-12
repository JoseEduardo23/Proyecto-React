import React from 'react';
import './Estilos/style.css';
import logo from './IMG/Logotipo.jpeg';
import tuerca from './IMG/engranaje.png'
import logo13 from './imgcursos/Facebook_logo_(square).png.webp';
import logo14 from './imgcursos/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c';
import logo15 from './imgcursos/Captura de pantalla 2024-07-29 212454.png';

const Contacto = () => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.trim().toLowerCase();
            if (query === 'cursos') {
                window.location.href = 'CursosDisp.html';
            } else {
                window.location.href = 'PaginaNoEncontrada.html';
            }
        }
    };

    const handleClick = (page) => {
        switch(page) {
            case 'Registro':
                window.location.href = 'Registro.html';
                break;
            case 'IngresoAdmin':
                window.location.href = 'IngresoAdmin.html';
                break;
            case 'EditarPerfil':
                window.location.href = 'EditarPerfil.html';
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <header className="hp">
                <nav className="np">
                    <div className="nav-left">
                        <img src={logo} alt="logo" className="logop" />
                        <img
                            className="logo2"
                            id="edp1"
                            src={tuerca}
                            alt=""
                            onClick={() => handleClick('EditarPerfil')}
                        />
                        <input
                            type="text"
                            placeholder="Buscar"
                            id="searchInput"
                            className="search-bar"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <ul className="nav-right">
                        <li><a href="CursosDisp.html">Cursos disponibles</a></li>
                        <li><a href="Informacion.html">Información</a></li>
                        <li><a href="Contacto.html">Contacto</a></li>
                        <li><a href="Nuevo.html">Nuevo</a></li>
                        <li><a href="Declaracion.html">Declaraciones</a></li>
                        <li>
                            <a
                                href="#"
                                className="btn-registrarse"
                                id="BR"
                                onClick={() => handleClick('Registro')}
                            >
                                Registrarse
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="btn-iniciar-sesion"
                                id="BI"
                                onClick={() => handleClick('IngresoAdmin')}
                            >
                                Iniciar Sesión
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="ContBody">
                <section className="Contacts">
                    <iframe
                        className="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4053.7862558582146!2d-78.51382130244585!3d-0.22083452026615452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59987645980f9%3A0xa1a93f5682107db6!2sCentro%20Hist%C3%B3rico%20de%20Quito!5e1!3m2!1ses!2sec!4v1723346718964!5m2!1ses!2sec"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="Comentarios">
                        <h3 className="Ctitle">Dános tu comentario</h3>
                        <p className="Ctxt">Equipo CodeNest: 0983799163</p>
                        <p className="Ctxt">Servicio Técnico: 0999734138</p>
                        <p className="Ctxt">Soporte: 0984991207</p>
                        <div>
                            <h3 className="Ccomentarios2">Haznos una pregunta</h3>
                            <input className="Cinp" type="text" placeholder="NOMBRE" />
                            <input className="Cinp" type="text" placeholder="EMAIL" /><br />
                            <input className="Tinp" type="text" placeholder="COMENTARIOS" />
                        </div>
                        <button className="EnvB">ENVIAR</button>
                    </div>
                </section>
            </section>

            <footer className="ContFooter">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>CodeNest</h3>
                        <p>Aprende con nosotros en nuestras redes sociales:</p>
                        <ul className="social-links">
                            <li><a href="#"><img src={logo13} alt="Facebook" className="Facebook" /></a></li>
                            <li><a href="#"><img src={logo14} alt="Twitter" className="Twitter" /></a></li>
                            <li><a href="#"><img src={logo15}alt="Instagram" className="Instagram" /></a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Categorías</h3>
                        <ul>
                            <li><a href="CursosDisp.html">Cursos disponibles</a></li>
                            <li><a href="Informacion.html">Información</a></li>
                            <li><a href="Nuevo.html">Nuevo</a></li>
                            <li><a href="Declaracion.html">Declaraciones</a></li>
                            <li><a href="Contacto.html">Contactos</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Información de Contacto</h3>
                        <p>Dirección: Calle 123, Quito, Ecuador</p>
                        <p>Teléfono: +593 896 7891</p>
                        <p>Email: contacto@codenest.com</p>
                    </div>
                    <div className="footer-column">
                        <h3>¿Que podemos mejorar?</h3>
                        <form action="#">
                            <input type="text" className="coment" placeholder="Ingresa tu comentario" />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 CodeNest. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Contacto;