import React, { useState } from 'react';
import './Estilos/style.css';
import './Estilos/errorstyle.css'; 

const Nuevo = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const query = searchInput.trim().toLowerCase();
      if (query === 'cursos') {
        window.location.href = 'CursosDisp.html';
      } else {
        window.location.href = 'PaginaNoEncontrada.html';
      }
    }
  };

  const handleRegisterClick = () => {
    window.location.href = 'Registro.html';
  };

  const handleLoginClick = () => {
    window.location.href = 'IngresoAdmin.html';
  };

  const handleProfileClick = () => {
    window.location.href = 'EditarPerfil.html';
  };

  return (
    <div className="NuevoBody">
      <header className="hp">
        <nav className="np">
          <div className="nav-left">
            <img src="Estilos/IMG/Logotipo.jpeg" alt="logo" className="logop" />
            <img className="logo2" id="edp1" src="Estilos/IMG/engranaje.png" alt="" onClick={handleProfileClick} />
            <input
              type="text"
              placeholder="Buscar"
              id="searchInput"
              className="search-bar"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <ul className="nav-right">
            <li><a href="CursosDisp.html">Cursos disponibles</a></li>
            <li><a href="Informacion.html">Información</a></li>
            <li><a href="Contacto.html">Contacto</a></li>
            <li><a href="Nuevo.html">Nuevo</a></li>
            <li><a href="Declaracion.html">Declaraciones</a></li>
            <li><a href="#" className="btn-registrarse" id="BR" onClick={handleRegisterClick}>Registrarse</a></li>
            <li><a href="#" className="btn-iniciar-sesion" id="BI" onClick={handleLoginClick}>Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <section>
        PAGINA EN MANTENIMIENTO
      </section>

      <footer className="NuevoFooter">
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
};

export default Nuevo;