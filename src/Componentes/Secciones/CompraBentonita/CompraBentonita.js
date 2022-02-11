import * as React from 'react';
import '../CompraBentonita/compraBentonita.css'
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const CompraBentonita = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
          "service_e9xmjxh",
          "template_yav7wvi",
          e.target,
          "user_UZZRkDhqNS7u2f3QF9aOT"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
      }

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <section className='compra-bentonita' id='contacto'>
            <div className='container-compra-bentonita'>
                <div className='texto-compra-bentonita'>
            <h3 className='compra-bentonita-title'>Comprar Bentonita</h3>
            <p className='compra-bentonita-data'>Contamos con la experiencia y la logística para enviar el producto por vía terrestre, marítima y ferroviaria.</p>
            <p className='compra-bentonita-data'>¡Completá el formulario y contactanos!</p>
             </div>
             <div className='formulario-compra-bentonita'>

             <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1/* , width: '50vw' */ },
      }}
      noValidate
      autoComplete="off"
      id='formulario'
      onSubmit={sendEmail} 
    >
       
      <div>
      <TextField 
        id="outlined-basic"
        name='nombre'
         label="Nombre"
         fullWidth
          variant="outlined"
          style={{
            backgroundColor: "#fff"
        }}
           />

        <TextField
          id="outlined-basic"
          label="Correo electrónico"
          name='mail'
           variant="outlined"
           fullWidth
           type='email'
           style={{
            backgroundColor: "#fff"
        }}
        />
        <TextField
         id="outlined-basic"
         label="Teléfono"
         name='telefono'
         type='number'
         fullWidth
          variant="outlined"
          style={{
            backgroundColor: "#fff"
        }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Mensaje"
          name='msg'
          multiline
          fullWidth
          rows={4}
          style={{
            backgroundColor: "#fff"
        }}
        />
         <Button variant="secondary" size="lg" className='button-compra-bentonita'
         type='submit'>
                 Enviar mensaje
             </Button>
      </div>
    
    </Box>

             </div>
             </div>
        </section>
    );
};

export default CompraBentonita;