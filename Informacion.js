import React from 'react';
import './Estilos/style.css';

function Informacion() {
    const handleSearchKeydown = (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.trim().toLowerCase();
            if (query === 'cursos') {
                window.location.href = 'CursosDisp.html';
            } else {
                window.location.href = 'PaginaNoEncontrada.html'; 
            }
        }
    };

    const handleRegistrarseClick = () => {
        window.location.href = 'Registro.html';
    };

    const handleIniciarSesionClick = () => {
        console.log('Botón BI clickeado');
        window.location.href = 'IngresoAdmin.html';
    };

    const handleEditarPerfilClick = () => {
        window.location.href = 'EditarPerfil.html';
    };

    return (
        <div className="InfoBody">
            <header className="hp">
                <nav className="np">
                    <div className="nav-left">
                        <img src="Estilos/IMG/Logotipo.jpeg" alt="logo" className="logop" />
                        <img className="logo2" id="edp1" src="Estilos/IMG/engranaje.png" alt="" onClick={handleEditarPerfilClick} />
                        <input
                            type="text"
                            placeholder="Buscar"
                            id="searchInput"
                            className="search-bar"
                            onKeyDown={handleSearchKeydown}
                        />
                    </div>
                    <ul className="nav-right">
                        <li><a href="CursosDisp.html">Cursos disponibles</a></li>
                        <li><a href="Informacion.html">Información</a></li>
                        <li><a href="Contacto.html">Contacto</a></li>
                        <li><a href="Nuevo.html">Nuevo</a></li>
                        <li><a href="Declaracion.html">Declaraciones</a></li>
                        <li><a href="#" className="btn-registrarse" id="BR" onClick={handleRegistrarseClick}>Registrarse</a></li>
                        <li><a href="#" className="btn-iniciar-sesion" id="BI" onClick={handleIniciarSesionClick}>Iniciar Sesión</a></li>
                    </ul>
                </nav>
            </header>
            <section className="Informacion">
                <h1 className="T1">¿Quienes somos?</h1>
                <p className="Intxt">¡Bienvenidos a CodeNest Learning!</p>
                <h3 className="Intxt2">
                    En CodeNest Learning, estamos comprometidos en ayudar a personas de todas las edades y habilidades a dar sus primeros <br />
                    pasos en el emocionante mundo de la programación. Creemos que la educación tecnológica es la clave para el futuro y nuestro <br />
                    objetivo es proporcionar las herramientas necesarias para que todos puedan aprender a programar de manera efectiva y divertida.
                    <br />
                    <br />
                    <br />
                </h3>
                <img className="IMG5" src="Estilos/IMG/Quienes-somos.jpeg" alt="" />
                <h3 className="Intxt3">
                    ¿Quiénes somos?<br /><br />
                    CodeNest Learning es un grupo de estudiantes apasionados por la tecnología y la educación, dedicado a ofrecer cursos <br />
                    de programación básicos diseñados específicamente para principiantes. Nuestra meta es hacer que la programación sea <br />
                    accesible y comprensible para todos, sin importar la experiencia previa.
                    <br /><br /><br />
                    Misión <br /><br />
                    Nuestra misión es empoderar a las personas con conocimientos de programación, permitiéndoles desarrollar habilidades <br />
                    esenciales para el siglo XXI y prepararlos para enfrentar los desafíos tecnológicos del futuro.
                    <br /><br />
                    Visión <br /><br />
                    Nuestra visión es ser una gran plataforma de enseñanza de programación básica para principiantes, reconocida por la <br />
                    calidad de nuestros cursos y por nuestro compromiso con la educación accesible y de alto impacto.
                    <br /><br />
                </h3>
                <img className="IMG6" src="Estilos/IMG/Objetivos.jpeg" alt="" />
                <h3 className="Intxt4">
                    Objetivos de grupo CodeNest
                    <br /><br />
                    1. Facilitar el aprendizaje: Proveer materiales de estudio claros y fáciles de entender que permitan a los principiantes <br />
                    aprender sin complicaciones.
                    <br /><br />
                    2. Fomentar la creatividad: Inspirar a nuestros estudiantes a utilizar la programación como una herramienta para expresar <br />
                    sus ideas y resolver problemas.
                    <br /><br />
                    3. Crear una comunidad: Desarrollar una comunidad de aprendizaje donde los estudiantes puedan colaborar, compartir conocimientos <br />
                    y crecer juntos en su viaje de aprendizaje.
                    <br /><br />
                    4. Mejorar la empleabilidad: Equipar a nuestros estudiantes con habilidades prácticas y fundamentales que aumenten sus oportunidades <br />
                    laborales en el sector tecnológico.
                    <br /><br /><br />
                </h3>
                <img className="IMG7" src="Estilos/IMG/Ofrecemos.png" alt="" />
                <h3 className="Intxt5">
                    ¿Qué Ofrecemos?
                    <br /><br />
                    -Introducción a la Programación: Curso básico que cubre los conceptos fundamentales de la programación.
                    <br /><br />
                    -Fundamentos de JavaScript: Aprende el lenguaje más popular para el desarrollo web.
                    <br /><br />
                    -Iniciación a Python: Explora el lenguaje más versátil y en demanda en la industria.
                    <br /><br />
                    -HTML y CSS para Principiantes: Comienza tu camino en el desarrollo web con estos lenguajes esenciales.
                    <br /><br /><br /><br />
                </h3>
                <h2> ¡Te esperamos en CodeNest Learning ♥ </h2>
            </section>
            <footer className="InfoFooter">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>CodeNest</h3>
                        <p>Aprende con nosotros en nuestras redes sociales:</p>
                        <ul className="social-links">
                            <li><a href="#"><img src="Estilos/IMG/facebook.png" alt="Facebook" className="Facebook" /></a></li>
                            <li><a href="#"><img src="Estilos/IMG/twitter.png" alt="Twitter" className="Twitter" /></a></li>
                            <li><a href="#"><img src="Estilos/IMG/Instagram.jpeg" alt="Instagram" className="Instagram" /></a></li>
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
                        <h3>¿Qué podemos mejorar?</h3>
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
}

export default Informacion;