import * as React from 'react';
import { useState } from 'react';
import '../CompraBentonita/compraBentonita.css'
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert' 

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


    //validaciones
    
    //validación nombre
    const [name, setName]= useState('')
    const [leyendaName, setLeyendaName]= useState('')
    const [errorName, setErrorName] = useState('')
    const [botonName, setBotonName]= useState(false)

    //validación email
    const [mail, setMail]= useState('')
    const [leyendaMail, setLeyendaMail]= useState('')
    const [errorMail, setErrorMail] = useState('')
    const [botonMail, setBotonMail]= useState(false)
    const re= /\S+@\S+\.\S+/ // eslint-disable-line


    //validación teléfono
    const [telefono, setTelefono]= useState('')
    const [leyendaTelefono, setLeyendaTelefono]= useState('')
    const [errorTelefono, setErrorTelefono] = useState('')
    const [botonTelefono, setBotonTelefono]= useState(false)

    //validación mensaje
    const [mensaje, setMensaje]= useState('')
    const [leyendaMensaje, setLeyendaMensaje]= useState('')
    const [errorMensaje, setErrorMensaje] = useState('')
    const [botonMensaje, setBotonMensaje]= useState(false)

    //SweetAlert
    const mostrarAlerta=()=> {
      swal({
        title: "¡Su mensaje ha sido enviado con éxito!",
        text: "En breve nos pondremos en contacto contigo",
        icon: "success",
        timer: "10000"
      })
    }

    return (
        <section className='compra-bentonita' id='contacto'>
            <div className='container-compra-bentonita'>
                <div className='texto-compra-bentonita'>
            <h3 className='compra-bentonita-title'>Comprar Bentonita</h3>
            <p className='compra-bentonita-data'>Contamos con la experiencia y la logística para enviar el mineral por vía terrestre, marítima y ferroviaria.</p>
            <p className='compra-bentonita-data'>¡Completá el formulario y contactanos!</p>
             </div>
             <div className='formulario-compra-bentonita'>

             <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1},
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
        onChange={(e) => {
          setName(e.target.value);
          if(name.length>45){
            setErrorName(true);
            setLeyendaName("El nombre contiene muchos caracteres");
          }else{
              setErrorName(false);
              setLeyendaName('');
              setBotonName(true)
            }
        }}
        error={errorName}
        helperText={leyendaName}
           />

        <TextField
          id="outlined-required"
          label="Correo electrónico"
          name='mail'
           variant="outlined"
           fullWidth
           type='email'
           style={{
            backgroundColor: "#fff"
        }}
        onChange={(e) => {
          setMail(e.target.value);
          if(!re.test(mail)){
            setErrorMail(true);
            setLeyendaMail("Ingrese un correo electrónico válido");
          }else{
              setErrorMail(false);
              setLeyendaMail('');
              setBotonMail(true)
            }
        }}
        error={errorMail}
        helperText={leyendaMail}
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
        onChange={(e) => {
          setTelefono(e.target.value);
          if(telefono.length>20){
            setErrorTelefono(true);
            setLeyendaTelefono("El número de contacto tiene un máximo de 20 caracteres");
          }else{
              setErrorTelefono(false);
              setLeyendaTelefono('');
              setBotonTelefono(true)
            }
        }}
        error={errorTelefono}
        helperText={leyendaTelefono}
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
        onChange={(e) => {
          setMensaje(e.target.value);
          if(mensaje.length<20){
            setErrorMensaje(true);
            setLeyendaMensaje("El mensaje debe contener un mínimo de 20 caracteres");
          }else{
              setErrorMensaje(false);
              setLeyendaMensaje('');
              setBotonMensaje(true)
            }
        }}
        error={errorMensaje}
        helperText={leyendaMensaje}
        />
         {
         botonName===true && botonTelefono===true && botonMail===true && botonMensaje===true
           ? <Button variant="secondary" size="lg" className='button-compra-bentonita'
           type='submit' onClick={()=>mostrarAlerta()}>
                   Enviar mensaje
               </Button>
               
               :
               <Button variant="secondary" size="lg" className='button-compra-bentonita'
           type='submit' disabled>
                   Enviar mensaje
               </Button>   
            }
      
      </div>
    
      
    </Box>

             </div>
             </div>
        </section>
    );
};

export default CompraBentonita;