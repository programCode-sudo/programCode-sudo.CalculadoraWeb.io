let pantalla = "";
var popSound = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3');
var tapSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
var equalSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')
var errorSound = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/spring.mp3');
var deleteAllSound = new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/db/Crush8-Bit.ogg');


function Agregar(text) {
  switch (text) {
    case "C":
      pantalla = "";
      document.getElementById("pantalla").value=pantalla;
      deleteAllSound.play();
      break;
    default:
      pantalla += text;
      document.getElementById("pantalla").value = pantalla;
      tapSound.play();
  }
}

function Calcular(){
    try {
        // Intenta evaluar la expresión en pantalla
        let resultado = eval(pantalla);
        pantalla = resultado.toString();
        document.getElementById("pantalla").value = pantalla;
        equalSound.play();
    } catch (error) {
        // Si hay un error, muestra "Log ERR"
        errorSound.play();
        pantalla="Log ERR";
        document.getElementById("pantalla").value = pantalla;
        pantalla="";
    }
}

function Borrar(){
   popSound.play();
   pantalla=pantalla.slice(0,-1);
   document.getElementById("pantalla").value = pantalla;
}


