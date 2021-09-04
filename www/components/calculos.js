// This is a JavaScript file

window.onload = function(){
  const valor1 = document.querySelector("#valor1");

  const valor2 = document.querySelector("#valor2");

  const valor3 = document.querySelector("#valor3");

  const valor4 = document.querySelector("#valor4");

  const valor5 = document.querySelector("#valor5");

  const valor6 = document.querySelector("#valor6");
  
  const somar = document.querySelector("#somar");

  somar.addEventListener("click", function(){
     let resultado = valor1.value * valor2.value * valor3.value * valor4.value * valor5.value * valor6.value;
     document.querySelector("#result").value = resultado;
  });
}