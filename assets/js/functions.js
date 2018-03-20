// Mascara

function mascaraTexto(assunto, mascara){   
   var campo, valor, i, tam, caracter;   
    
   if (document.all) // Internet Explorer   
    campo = assunto.srcElement;   
   else // Nestcape, Mozzila   
     campo= assunto.target;   
      
   valor = campo.value;   
   tam = valor.length;   
    
   for(i=0;i<mascara.length;i++){   
    caracter = mascara.charAt(i);   
    if(caracter!="9")    
     if(i<tam & caracter!=valor.charAt(i))   
      campo.value = valor.substring(0,i) + caracter + valor.substring(i,tam);   
          
   }   
  
}

// Validar CPF

function ValidaCPF(cpf) {
  d=document.inscricao;
  cpf=cpf.replace("-", "")
  cpf=cpf.replace(".", "")
  cpf=cpf.replace(".", "")

  if(cpf!=""){
  if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
  {
    d.cpf.value='';
    $('#cpf_invalido').css('display', 'block');
    return false;
  }
  add = 0;
  for (i=0; i < 9; i ++)
  add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
  rev = 0;
  if (rev != parseInt(cpf.charAt(9)))
  {
    d.cpf.value='';
    $('#cpf_invalido').css('display', 'block');
    return false;
  }
  add = 0;
  for (i = 0; i < 10; i ++)
  add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
  rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
  {
    d.cpf.value='';
    $('#cpf_invalido').css('display', 'block');
    return false;
  }
  return true;
  }
}

// Verifica email

function VerificaEmail(campo){
  if((campo.value.indexOf(".")==-1 || campo.value.indexOf("@")==-1) && campo.value != ""){
    $(document).ready(function() {
      $('#email_invalido').css('display', 'block');
    });
    campo.value='';
  }
}

// Bloqueia letras

function BloquearLetras(dom,tipo){
  switch(tipo){
    case'num':var regex=/[A-Za-z]/g;break;
    case'text':var regex=/\d/g;break;
  }
  dom.value=dom.value.replace(regex,'');
}