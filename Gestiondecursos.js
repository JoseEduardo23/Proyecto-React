import React, { useState } from 'react';
import './Estilos/style.css';

const GestiondeCursos = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');

  const renderCourses = () => {
    return courses.map((course, index) => (
      <div key={index} className={`C${index + 1}`}>
        <img src="Estilos/IMG/Java curso.jpeg" className="PC1" alt="Curso de Java" />
        <p className="cursotxt1">{course.name} HORAS: {course.hours}H</p>
        <button className="BM1" onClick={() => editCourse(index)}>Modificar</button>
        <button className="BE1" onClick={() => deleteCourse(index)}>Eliminar</button>
      </div>
    ));
  };

  const editCourse = (index) => {
    const newName = prompt('Ingrese el nuevo nombre del curso:', courses[index].name);
    const newHours = prompt('Ingrese el nuevo número de horas:', courses[index].hours);
    if (newName !== null && newHours !== null) {
      const updatedCourses = [...courses];
      updatedCourses[index] = { name: newName, hours: newHours };
      setCourses(updatedCourses);
    }
  };

  const deleteCourse = (index) => {
    if (window.confirm('¿Está seguro de que desea eliminar este curso?')) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  const handleAddCourse = () => {
    const courseHours = prompt('Ingrese el número de horas del curso:');
    if (courseName && courseHours) {
      setCourses([...courses, { name: courseName, hours: courseHours }]);
      setCourseName('');
    }
  };

  const handleSaveCourses = () => {
    alert('Cursos guardados (en este ejemplo, no se realiza ninguna acción).');
  };

  return (
    <div>
      <section className="Barra">
        <button className="BCur">CURSOS</button>
        <button className="Bnot">NOTIFICACIONES</button>
      </section>
      <nav className="Navegacion">
        <button className="BG" onClick={handleSaveCourses}>Guardar</button>
        <button className="BA" onClick={handleAddCourse}>Añadir</button>
        <input
          className="Data"
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Ingrese el nombre del curso..."
        />
      </nav>    
    
      <section className="CursosMod" id="coursesSection">
        {renderCourses()}
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
              <li><a href="#">Cursos disponibles</a></li>
              <li><a href="#">Información</a></li>
              <li><a href="#">Nuevo</a></li>
              <li><a href="#">Declaraciones</a></li>
              <li><a href="#">Contacto</a></li>
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

export default GestiondeCursos;