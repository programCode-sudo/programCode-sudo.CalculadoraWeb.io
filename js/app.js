let pantalla = "";

function Agregar(text) {
  switch (text) {
    case "C":
      pantalla = "";
      document.getElementById("pantalla").value=pantalla;
      break;
    default:
      pantalla += text;
      document.getElementById("pantalla").value = pantalla;
  }
}

function Calcular(){
    try {
        // Intenta evaluar la expresión en pantalla
        let resultado = eval(pantalla);
        pantalla = resultado.toString();
        document.getElementById("pantalla").value = pantalla;
    } catch (error) {
        // Si hay un error, muestra "Log ERR"
        pantalla="Log ERR";
        document.getElementById("pantalla").value = pantalla;
        pantalla="";
    }
}

function Borrar(){
   pantalla=pantalla.slice(0,-1);
   document.getElementById("pantalla").value = pantalla;
}