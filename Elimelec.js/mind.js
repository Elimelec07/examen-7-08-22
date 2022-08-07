
// declarar una variable//
var sus ;

//inicializar una variable//
var sus = "juan";

//declarar y inicializar //

var jh = "elimelec";


//identificar tipo de datos//

/*"nombre"= String
"apellido"= String
"usuairio"= String
"edad" = number
"correo"= String
"mayor de edad"= Boolean
"dinero"=  number
"deudas"= number*/


//variables//

var nombre = "elimelec";
var apellido = "ricardo";
var usuairio = "ganapo";
var edad = 18;
var correo = "elimelecjoser@gmail.com";
var mayorDeEdad = false; 
var dinero =  30.000;
var deudas = 10.000;

//concadenar

console.log(`mi nombre es ${nombre} ${apellido} tengo ${edad} mi usuario es ${usuairio}`);


//dinero//

var total = dinero - deudas;

console.log(`el total de su dinero ${total} `);

//funtion//

function // palabra reservada para funtion
name// nombre que se le dara a la funtion 
(params)//parametros 
{}//parte que se va ejecutar

/*function bro() {
    alert(1+1);
    return;
}

bro();*/

//
function presentacon(nombre,apellido,edad) {

    console.log(`mi nombre es ${nombre} ${apellido} tengo ${edad} mi usuario es ${usuairio}`);
}   

presentacon("elimelec","ricardo","18");


//

var tipo = "basic";

if(tipo === "free"){
console.log("solo puedes tomar los cursos gratis");
} 
else if (tipo === "basic"){
console.log("puedes tomar casi todos los cursos durante un mes");
}
else if (tipo === "expert"){
console.log("puedes tomar casi todos los cursos durante un ano");
}
else if ( tipo === "expertPlus"){
console.log("tu y alguien mas pueden tomar casi todos los cursos durante un ano");
}

// for while  n ++;    x += n;

/*var i = 0;

while (i < 5) {
i ++;    
console.log("el valor de i es:" + i);
}

var i = 10;

while (i >= 3) {
i --;    
console.log("el valor de d es:" + i);
}
var i=;
let num1 = 10;
let num2 = 10;
const result = num1 + num2





function pregunta (numero1,numero2){

var i = prompt("cuanto es 2 + 2?")
if(i==2) {
alert("felicidades");
}else{
alert("perdiste")
}
return;

};
pregunta()
const tu = ["manzana","pera","uvas","arroz"];

function call (tu) {
    console.log(tu[1]);
}

call(tu)*/

const a = ["manzana","pera","uvas","arroz","4k"];

function call (a) {
    console.log(a)
}

call(a);