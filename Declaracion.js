import React, { useEffect } from 'react';

const Declaracion = () => {
  useEffect(() => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (query === 'cursos') {
          window.location.href = 'CursosDisp.html';
        } else {
          window.location.href = 'PaginaNoEncontrada.html'; // Ajusta según tus necesidades
        }
      }
    });

    document.getElementById('BR').addEventListener('click', function () {
      window.location.href = 'Registro.html';
    });

    document.getElementById('BI').addEventListener('click', function () {
      console.log('Botón BI clickeado');
      window.location.href = 'IngresoAdmin.html';
    });

    document.getElementById('edp1').addEventListener('click', function () {
      window.location.href = 'EditarPerfil.html';
    });

    // Cleanup event listeners on unmount
    return () => {
      searchInput.removeEventListener('keydown', () => {});
      document.getElementById('BR').removeEventListener('click', () => {});
      document.getElementById('BI').removeEventListener('click', () => {});
      document.getElementById('edp1').removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div>
      <header className="hp">
        <nav className="np">
          <div className="nav-left">
            <img src="Estilos/IMG/Logotipo.jpeg" alt="logo" className="logop" />
            <img className="logo2" id="edp1" src="Estilos/IMG/engranaje.png" alt="" />
            <input type="text" placeholder="Buscar" id="searchInput" className="search-bar" />
          </div>
          <ul className="nav-right">
            <li><a href="CursosDisp.html">Cursos disponibles</a></li>
            <li><a href="Informacion.html">Información</a></li>
            <li><a href="Contacto.html">Contacto</a></li>
            <li><a href="Nuevo.html">Nuevo</a></li>
            <li><a href="Declaracion.html">Declaraciones</a></li>
            <li><a href="#" className="btn-registrarse" id="BR">Registrarse</a></li>
            <li><a href="#" className="btn-iniciar-sesion" id="BI">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <section className="Decl">
        <h1 className="Dectitle">Declaración de accesibilidad de CodeNest</h1>
        <h2 className="Dectitle1">Compromiso de accesibilidad</h2>

        <p className="Dectlt">
          Nuestro objetivo es ayudar a las organizaciones y a las personas a aprender y desarrollar sus habilidades de una forma flexible y eficaz. Creemos que <br /> todas las personas deben tener a su alcance contenido educativo de calidad, por lo que la accesibilidad es un aspecto fundamental para nosotros.
        </p>
        <p className="Dectlt">
          Nuestros equipos trabajan constantemente para mejorar la accesibilidad de nuestros servicios. Estos son algunos ejemplos de cómo estamos mejorando la <br /> accesibilidad en la plataforma de Udemy:
        </p>
        <ul className="Dectxt">
          <li>
            Directrices de accesibilidad. Seguimos las Pautas de Accesibilidad para el Contenido Web 2.1 (WCAG, por sus siglas en inglés) <br /> del World Wide Web Consortium (W3C)
            y utilizamos las especificaciones de accesibilidad en aplicaciones web enriquecidas <br /> (WAI-ARIA, por sus siglas en inglés). Evaluamos nuestro sitio web y nuestras aplicaciones
            móviles mediante plantillas de accesibilidad <br /> de productos voluntarias estándar (VPAT, por sus siglas en inglés).
          </li><br />

          <li>
            Pruebas de compatibilidad. Comprobamos la compatibilidad de nuestro sitio web y nuestras aplicaciones móviles con diversos lectores <br /> de pantalla y herramientas de accesibilidad,
            como NonVisual Desktop Access (NVDA), Job Access with Speech (JAWS®), <br /> Voiceover para los sistemas operativos Macintosh (macOS) y iPhone (iOS), y Talkback para Android.
          </li><br />

          <li>
            Subtítulos y subtítulos descriptivos. Muchos de nuestros cursos incluyen subtítulos generados automáticamente en varios idiomas, <br /> y algunos disponen de subtítulos descriptivos accesibles.
            Más información sobre cómo utilizar subtítulos en nuestro sitio web y sobre <br /> cómo utilizar subtítulos en nuestras aplicaciones móviles.
          </li><br />
          <li>
            Sistema de diseño. La accesibilidad es un principio fundamental de nuestro sistema de diseño interno. Nuestros ingenieros y <br /> diseñadores cuentan con la colaboración de consultores de accesibilidad
            a la hora de actualizar nuestro sistema de diseño.
          </li><br />
          <li>
            Investigación continua. Colaboramos con consultores de accesibilidad que realizan auditorías y nos ofrecen recomendaciones para <br /> mejorar la accesibilidad de nuestros servicios.
          </li><br />
          <li>
            Asistencia en materia de accesibilidad <br />
            Si un usuario tiene algún problema a la hora de utilizar Udemy o acceder al sitio web, o desea compartir alguna sugerencia sobre <br /> cómo podemos
            mejorar la accesibilidad de nuestros servicios, puede enviarnos un correo electrónico a CodeNest@gmail.com o <br /> utilizar la opción de asistencia
            de nuestras aplicaciones.
          </li>
        </ul>
      </section>

      <footer className="DecFooter">
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

export default Declaracion;