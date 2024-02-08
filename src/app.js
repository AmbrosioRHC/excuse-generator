/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let objeto = ["", "el llavero", "la tarea", "el computador"];
  let culpable = ["", "perro", "amigo", "hermano"];
  let accion = ["", " se comió", "rompió", "perdió"];

  let culpableAleatorio = culpable[Math.floor(Math.random() * 3 + 1)];
  let objetoAleatorio = objeto[Math.floor(Math.random() * 3 + 1)];
  let accionAleatoria = accion[Math.floor(Math.random() * 3 + 1)];

  console.log(`Mi ${culpableAleatorio} ${accionAleatoria} ${objetoAleatorio}`);
};
