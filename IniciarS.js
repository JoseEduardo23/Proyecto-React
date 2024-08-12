import React, { useState } from 'react';
import './Estilos/style.css'; 
import './Estilos/errorstyle.css'; 

const InicioS = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    const Mailuser = "joselincango73@gmail.com";
    const Passuser = "j.eduardo23";

    const handleLogin = (event) => {
        event.preventDefault();
        let camposValidos = true;

        if (email === "" || email !== Mailuser) {
            setEmailError("*Por favor ingrese su correo electrónico correctamente.");
            camposValidos = false;
        } else {
            setEmailError('');
        }

        if (password === "" || password !== Passuser) {
            setPassError("Ingrese su contraseña correctamente.");
            camposValidos = false;
        } else {
            setPassError('');
        }

        if (camposValidos) {
            window.location.href = "PaginaPrincipal.html";
        }
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.trim().toLowerCase();
            if (query === 'cursos') {
                window.location.href = 'CursosDisp.html';
            } else {
                window.location.href = 'PaginaNoEncontrada.html'; // Ajusta según tus necesidades
            }
        }
    };

    return (
        <div id="InicioContainer" className="Body2">
            <header className="hp">
                <nav className="np">
                    <div className="nav-left">
                        <img src="Estilos/IMG/Logotipo.jpeg" alt="logo" className="logop" />
                        <img className="logo2" id="edp1" src="Estilos/IMG/engranaje.png" alt="" />
                        <input type="text" placeholder="Buscar" id="searchInput" className="search-bar" onKeyDown={handleSearch} />
                    </div>
                    <ul className="nav-right">
                        <li><a href="CursosDisp.html">Cursos disponibles</a></li>
                        <li><a href="Informacion.html">Información</a></li>
                        <li><a href="Contacto.html">Contacto</a></li>
                        <li><a href="Nuevo.html">Nuevo</a></li>
                        <li><a href="Declaracion.html">Declaraciones</a></li>
                        <li><a href="#" className="btn-registrarse" id="BR" onClick={() => window.location.href = "Registro.html"}>Registrarse</a></li>
                    </ul>
                </nav>
            </header>
            <form className="container2" id="miFormulario" onSubmit={handleLogin}>
                <p className="title2">BIENVENIDO A CODENEST</p>
                <img className="Imgl" src="Estilos/IMG/Logopng.png" alt="" />
                <div className="InicioS">
                    <p className="datos">Email</p>
                    <label>
                        <input className="inp2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
                        {emailError && <p id="Email-error" className="error1">{emailError}</p>}
                    </label><br />
                    <p className="datos">Contraseña</p>
                    <label>
                        <input className="inp2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {passError && <p id="Contra-error" className="error1">{passError}</p>}
                    </label><br />
                </div>
                <div className="Botones">
                    <button id="B3" className="B3" type="submit">Ingresar</button>
                    <button id="B4" className="B4" type="button" onClick={() => window.location.href = "IngresoAdmin.html"}>Cancelar</button>
                </div>
            </form>
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
                            <li><a href="Informacion.html">Informacion</a></li>
                            <li><a href="Contacto.html">Contacto</a></li>
                            <li><a href="Nuevo.html">Nuevo</a></li>
                            <li><a href="Declaracion.html">Declaraciones</a></li>
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

export default InicioS;