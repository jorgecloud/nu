const user = document.getElementById("user");
var estratega = document.getElementById("estratega");
var cashT = document.getElementById("cashT");
var preciOne = document.getElementById("preciOne");
var rendimiento = document.getElementById("rendimiento");
var primerPrecio = document.getElementById("primerPrecio");
var precioViaje = document.getElementById("precioViaje");
var porcenGoal1 = document.getElementById("porcenGoal1");
var namegoal = document.getElementById("namegoal");
var namegoal2 = document.getElementById("namegoal2");
var primerpreciog2 = document.getElementById("primerpreciog2");
var preciomac = document.getElementById("preciomac");
var primerpreciog2 = document.getElementById("primerpreciog2");
var porcenGoal2 = document.getElementById("porcenGoal2");

var usuario = {
  name: "Camila",
  saldo: "1570000",
  saldominimo: "1000000",
  inversion: "1600000",
};

var travel = {
  name: "viaje a Islas Canarias",
  valor: "8000000",
};

var macp = {
  name: "macbook pro",
  valor: "7000000",
};

user.innerHTML = `${usuario.name}`;

var plata = new Intl.NumberFormat().format(usuario.saldo);
var topeintl = new Intl.NumberFormat().format(usuario.saldominimo);
var inversionOne = new Intl.NumberFormat().format(usuario.inversion);
var porcent = Math.floor(usuario.inversion * 2) / 100;
var estimadoVije = parseInt(usuario.inversion) + parseInt(porcent);
var totalpocentaje = (usuario.inversion / travel.valor) * 100;

if (usuario.inversion < macp.valor) {
  primerpreciog2.innerHTML = 0;
}

if (usuario.inversion >= 1000000) {
  estratega.innerHTML = "Eres Estratega";
}

cashT.innerHTML = `$ ${plata}`;
preciOne.innerHTML = `${inversionOne}`;
rendimiento.innerHTML = new Intl.NumberFormat().format(porcent);

primerPrecio.innerHTML = new Intl.NumberFormat().format(estimadoVije);
precioViaje.innerHTML = new Intl.NumberFormat().format(travel.valor);
porcenGoal1.innerHTML = `${totalpocentaje} % `;
porcenGoal2.innerHTML = "0%";
namegoal.innerHTML = `${travel.name}`;
namegoal2.innerHTML = `${macp.name}`;
preciomac.innerHTML = `${macp.valor}`;
