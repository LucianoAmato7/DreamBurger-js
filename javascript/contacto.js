// EMAIL JS
// ENVIA UN EMAIL A MI DIRECCION DE CORREO CON EL FORMULARIO UBICADO EN LA SECCION "CONTACTO.HTML".
// TENER EN CUENTA QUE ENVIA UN EMAIL REAL. POR FAVOR NO INGRESAR DATOS PERSONALES. (SI DESEA TESTEARLO, NO TENGO PROBLEMAS EN RECIBIR EMAILS.)

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'ENVIANDO...';

   const serviceID = 'default_service';
   const templateID = 'template_r4ybkaf';

   emailjs.sendForm(serviceID, templateID, this)

    .then(() => {

      btn.value = 'ENVIAR';

        Swal.fire({   //SWEET ALERT 2 - LIBRERIA
            
          title: 'Mensaje enviado',
          text: 'Te responderemos a la brevedad',
          icon: 'success',
          customClass: {confirmButton: 'confirmBtn'}, 

        
        })

    }, (error) => {

      btn.value = 'ENVIAR';

        Swal.fire({   //SWEET ALERT 2 - LIBRERIA

          title: 'No se ha podido enviar el mensaje, intentalo más tarde',
          text: JSON.stringify(error),
          icon: 'warning',
          customClass: {confirmButton: 'confirmBtn'}, 

    
        })

    });

});