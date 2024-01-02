import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    fotoDocumento: '',
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);

    try {
      const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dzy5mqkpq'; 
      if (!cloudinaryUrl) {
        console.error('La variable CLOUDINARY_URL no está definida.');
        return;
      }

      
      const response = await axios.post(cloudinaryUrl, formData);
      const imageUrl = response.data.secure_url;

     
      setFormData({
        fotoDocumento: imageUrl,
      });
    } catch (error) {
      console.error('Error al subir la imagen a Cloudinary:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="fotoDocumento">
        <Form.Label>Foto Documento:</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          name="fotoDocumento"
          onChange={handleImageChange}
          required
        />
      </Form.Group>

      
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default YourFormComponent;
