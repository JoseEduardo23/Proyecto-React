import React, { useState } from 'react';
import './Estilos/style.css';

const IngresoAE = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleRoleChange = (event) => {
    const selectValue = event.target.value;
    if (selectValue === 'option1') {
      window.location.href = 'IniciarS2.html';
    } else if (selectValue === 'option2') {
      window.location.href = 'IniciarS.html';
    }
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const query = searchQuery.trim().toLowerCase();
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

  const handleEditProfileClick = () => {
    window.location.href = 'EditarPerfil.html';
  };

  return (
    <div>
      <header className="hp">
        <nav className="np">
          <div className="nav-left">
            <img src="Estilos/IMG/Logotipo.jpeg" alt="logo" className="logop" />
            <img
              className="logo2"
              id="edp1"
              src="Estilos/IMG/engranaje.png"
              alt=""
              onClick={handleEditProfileClick}
            />
            <input
              type="text"
              placeholder="Buscar"
              id="searchInput"
              className="search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
          </ul>
        </nav>
      </header>

      <section className="Logotipo">
        <img className="IMG4" src="Estilos/IMG/PNGlogo1.png" alt="" />
      </section>

      <div className="Admform">
        <p className="text1">INGRESAR</p>
        <p className="text2">
          Sean bienvenidos a esta gran oportunidad de <br />
          aprender a programar con la ayuda del equipo <br />
          de CodeNest Learning.
        </p>

        <label className="Combobox">
          ROLES
          <select className="Select1" id="roles" onChange={handleRoleChange}>
            <option className="op1" value="option0"></option>
            <option className="op1" value="option1">Administrador</option>
            <option className="op1" value="option2">Estudiante</option>
          </select>
        </label>
        <form className="ingresos"></form>
      </div>

      <footer className="FootAdm">
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
              <li className="A"><a href="CursosDisp.html">Cursos disponibles</a></li>
              <li className="B"><a href="Informacion.html">Informacion</a></li>
              <li className="C"><a href="Contacto.html">Contacto</a></li>
              <li className="D"><a href="Nuevo.html">Nuevo</a></li>
              <li className="E"><a href="Declaracion.html">Declaraciones</a></li>
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
              <input className="Coment" type="text" placeholder="Ingresa tu comentario" />
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

export default IngresoAE;