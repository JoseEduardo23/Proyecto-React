import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos/style.css';

import logo from './IMG/Logotipo.jpeg';
import tuerca from './IMG/engranaje.png'

const ContenidoCurso2 = () => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                const query = searchQuery.trim().toLowerCase();
                if (query === 'cursos') {
                    window.location.href = 'CursosDisp.html';
                } else {
                    window.location.href = 'PaginaNoEncontrada.html'; 
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleEditProfileClick = () => {
        window.location.href = 'EditarPerfil.html';
    };

    const handleBIButtonClick = () => {
        console.log("Botón BI clickeado");
        window.location.href = "IngresoAdmin.html";
    };

    return (
        <div>
            <header className="hp">
                <nav className="np">
                    <div className="nav-left">
                        <img src={logo} alt="logo" className="logop" />
                        <img className="logo2" id="edp1" src={tuerca} alt="" onClick={handleEditProfileClick} />
                        <input type="text" placeholder="Buscar" id="searchInput" className="search-bar" value={searchQuery} onChange={handleSearchChange} />
                    </div>
                    <ul className="nav-right">
                        <li><a href="CursosDisp.html">Cursos disponibles</a></li>
                        <li><a href="Informacion.html">Información</a></li>
                        <li><a href="Contacto.html">Contacto</a></li>
                        <li><a href="Nuevo.html">Nuevo</a></li>
                        <li><a href="Declaracion.html">Declaraciones</a></li>
                    </ul>
                </nav>
            </header>

            <div className="acordeonContenido">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {/* Sección Básica */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Sección Básica
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="accordion" id="innerAccordionOne">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#classOne" aria-expanded="false" aria-controls="classOne">
                                                Clase 1: Introducción a HTML
                                            </button>
                                        </h2>
                                        <div id="classOne" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <iframe width="560" height="315" style={{ padding: '10px' }} src="https://www.youtube.com/embed/rr2H086z16s?si=7C_gVb3qPshsQOSR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#classTwo" aria-expanded="false" aria-controls="classTwo">
                                                Clase 2: Configurar Visual Studio Code
                                            </button>
                                        </h2>
                                        <div id="classTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <p>Haga clic en el siguiente enlace para descargar el material en PDF:</p>
                                                <a href="archivo.pdf" download="VisualStudioCode.pdf">Descargar PDF</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#classThree" aria-expanded="false" aria-controls="classThree">
                                                Clase 3: Fundamentos Básicos: Párrafos
                                            </button>
                                        </h2>
                                        <div id="classThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <iframe width="560" height="315" style={{ padding: '10px' }} src="https://www.youtube.com/embed/rQXF-_UwmGo?si=mF3_bjSQjGkEdVjy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#classFour" aria-expanded="false" aria-controls="classFour">
                                                Clase 4: Estilos
                                            </button>
                                        </h2>
                                        <div id="classFour" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <iframe width="560" height="315" style={{ padding: '10px' }} src="https://www.youtube.com/embed/X0RNkXYS6Pg?si=HL3rGKq59nMbZDb1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección Intermedia */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Sección Intermedia
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="accordion" id="innerAccordionTwo">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#intermediateOne" aria-expanded="false" aria-controls="intermediateOne">
                                                Clase 1
                                            </button>
                                        </h2>
                                        <div id="intermediateOne" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 1
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#intermediateTwo" aria-expanded="false" aria-controls="intermediateTwo">
                                                Clase 2
                                            </button>
                                        </h2>
                                        <div id="intermediateTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 2
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#intermediateThree" aria-expanded="false" aria-controls="intermediateThree">
                                                Clase 3
                                            </button>
                                        </h2>
                                        <div id="intermediateThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 3
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#intermediateFour" aria-expanded="false" aria-controls="intermediateFour">
                                                Clase 4
                                            </button>
                                        </h2>
                                        <div id="intermediateFour" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección Avanzada */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Sección Avanzada
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="accordion" id="innerAccordionThree">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advancedOne" aria-expanded="false" aria-controls="advancedOne">
                                                Clase 1
                                            </button>
                                        </h2>
                                        <div id="advancedOne" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 1
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advancedTwo" aria-expanded="false" aria-controls="advancedTwo">
                                                Clase 2
                                            </button>
                                        </h2>
                                        <div id="advancedTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 2
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advancedThree" aria-expanded="false" aria-controls="advancedThree">
                                                Clase 3
                                            </button>
                                        </h2>
                                        <div id="advancedThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 3
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advancedFour" aria-expanded="false" aria-controls="advancedFour">
                                                Clase 4
                                            </button>
                                        </h2>
                                        <div id="advancedFour" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Contenido de la Clase 4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bi-button-container">
                <button className="bi-button btn btn-primary" onClick={handleBIButtonClick}>
                    BI
                </button>
            </div>

            {/* Footer */}
            <footer className="footer bg-dark text-light py-3">
                <div className="container">
                    <p className="mb-0 text-center">© 2024 Tu Empresa. Todos los derechos reservados.</p>
                    <ul className="list-unstyled text-center">
                        <li><a href="/privacidad" className="text-light">Política de Privacidad</a></li>
                        <li><a href="/terminos" className="text-light">Términos de Servicio</a></li>
                        <li><a href="/contacto" className="text-light">Contacto</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default ContenidoCurso2;