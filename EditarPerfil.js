import React, { useState } from 'react';
import './EditarPerfil.css'; // Asegúrate de importar tu archivo CSS

function EditarPerfil() {
  const [profileData, setProfileData] = useState({
    nombreCompleto: '',
    nombreUsuario: '',
    correoElectronico: '',
    numeroTelefono: '',
    biografia: '',
    fotoPerfil: 'Estilos/IMG/perfilPlaceholder.png',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setProfileData({
          ...profileData,
          fotoPerfil: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (event) => {
    event.preventDefault();
    console.log('Datos del perfil guardados:', profileData);
    alert('Cambios guardados con éxito.');
  };

  const handleCancel = (event) => {
    event.preventDefault();
    if (window.confirm('¿Estás seguro de que deseas cancelar? Se perderán los cambios.')) {
      setProfileData({
        nombreCompleto: '',
        nombreUsuario: '',
        correoElectronico: '',
        numeroTelefono: '',
        biografia: '',
        fotoPerfil: 'Estilos/IMG/perfilPlaceholder.png',
      });
    }
  };

  return (
    <div className="contenedorPerfil">
      <div className="encabezadoPerfil">
        <h1>Perfil de Usuario</h1>
      </div>
      <div className="fotoPerfil">
        <img src={profileData.fotoPerfil} alt="Foto de perfil" />
        <input type="file" onChange={handlePhotoChange} />
      </div>
      <div className="detallesPerfil">
        <label htmlFor="nombreCompleto">Nombre completo:</label>
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={profileData.nombreCompleto}
          onChange={handleInputChange}
          placeholder="Nombre Completo"
        />

        <label htmlFor="nombreUsuario">Nombre de usuario:</label>
        <input
          type="text"
          id="nombreUsuario"
          name="nombreUsuario"
          value={profileData.nombreUsuario}
          onChange={handleInputChange}
          placeholder="nombreusuario"
        />

        <label htmlFor="correoElectronico">Correo electrónico:</label>
        <input
          type="email"
          id="correoElectronico"
          name="correoElectronico"
          value={profileData.correoElectronico}
          onChange={handleInputChange}
          placeholder="email@ejemplo.com"
        />

        <label htmlFor="numeroTelefono">Número de teléfono (opcional):</label>
        <input
          type="tel"
          id="numeroTelefono"
          name="numeroTelefono"
          value={profileData.numeroTelefono}
          onChange={handleInputChange}
          placeholder="123-456-7890"
        />

        <label htmlFor="biografia">Biografía (opcional):</label>
        <textarea
          id="biografia"
          name="biografia"
          rows="4"
          cols="50"
          value={profileData.biografia}
          onChange={handleInputChange}
          placeholder="Escribe algo sobre ti..."
        ></textarea>
      </div>
      <div className="accionesPerfil">
        <button type="submit" onClick={handleSave}>Guardar cambios</button>
        <button type="reset" onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
}

export default EditarPerfil;
