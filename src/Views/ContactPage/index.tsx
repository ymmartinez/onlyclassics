import React from 'react';
import './style.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      mensaje: formData.get('mensaje'),
    };

    fetch('/api/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Mensaje enviado con éxito!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error enviando el mensaje.');
      });
  };

  return (
    <div className="contact-page border-round-xl w-full">
      <div className="contact-page-header">
        <h2>Potencia tu Emprendimiento!</h2>
        <p>¿Quieres poner tu publicidad en nuestra página web? ¡Contáctanos ahora!</p>
      </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="p-float-label mt-5">
            <InputText
              className='border-round-xl w-full'/>
              <label>Nombre completo</label>
          </span>
          <span className="p-float-label mt-5">
            <InputText
              className='border-round-xl w-full'/>
              <label>Email</label>
          </span>
          <span className="p-float-label mt-5">
            <InputTextarea
            className='border-round-xl w-full'
            rows={5}
            autoResize={false}
            />
              <label>Descripción</label>
          </span>
            <Button
            label='Enviar'
            icon="pi pi-send"
            className="p-button-text mt-4"
            />
        </form>
    </div>
  );
}

export default ContactPage;