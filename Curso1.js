import React, { useEffect } from 'react';
import './Estilos/style.css';

const Curso1 = () => {
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

    document.getElementById("BR").addEventListener("click", function () {
      window.location.href = "Registro.html";
    });

    document.getElementById("BI").addEventListener("click", function () {
      console.log("Botón BI clickeado");
      window.location.href = "IngresoAdmin.html";
    });

    document.getElementById("C1c").addEventListener("click", function() {
      window.location.href = "ContenidoCurso.html";
    });

    document.getElementById("edp1").addEventListener("click", function() {
      window.location.href = "EditarPerfil.html"; 
    });

    // Cleanup function to remove event listeners
    return () => {
      searchInput.removeEventListener('keydown', /* reference to your function */);
      document.getElementById("BR").removeEventListener("click", /* reference to your function */);
      document.getElementById("BI").removeEventListener("click", /* reference to your function */);
      document.getElementById("C1c").removeEventListener("click", /* reference to your function */);
      document.getElementById("edp1").removeEventListener("click", /* reference to your function */);
    };
  }, []);

  return (
    <div className="Curso1">
      <section className="Barra">
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
        <section className="InfoC1">
          <div className="container1">
            <div className="Section"></div>
            <div className="Info">
              <img className="IMG1" src="Estilos/IMG/Python curso.webp" alt="" />
              <progress className="prog1" max="100" value="60"></progress>
              <p className="txt1">
                Sumergete en el mundo de la programacion con nuestros cursos de Python, diseñado para llevarte
                <br /> desde los conceptos basicos, ya seas un principiante o un solo aficionado
                <br /> este curso te proporcionara las habilidades necesarias para dominar Python.
                <br /><br />¿Que aprenderas?
                <br />- Introduccion a Python. <br />
                - Sintaxis basica <br />
                - Estructuras de control. <br />
                - Estructura de datos simple. <br />
                - Funciones basicas. <br />
                - Entrada y salida.
              </p>
              <p className="txt2">
                ¿A quien esta dirigido? <br />
                Principalmente a personas sin experiencia previa de programacion <br /><br />
                A estudiantes interesados en conocer y comenzar a programar como <br />
                complemento a sus estudios. <br /><br />
                Personas entusiastas de la tecnologia, interesados en aprender las <br />
                nases de la programacion con un lenguaje sencillo y versatil.
              </p>
            </div>
            <div className="Info2">
              <img className="IMG2" id="C1c" src="Estilos/IMG/CSS curso.jpeg" alt="" />
              <progress className="prog2" max="100" value="25"></progress>
              <p className="txt1">
                Este curso esta diseñado para principiantes que desean aprender a estilizar web utilizando CSS, a lo
                <br /> largo del curso, comprenderas como aplicar a tus paginas web, hacerlas visualmente atractivas y
                <br /> mejorar la experiencia del usuario
                <br /><br />¿Que aprenderas?
                <br />- Introduccion a CSS. <br />
                - Que es CSS y como funciona <br />
                - Integracion de CSS en HMTL <br />
                - Selectores basicos. <br />
                - Propiedades fundamentales. <br />
                - Texto y funetes.
              </p>
              <p className="txt2">
                ¿A quien esta dirigido? <br />
                Principalmente a personas sin experiencia previa en diseño web.<br /><br />
                A estudiantes ique desean mejorar sus habilidades de diseño web. <br /><br />
                Programadores que buscan agregar habilidades de estilizacion a <br />
                su conjunto de herramientas.
              </p>
            </div>
            <div className="Info3">
              <img className="IMG3" src="Estilos/IMG/Java curso.jpeg" alt="" />
              <progress className="prog3" max="100" value="80"></progress>
              <p className="txt1">
                Este curso esta diseñado para principiantes que desean aprender a progamar en JavaScript, el lenguaje
                <br /> de programación mas popular para el desarrollo web. Aprenderas los conceptos basicos de JavaScript
                <br /> y como aplicarlos para crear interactividad en tus paginas web.
                <br /><br />¿Que aprenderas?
                <br />- Introduccion a JavaScript. <br />
                - Sintaxis y fundamentos. <br />
                - Estructura de control. <br />
                - Funciones. <br />
                - Manipulacion del DOM. <br />
                - Arreglos y Objetos.
              </p>
              <p className="txt2">
                ¿A quien esta dirigido? <br />
                Principalmente a personas sin experiencia previa en programacion.<br /><br />
                A estudiantes ique desean aprender JavaScript como parte de sus. <br />
                estudios en desarrollo web. <br /><br />
                Programadores que desean buscar añadir interactividad a sus sitios <br />
                web.
              </p>
            </div>
          </div>
        </section>
        <footer>
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
                <li><a href="Contacto.html">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contacto</h3>
              <p>Telefono: 123-456-7890</p>
              <p>Email: contacto@codenest.com</p>
              <p>Dirección: Calle Falsa 123, Ciudad, País</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Curso1;