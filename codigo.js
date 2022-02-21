let salir = prompt("desea salir escriba SALIR si no presione otra tecla");

while(salir != "salir" && salir != "SALIR"){

let numero1 = parseInt(prompt("ingrese un numero"));
let i=1;

while(isNaN(numero1)){
  numero1 = parseInt(prompt("numero invalido, ingrese un numero"));
}

document.write("los numeros divisibles del "+ numero1 +" son <br>");

if(numero1 == 0){
    console.log("el 0 no es un numero divisor");
    document.write("el 0 no es un numero divisor<br>");
}

while(numero1 >= i){

  let total =0;
  total = numero1/i;


  if(total % 1 == 0){
    console.log(total);
    document.write(total+"<br>");
  }
  
  i++; 
}

salir = prompt("desea salir escriba SALIR si no presione otra tecla");
console.log("------------------------------------------------------");
document.write("---------------------------------------------------<br>");
}

