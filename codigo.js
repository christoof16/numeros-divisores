let salir = prompt("desea salir escriba SALIR para continuar presione otra tecla");

while(salir != "salir" && salir != "SALIR"){

    let opcion = parseInt(prompt("ingrese una opcion 1-sumar 2-restar 3-multiplicar 4-dividir"));

    if(opcion == 1){
        console.log("SUMA");
        document.write("SUMA<br>");
    
        function suma(a,b){
            return a+b;   
        }
    
        let numero1 = parseInt(prompt("ingrese el primer numero"));
        let numero2 = parseInt(prompt("ingrese el segundo numero")); 
    
        while(isNaN(numero1)|| isNaN(numero2)){
             numero1 = parseInt(prompt("ingrese el primer numero"));
             numero2 = parseInt(prompt("ingrese el segundo numero")); 
         }
    
        let totalSuma = suma(numero1,numero2);
        console.log(totalSuma);
        document.write(totalSuma+"<br><br>");
    }
    else if(opcion == 2){
        console.log("RESTA");
        document.write("RESTA<br>");

        let numero1 = parseInt(prompt("ingrese el primer numero"));
        let numero2 = parseInt(prompt("ingrese el segundo numero")); 
    
        while(isNaN(numero1)|| isNaN(numero2)){
            numero1 = parseInt(prompt("ingrese el primer numero"));
            numero2 = parseInt(prompt("ingrese el segundo numero")); 
        }
    
        function resta(a,b){
            return a-b;
        }
    
        let totalResta = resta(numero1,numero2);
        console.log(totalResta);
        document.write(totalResta+"<br><br>");
    }
    else if(opcion == 3){
        console.log("MULTIPLICACION");
        document.write("MULTIPLICACION<br>");

        let numero1 = parseInt(prompt("ingrese el primer numero"));
        let numero2 = parseInt(prompt("ingrese el segundo numero")); 
    
        while(isNaN(numero1)|| isNaN(numero2)){
            numero1 = parseInt(prompt("ingrese el primer numero"));
            numero2 = parseInt(prompt("ingrese el segundo numero")); 
        }
    
        function multiplicacion(a,b){
          return a*b;
        }
        let totalMultiplicacion = multiplicacion(numero1,numero2);
        console.log(totalMultiplicacion);
        document.write(totalMultiplicacion+"<br><br>");
    }
    else if(opcion == 4){
        console.log("DIVISION");
        document.write("DIVISION<br>");

        let numero1 = parseInt(prompt("ingrese el primer numero"));
        let numero2 = parseInt(prompt("ingrese el segundo numero")); 
    
        while(isNaN(numero1)|| isNaN(numero2)){
            numero1 = parseInt(prompt("ingrese un numero valido"));
            numero2 = parseInt(prompt("ingrese el segundo numero")); 
        }
        
        function division (a,b){
          return a/b;
        }
        let totalDivision = division(numero1,numero2);
        console.log(totalDivision);
        document.write(totalDivision+"<br><br>");
    }
    else{
        console.log("opcion no disponible escriba un valor correcto");
        document.write("opcion no disponible<br>");
    }
    
    salir = prompt("para salir escriba SALIR para continuar presione otra tecla");

}

