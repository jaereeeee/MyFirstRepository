document.getElementById('num').innerHTML = 12345;
document.getElementById('deci').innerHTML = 12.345;

document.getElementById('DoubleQ').innerHTML = "This is a string in double quotes";
document.getElementById('SingleQ').innerHTML = 'This is a string in single quotes';

let greeting = "Hello, Welcome to JavaScript!";
const pi = 3.14159;
var isActive = true;

document.getElementById('vlet').innerHTML = greeting;
document.getElementById('vconst').innerHTML = pi;
document.getElementById('vvar').innerHTML = isActive;

let august = 8;
const september = 9;
var october = 10;

document.getElementById('august').innerHTML = august;
document.getElementById('september').innerHTML = september;
document.getElementById('october').innerHTML = october;

function changeValues() {
    august = "80";
    october = "100";
    document.getElementById('august').innerHTML = august;nbcvx 
    document.getElementById('october').innerHTML = october;
}