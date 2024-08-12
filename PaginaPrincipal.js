import React, { useEffect } from 'react';
import './Estilos/style.css';
import { Link } from 'react-router-dom';
import Contacto from './Contacto';

import logo from './IMG/Logotipo.jpeg';
import tuerca from './IMG/engranaje.png'

import logo1 from './imgcursos/java-script1.jpg';
import logo2 from './imgcursos/Captura de pantalla 2024-07-29 204542.png';
import logo3 from './imgcursos/Captura de pantalla 2024-07-29 204805.png';

import logo4 from './imgcursos/Captura de pantalla 2024-07-22 213327.png';
import logo5 from './imgcursos/Captura de pantalla 2024-07-22 212918.png';
import logo6 from './imgcursos/Captura de pantalla 2024-07-22 213051.png';
import logo7 from './imgcursos/Captura de pantalla 2024-07-22 213427.png';
import logo8 from './imgcursos/Captura de pantalla 2024-07-22 213532.png';
import logo9 from './imgcursos/Captura de pantalla 2024-07-22 213639.png';
import logo10 from './imgcursos/Captura de pantalla 2024-07-22 223732.png';
import logo11 from './imgcursos/Captura de pantalla 2024-07-22 213123.png';
import logo12 from './imgcursos/Captura de pantalla 2024-07-22 213245.png';

import logo13 from './imgcursos/Facebook_logo_(square).png.webp';
import logo14 from './imgcursos/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c';
import logo15 from './imgcursos/Captura de pantalla 2024-07-29 212454.png';



const PaginaPrincipal = () => {
  useEffect(() => {
    const searchInput = document.getElementById('searchInput');
    const handleSearch = (event) => {
      if (event.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (query === 'cursos') {
          window.location.href = 'CursosDisp.html';
        } else {
          window.location.href = 'PaginaNoEncontrada.html';
        }
      }
    };

    searchInput.addEventListener('keydown', handleSearch);

    const handleRegisterClick = () => {
      window.location.href = 'Registro.html';
    };
    const handleLoginClick = () => {
      console.log('Botón BI clickeado');
      window.location.href = 'IngresoAdmin.html';
    };
    const handleEditProfileClick = () => {
      window.location.href = 'EditarPerfil.html';
    };
    const handleDetailsClick = () => {
      window.location.href = 'ContenidoCurso2.html';
    };

    document.getElementById('BR').addEventListener('click', handleRegisterClick);
    document.getElementById('BI').addEventListener('click', handleLoginClick);
    document.getElementById('edp1').addEventListener('click', handleEditProfileClick);
    document.getElementById('Det9').addEventListener('click', handleDetailsClick);

    return () => {
      searchInput.removeEventListener('keydown', handleSearch);
      document.getElementById('BR').removeEventListener('click', handleRegisterClick);
      document.getElementById('BI').removeEventListener('click', handleLoginClick);
      document.getElementById('edp1').removeEventListener('click', handleEditProfileClick);
      document.getElementById('Det9').removeEventListener('click', handleDetailsClick);
    };
  }, []);

  return (
    <div className="bp">
      <header className="hp">
        <nav className="np">
          <div className="nav-left">
            <img src = {logo} alt="logo" className="logop" />
            <img className="logo2" id="edp1" src={tuerca} alt="" />
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
      <section className="banner">
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={logo1} alt="Curso 1" />
            </div>
            <div className="carousel-item">
              <img src={logo2} alt="Curso 2" />
            </div>
            <div className="carousel-item">
              <img src={logo3} alt="Curso 3" />
            </div>
          </div>
          <button className="carousel-control prev">&#10094;</button>
          <button className="carousel-control next">&#10095;</button>
        </div>
      </section>
      <section className="productos">
        <div className="producto">
          <img src={logo4} alt="Curso 1" />
          <p>Este curso para principiantes enseña los fundamentos de la programación...</p>
          <button className="btn">Ver Detalles</button>
        </div>
        <div className="producto">
          <img src={logo5} alt="Curso 2" />
          <p>En este curso, exploraremos la evolución de JavaScript desde su creación...</p>
          <button className="btn">Ver Detalles</button>
        </div>
        <div className="producto">
          <img src={logo6} alt="Curso 3" />
          <p>Este curso está diseñado para principiantes y desarrolladores intermedios...</p>
          <button className="btn">Ver Detalles</button>
        </div>
      </section>
      <section className="productos">
        <div className="producto">
          <img src={logo7} alt="Curso 4" />
          <p>En este curso aprenderás desde los conceptos básicos hasta técnicas avanzadas...</p>
          <button className="btn">Ver Detalles</button>
        </div>
        <div className="producto">
          <img src={logo8} alt="Curso 5" />
          <p>En este curso integral de Desarrollo Web, aprenderás las habilidades esenciales...</p>
          <button className="btn">Ver Detalles</button>
        </div>
        <div className="producto">
          <img src={logo9} alt="Curso 6" />
          <p>Este curso está diseñado para introducir a los estudiantes en los fundamentos del desarrollo web...</p>
          <button className="btn">Ver Detalles</button>
        </div>
      </section>
      <section className="productos">
        <div className="producto">
          <img src={logo10} alt="Curso 7" />
          <p>Este curso está diseñado para proporcionar una comprensión completa de C++...</p>
          <button className="btn">Ver Detalles</button>
        </div>
        <div className="producto">
          <img src={logo11} alt="Curso 8" />
          <p>Este curso está diseñado para proporcionar una base sólida en desarrollo web...</p>
          <button className="btn">Ver Detalles</button>
        </div>
        <div className="producto">
          <img src={logo12} alt="Curso 9" />
          <p>Aprende JavaScript desde lo básico hasta técnicas avanzadas...</p>
          <button className="btn" id="Det9">Ver Detalles</button>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>CodeNest</h3>
            <p>Aprende con nosotros en nuestras redes sociales:</p>
            <ul className="social-links">
              <li><a href="#"><img src={logo13} alt="Facebook" className="Facebook" /></a></li>
              <li><a href="#"><img src={logo14} alt="Twitter" className="Twitter" /></a></li>
              <li><a href="#"><img src={logo15} alt="Instagram" className="Instagram" /></a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Categorías</h3>
            <ul>
              <li><a href="CursosDisp.html">Cursos disponibles</a></li>
              <li><a href="Informacion.html">Información</a></li>
              <li><a href="Contacto.html">Contacto</a></li>
              <li><a href="Nuevo.html">Nuevo</a></li>
              <li><a href="Declaracion.html">Declaraciones</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Sobre Nosotros</h3>
            <p>Somos una plataforma dedicada a proporcionar cursos de alta calidad.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CodeNest. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaPrincipal;