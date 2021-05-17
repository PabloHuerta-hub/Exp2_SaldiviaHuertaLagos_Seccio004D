$("#opciones").ready(function(){
   document.getElementById("btnmorado").onclick=morado;
   document.getElementById("btncafe").onclick=cafe;
   document.getElementById("btnnegro").onclick=negro;
   function morado(morado){
   document.getElementById('navbar').classList.toggle('morado');
   document.getElementById('navbar').classList.toggle('moradoletras');
   document.getElementById('formulario').classList.toggle('morado');
   document.getElementById('footer').classList.toggle('morado');
   document.getElementById('menu').classList.toggle('morado');
   document.getElementById('letrasfooter').classList.toggle('moradoletras');
   document.getElementById('formularioletras').classList.toggle('moradoletras');
   document.getElementById('headers').classList.toggle('headersmorados');
   document.getElementById('boton').classList.toggle('botonmorado');
   document.getElementById('boton1').classList.toggle('botonmorado');
   document.getElementById('letrasnavegacion1').classList.toggle('moradoletras');
   document.getElementById('letrasnavegacion2').classList.toggle('moradoletras');
   document.getElementById('letrasnavegacion3').classList.toggle('moradoletras');
   document.getElementById('letrasnavegacion4').classList.toggle('moradoletras');
   document.getElementById('letrasnavegacion5').classList.toggle('moradoletras');
   document.getElementById('letrasnavegacion6').classList.toggle('moradoletras');
   document.getElementById('letrasnavegacion7').classList.toggle('moradoletras');
   document.getElementById('letrasnavegacion8').classList.toggle('moradoletras');

   };
   
   function cafe(cafe){
    document.getElementById('navbar').classList.toggle('cafe');
    document.getElementById('navbar').classList.toggle('cafeletras');
    document.getElementById('formulario').classList.toggle('cafe');
    document.getElementById('footer').classList.toggle('cafe');
    document.getElementById('menu').classList.toggle('cafe');
    document.getElementById('letrasfooter').classList.toggle('cafeletras');
    document.getElementById('formularioletras').classList.toggle('cafeletras',);
    document.getElementById('headers').classList.toggle('headerscafe');
    document.getElementById('boton').classList.toggle('botoncafe');
    document.getElementById('boton1').classList.toggle('botoncafe');
    document.getElementById('letrasnavegacion1').classList.toggle('cafeletras');
    document.getElementById('letrasnavegacion2').classList.toggle('cafeletras');
    document.getElementById('letrasnavegacion3').classList.toggle('cafeletras');
    document.getElementById('letrasnavegacion4').classList.toggle('cafeletras');
    document.getElementById('letrasnavegacion5').classList.toggle('cafeletras');
    document.getElementById('letrasnavegacion6').classList.toggle('cafeletras');
    document.getElementById('letrasnavegacion7').classList.toggle('cafeletras');
    document.getElementById('letrasnavegacion8').classList.toggle('cafeletras');
   };
  
   function negro(negro){
    document.getElementById('navbar').classList.toggle('fondonegro');
    document.getElementById('navbar').classList.toggle('letraschicasnegro');
    document.getElementById('formulario').classList.toggle('fondonegro');
    document.getElementById('footer').classList.toggle('fondonegro');
    document.getElementById('menu').classList.toggle('fondonegro');
    document.getElementById('letrasfooter').classList.toggle('letraschicasnegro');
    document.getElementById('formularioletras').classList.toggle('letraschicasnegro');
    document.getElementById('headers').classList.toggle('headersnegro');
    document.getElementById('boton').classList.toggle('botonnegro');
    document.getElementById('boton1').classList.toggle('botonnegro');
    document.getElementById('letrasnavegacion1').classList.toggle('letraschicasnegro');
    document.getElementById('letrasnavegacion2').classList.toggle('letraschicasnegro');
    document.getElementById('letrasnavegacion3').classList.toggle('letraschicasnegro');
    document.getElementById('letrasnavegacion4').classList.toggle('letraschicasnegro');
    document.getElementById('letrasnavegacion5').classList.toggle('letraschicasnegro');
    document.getElementById('letrasnavegacion6').classList.toggle('letraschicasnegro');
    document.getElementById('letrasnavegacion7').classList.toggle('letraschicasnegro');
    document.getElementById('letrasnavegacion8').classList.toggle('letraschicasnegro');
   };

});

function cambiarcolores(x){
   valor=console.log(x.value);
   if(valor="morado"){
      document.getElementById('navbar').classList.toggle('morado',true);
      document.getElementById('navbar').classList.toggle('moradoletras',true);
      document.getElementById('formulario').classList.toggle('morado',true);
      document.getElementById('footer').classList.toggle('morado',true);
      document.getElementById('menu').classList.toggle('morado',true);
      document.getElementById('letrasfooter').classList.toggle('moradoletras',true);
      document.getElementById('formularioletras').classList.toggle('moradoletras',true);
      document.getElementById('headers').classList.toggle('headersmorados',true);
      document.getElementById('boton').classList.toggle('botonmorado',true);
      document.getElementById('boton1').classList.toggle('botonmorado',true);
      document.getElementById('letrasnavegacion1').classList.toggle('moradoletras',true);
      document.getElementById('letrasnavegacion2').classList.toggle('moradoletras',true);
      document.getElementById('letrasnavegacion3').classList.toggle('moradoletras',true);
      document.getElementById('letrasnavegacion4').classList.toggle('moradoletras',true);
      document.getElementById('letrasnavegacion5').classList.toggle('moradoletras',true);
      document.getElementById('letrasnavegacion6').classList.toggle('moradoletras',true);
      document.getElementById('letrasnavegacion7').classList.toggle('moradoletras',true);
      document.getElementById('letrasnavegacion8').classList.toggle('moradoletras',true);
      

   }
  
   else if(valor="cafe"){
         document.getElementById('navbar').classList.toggle('cafe',true);
         document.getElementById('navbar').classList.toggle('cafeletras',true);
         document.getElementById('formulario').classList.toggle('cafe,true');
         document.getElementById('footer').classList.toggle('cafe',true);
         document.getElementById('menu').classList.toggle('cafe',true);
         document.getElementById('letrasfooter').classList.toggle('cafeletras',true);
         document.getElementById('formularioletras').classList.toggle('cafeletras',true);
         document.getElementById('headers').classList.toggle('headerscafe',true);
         document.getElementById('boton').classList.toggle('botoncafe',true);
         document.getElementById('boton1').classList.toggle('botoncafe',true);
         document.getElementById('letrasnavegacion1').classList.toggle('cafeletras',true);
         document.getElementById('letrasnavegacion2').classList.toggle('cafeletras',true);
         document.getElementById('letrasnavegacion3').classList.toggle('cafeletras',true);
         document.getElementById('letrasnavegacion4').classList.toggle('cafeletras',true);
         document.getElementById('letrasnavegacion5').classList.toggle('cafeletras',true);
         document.getElementById('letrasnavegacion6').classList.toggle('cafeletras',true);
         document.getElementById('letrasnavegacion7').classList.toggle('cafeletras',true);
         document.getElementById('letrasnavegacion8').classList.toggle('cafeletras',true);
         document.getElementById('navbar').classList.toggle('morado',false);
         document.getElementById('navbar').classList.toggle('moradoletras',false);
         document.getElementById('formulario').classList.toggle('morado',false);
         document.getElementById('footer').classList.toggle('morado',false);
         document.getElementById('menu').classList.toggle('morado',false);
         document.getElementById('letrasfooter').classList.toggle('moradoletras',false);
         document.getElementById('formularioletras').classList.toggle('moradoletras',false);
         document.getElementById('headers').classList.toggle('headersmorados',false);
         document.getElementById('boton').classList.toggle('botonmorado',false);
         document.getElementById('boton1').classList.toggle('botonmorado',false);
         document.getElementById('letrasnavegacion1').classList.toggle('moradoletras',false);
         document.getElementById('letrasnavegacion2').classList.toggle('moradoletras',false);
         document.getElementById('letrasnavegacion3').classList.toggle('moradoletras',false);
         document.getElementById('letrasnavegacion4').classList.toggle('moradoletras',false);
         document.getElementById('letrasnavegacion5').classList.toggle('moradoletras',false);
         document.getElementById('letrasnavegacion6').classList.toggle('moradoletras',false);
         document.getElementById('letrasnavegacion7').classList.toggle('moradoletras',false);
         document.getElementById('letrasnavegacion8').classList.toggle('moradoletras',false);
   
   
   }
   else{
         document.getElementById('navbar').classList.toggle('fondonegro');
         document.getElementById('navbar').classList.toggle('letraschicasnegro');
         document.getElementById('formulario').classList.toggle('fondonegro');
         document.getElementById('footer').classList.toggle('fondonegro');
         document.getElementById('menu').classList.toggle('fondonegro');
         document.getElementById('letrasfooter').classList.toggle('letraschicasnegro');
         document.getElementById('formularioletras').classList.toggle('letraschicasnegro');
         document.getElementById('headers').classList.toggle('headersnegro');
         document.getElementById('boton').classList.toggle('botonnegro');
         document.getElementById('boton1').classList.toggle('botonnegro');
         document.getElementById('letrasnavegacion1').classList.toggle('letraschicasnegro');
         document.getElementById('letrasnavegacion2').classList.toggle('letraschicasnegro');
         document.getElementById('letrasnavegacion3').classList.toggle('letraschicasnegro');
         document.getElementById('letrasnavegacion4').classList.toggle('letraschicasnegro');
         document.getElementById('letrasnavegacion5').classList.toggle('letraschicasnegro');
         document.getElementById('letrasnavegacion6').classList.toggle('letraschicasnegro');
         document.getElementById('letrasnavegacion7').classList.toggle('letraschicasnegro');
         document.getElementById('letrasnavegacion8').classList.toggle('letraschicasnegro');

   }

};
function validacion()
{
   nom= document.getElementById('nom').value;
   ape = document.getElementById('ape').value; 
   user = document.getElementById('user').value;
   dire = document.getElementById('direccion').value;
   email=document.getElementById('email').value;
   pass=document.getElementById('pass').value;
   if(nom == null || nom.length==0 || /^\s+$/.test(nom))
   {
       alert('Debe ingresar un nombre');
       document.getElementById('nom').value="";
       document.datos.nom.focus();
       return false;
   }
   
   if(ape == null || ape.length == 0 || /^\s+$/.test(ape))
    {
       alert('Debe ingresar un apellido válido');
       document.getElementById('ape').value="";
       document.datos.ape.focus();
       return false;
   }

  if(user == null || user.length == 0 || /^\s+$/.test(user))
  {
     alert('Debe ingresar un usuario válido');
     document.getElementById('user').value="";
     document.datos.user.focus();
     return false;
 }
  
 
  if(dire == null || dire.length == 0 || /^\s+$/.test(dire))
    {
       alert('Debe ingresar una dirección válida');
       document.getElementById('direccion').value="";
       document.datos.dire.focus();
       return false;
   }

   if(email == null || email.length == 0 || /^\s+$/.test(email))
    {
       alert('Debe ingresar un correo válido');
       document.getElementById('direccion').value="";
       document.datos.email.focus();
       return false;
   }
   if(pass == null || pass.length == 0 || /^\s+$/.test(pass))
    {
       alert('Debe ingresar una contraseña válida');
       document.getElementById('pass').value="";
       document.datos.pass.focus();
       return false;
   }
   return alert('Te has registrado con exito');
}



