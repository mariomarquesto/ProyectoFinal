import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function Formulario() {
  const [urlImagen, setUrlImagen] = useState(null);

  const changeUploadedImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "DataCole");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dzy5mqkpq/image/upload", data);
      const imageUrl = response.data.secure_url;

      
      setUrlImagen(imageUrl);
    } catch (error) {
      console.error('Error al subir la imagen a Cloudinary:', error);
    }
  };

  return (
    <>
      <h1>Seleccionar una Imagen</h1>
      <div>
        <input type="file" accept="image/*" onChange={changeUploadedImage} />
        {urlImagen && (
          <div>
            <img src={urlImagen} alt="Imagen Subida" />
            <Button>Enviar Imagen</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Formulario;
