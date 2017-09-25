//opdracht 1 t/m 4

console.log("-----Opdracht 1 t/m 4------");

var variableone = 1;
var variabletwo = 2;
var variablethree = 3;
var variablefour = 4;
var variablefive = 5;
var variablesix = 6;
var variableseven = 7;
var variableeight = 8;
var variablenine = 9;
var variableten = 10;
var variableeleven = 11;
var variabletwelve = 12;
var variablethirteen = 13;
var variablefourteen = 14;
var variablefiveteen = 15;
var variablesixteen = true;
var variableseventeen = "Bart RechterBerg";

//opdracht 5 t/m 8
console.log("-----Opdracht 5------");

variableone = "one";
variabletwo = "two";
variabletwelve = "12";

console.log("-----Opdracht 6------");

console.log(typeof(one));

console.log("-----Opdracht 7 ------");

console.log(variablethree + variablefour);
console.log(variablefive + variabletwo);
console.log(variableeleven + variabletwelve);
console.log(variablesixteen + variablefiveteen);
console.log(variablefiveteen + variabletwelve);
console.log(typeof(variabletwo));

//opdracht 9 t/m 14

console.log("-----Opdracht 8------");
function Multiply() {
  var value = 5;
  var multiplier = 4;
  var timesthree = value * multiplier;
  return timesthree;
}
console.log(Multiply());

console.log("-----Opdracht 9------");

function VAnaam(voornaam, achternaam) {
  return voornaam + achternaam;
}
console.log(VAnaam("Kevin", " Streekstra"));

console.log("-----Opdracht 10------");

var x = function (a, b){
  return a * b;
};
var z = x(4, 3);
console.log(z);

var delen = function (a, b){
  return a / b;
};
var uitkomst = delen(60, 6);
console.log(uitkomst);

console.log("-----Opdracht 11------");

button = document.getElementById("button");
button.addEventListener('click', function(event){
  console.log('Je hebt op de knop geklikt!')
});

button.addEventListener('click', function(event){
  window.alert("Je hebt op de button geklikt!");
})

console.log("------Opdracht 12------");
(function(){
  console.log("Dit is een IIFE function");
})();

console.log("-----Opdracht 13-------");
function closure() {
    var a = 4;
    return a * a;
};
console.log(closure());

console.log("-----Opdracht 14------");

var zanger ="Bizzey";

function ShowSinger() {
  zanger = "sbmg";
  var zanger = "Lil kleine";
  console.log(zanger);
}
console.log(ShowSinger());

//opdracht 15 t/m 23

console.log("-----Opdracht 15-------");
var docenten = ["Berend", "Hjalmar", "Simon"];
console.log(length.docenten);
console.log(docenten);

var numbers = [1, 2, 3, 4];
console.log(length.numbers);
console.log(numbers);

var booleans = [true, false, true, false];
console.log(length.booleans);
console.log(booleans);

console.log("-----Opdracht 16-------");

var fruit = [];
fruit.push("Aardbei");
console.log(fruit);

console.log("------Opdracht 17------");

var fruit = ["aardbei", "appel", "banaan", "kiwi", "Sinaasappel", "Manderijn", "Grapefruit", "Framboos"];
fruit.splice(0,1);
fruit.splice(1,1);
console.log(fruit);

console.log("-----Opdracht 18------");
fruit.pop();
console.log(fruit);
console.log("De laatste soort fruit wordt weggehaald!");

console.log("-----Opdracht 19------");
fruit.shift();
console.log(fruit);
console.log("De eerste soort fruit wordt weggehaald!");
console.log("Tegenhanger van pop is shift");

console.log("-----Opdracht 20------");

var car = ["Volkswagen", "Audi", "Mercedes", "Ferrari", "Lamborghini", "Fiat", "Aston Martin", "Alfa Romeo"];
car.sort();
console.log(car);
console.log("Op alfabetische volgorde");

car.reverse();
console.log(car);
console.log("op omgekeerde volgorde");

console.log("-----Opdracht 21-----");

var points = [1, 5, 3, 2, 6 , 4];
points.sort();
console.log(points);
console.log("Nummers op volgorde");

console.log("-----Opdracht 22-----");

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits[4] = "framboos";
var citrus = fruits.slice(1, 3);
console.log(citrus);

console.log("-----Opdracht 23-----");
var clubs = new Array("Ajax", " Feyenoord", " PSV", " AZ", " Vitesse", " FC Utrecht");
console.log(clubs);

var landen =[" Nederland", " Engeland", " Spanje"];
landen.unshift("Belgie", " Duitsland");
console.log(landen);

//opdracht 24

console.log("-----Opdracht 24------");

/*button = document.getElementById("button");
button.addEventListener('click', function(event){
  console.log('Je hebt op de knop geklikt!')
});

button.addEventListener('click', function(event){
  window.alert("Je hebt op de button geklikt!");
})*/

document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Je hebt op de button geklikt en dit was de 3de EventListener.";
}

//opdracht 25 t/m 28

console.log("----Opdracht 25-----");

var mobiel = {type:" Samsung", model:" A5", kleur:" zwart", oud:" 2 jaar"};
console.log(mobiel);
var muziekoortjes = {type:" jbl", model:" oordopjes", kleur:" Zwart met oranje", oud:" 1 jaar"};
console.log(muziekoortjes);
var auto = {type:" Volkswagen", model:" passat 2007", kleur:" donkerblauw", oud:" 10 jaar"};
console.log(auto);
var jas = {type:" Woolrich", model:" lente/herfst jas", kleur:" donkerblauw", oud:" 2 jaar"};
console.log(jas);
var schoenen = {type:" adidas", model:" adidas sportschoenen", kleur:" wit", oud:" 1 jaar"};
console.log(schoenen);
var laptop = {type:" asus", model:" ROG 2285VW", kleur:" Zwart ", oud:" 2 jaar"};
console.log(laptop);
var voetbalschoenen = {type:" adidas", model:" ACE", kleur:" blauw en wit", oud:" 2 maanden"};
console.log(voetbalschoenen);
var tas = {type:" eastpak", model:" rugtas", kleur:" Zwart", oud:" 2 jaar"};
console.log(tas);var mobiel = {type:" Samsung", model:" A5", kleur:" zwart", oud:" 2 jaar"};
console.log(mobiel);
var muziekoortjes = {type:" jbl", model:" oordopjes", kleur:" Zwart met oranje", oud:" 1 jaar"};
console.log(muziekoortjes);
var muis = {type:" Logitech", model:" M720 Triathlon Multi-Device Muis", kleur:" zwart", oud:" 2 jaar"};
console.log(muis);
var Broek = {type:" Denham", model:" skinny", kleur:" donkerblauw", oud:" 1 jaar"};
console.log(Broek);

console.log("-----Opdracht 26------");
