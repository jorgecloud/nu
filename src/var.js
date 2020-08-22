const hora = document.getElementById("hora");

var momento = new Date();
var hours = momento.getHours();
var secon = momento.getMinutes();
hora.innerHTML = `${hours}: ${secon}`;
