import React from 'react';
import './style.css';

const Cursos = () => {
    return (
        <div className="CDBody">
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
            <p className="CDtitle">Mis Cursos</p>
            <div className="slider-container">
                <div className="slider">
                    <img className="C1IMG" src="Estilos/IMG/Java curso.jpeg" alt="Imagen 1" />
                    <img className="C1IMG" src="Estilos/IMG/Python curso.webp" alt="Imagen 2" />
                    <img className="C1IMG" src="Estilos/IMG/CSS curso.jpeg" alt="Imagen 3" />
                    <img className="C1IMG" id="C1c" src="Estilos/IMG/hmtl1.webp" alt="Imagen 4" />
                    <img className="C1IMG" src="Estilos/IMG/Java3.jpg" alt="Imagen 5" />
                    <img className="C1IMG" src="Estilos/IMG/python2.jpeg" alt="Imagen 6" />
                    <img className="C1IMG" src="Estilos/IMG/css2.png" alt="Imagen 7" />
                    <img className="C1IMG" src="Estilos/IMG/hmtl2.jpeg" alt="Imagen 8" />
                    <img className="C1IMG" src="Estilos/IMG/java4.jpg" alt="Imagen 9" />
                    <img className="C1IMG" src="Estilos/IMG/python3.jpeg" alt="Imagen 10" />
                    <img className="C1IMG" src="Estilos/IMG/css3.jpg" alt="Imagen11" />
                    <img className="C1IMG" src="Estilos/IMG/html3.jpeg" alt="Imagen12" />
                </div>
                <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            </div>

            <p className="CDtitle2">Los mas buscados</p>
            <div className="slider-container">
                <div className="slider">
                    <img className="C2IMG" src="Estilos/IMG/java5.webp" alt="Imagen 1" />
                    <img className="C2IMG" src="Estilos/IMG/python4.jpg" alt="Imagen 2" />
                    <img className="C2IMG" src="Estilos/IMG/css4.webp" alt="Imagen 3" />
                    <img className="C2IMG" src="Estilos/IMG/hmtl4.png" alt="Imagen 4" />
                    <img className="C2IMG" src="Estilos/IMG/java6.png" alt="Imagen 5" />
                    <img className="C2IMG" src="Estilos/IMG/python5.jpeg" alt="Imagen 6" />
                    <img className="C2IMG" src="Estilos/IMG/css5.jpeg" alt="Imagen 7" />
                    <img className="C2IMG" src="Estilos/IMG/hmtl5.avif" alt="Imagen 8" />
                    <img className="C2IMG" src="Estilos/IMG/java7.jpg" alt="Imagen 9" />
                    <img className="C2IMG" src="Estilos/IMG/python6.webp" alt="Imagen 10" />
                    <img className="C2IMG" src="Estilos/IMG/css6.png" alt="Imagen11" />
                    <img className="C2IMG" src="Estilos/IMG/html6.png" alt="Imagen12" />
                </div>
                <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            </div>

            <p className="CDtitle3">Mejores puntuados</p>
            <div className="slider-container">
                <div className="slider">
                    <img className="C3IMG" src="Estilos/IMG/java8.jpeg" alt="Imagen 1" />
                    <img className="C3IMG" src="Estilos/IMG/python7.jpg" alt="Imagen 2" />
                    <img className="C3IMG" src="Estilos/IMG/css7.png" alt="Imagen 3" />
                    <img className="C3IMG" src="Estilos/IMG/html7.webp" alt="Imagen 4" />
                    <img className="C3IMG" src="Estilos/IMG/java9.jpg" alt="Imagen 5" />
                    <img className="C3IMG" src="Estilos/IMG/python8.jpeg" alt="Imagen 6" />
                    <img className="C3IMG" src="Estilos/IMG/css8.png" alt="Imagen 7" />
                    <img className="C3IMG" src="Estilos/IMG/html8.jpeg" alt="Imagen 8" />
                    <img className="C3IMG" src="Estilos/IMG/java10.jpg" alt="Imagen 9" />
                    <img className="C3IMG" src="Estilos/IMG/python9.webp" alt="Imagen 10" />
                    <img className="C3IMG" src="Estilos/IMG/css9.webp" alt="Imagen11" />
                    <img className="C3IMG" src="Estilos/IMG/html9.jpg" alt="Imagen12" />
                </div>
                <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            </div>

            <p className="CDtitle4">Mas usados</p>
            <div className="slider-container">
                <div className="slider">
                    <img className="C4IMG" src="Estilos/IMG/java11.jpg" alt="Imagen 1" />
                    <img className="C4IMG" src="Estilos/IMG/java10.jpg" alt="Imagen 2" />
                    <img className="C4IMG" src="Estilos/IMG/css10.avif" alt="Imagen 3" />
                    <img className="C4IMG" src="Estilos/IMG/html10.jpeg" alt="Imagen 4" />
                    <img className="C4IMG" src="Estilos/IMG/java12.png" alt="Imagen 5" />
                    <img className="C4IMG" src="Estilos/IMG/java11.jpg" alt="Imagen 6" />
                    <img className="C4IMG" src="Estilos/IMG/css11.png" alt="Imagen 7" />
                    <img className="C4IMG" src="Estilos/IMG/html11.png" alt="Imagen 8" />
                    <img className="C4IMG" src="Estilos/IMG/java13.webp" alt="Imagen 9" />
                    <img className="C4IMG" src="Estilos/IMG/python12.webp" alt="Imagen 10" />
                    <img className="C4IMG" src="Estilos/IMG/css12.jpeg" alt="Imagen11" />
                    <img className="C4IMG" src="Estilos/IMG/html12.jpg" alt="Imagen12" />
                </div>
                <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            </div>

            <p className="CDtitle5">Lo nuevo</p>
            <div className="slider-container">
                <div className="slider">
                    <img className="C5IMG" src="Estilos/IMG/java13.webp" alt="Imagen 1" />
                    <img className="C5IMG" src="Estilos/IMG/java12.png" alt="Imagen 2" />
                    <img className="C5IMG" src="Estilos/IMG/css13.webp" alt="Imagen 3" />
                    <img className="C5IMG" src="Estilos/IMG/html13.webp" alt="Imagen 4" />
                    <img className="C5IMG" src="Estilos/IMG/java14.jpg" alt="Imagen 5" />
                    <img className="C5IMG" src="Estilos/IMG/java13.webp" alt="Imagen 6" />
                    <img className="C5IMG" src="Estilos/IMG/css14.jpg" alt="Imagen 7" />
                    <img className="C5IMG" src="Estilos/IMG/html14.jpg" alt="Imagen 8" />
                    <img className="C5IMG" src="Estilos/IMG/java15.png" alt="Imagen 9" />
                    <img className="C5IMG" src="Estilos/IMG/python14.jpg" alt="Imagen 10" />
                    <img className="C5IMG" src="Estilos/IMG/css15.png" alt="Imagen11" />
                    <img className="C5IMG" src="Estilos/IMG/html15.jpeg" alt="Imagen12" />
                </div>
                <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            </div>
        </div>
    );
}

export default Cursos;