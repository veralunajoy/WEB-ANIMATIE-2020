/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/* ELEMENTEN SELECTEREN */
var button = document.querySelector(".kleurenKnop");
var orange = document.querySelectorAll(".oranjeA");
var darkOrange = document.querySelectorAll(".oranjeB");
var green = document.querySelectorAll(".groenA");
var purple = document.querySelectorAll(".paarsA");
var darkPurple = document.querySelectorAll(".paarsB");
var red = document.querySelectorAll(".roodA");
var darkRed = document.querySelectorAll(".roodB");
var yellow = document.querySelectorAll(".geelA");
var darkYellow = document.querySelectorAll(".geelB");
var pink = document.querySelectorAll(".rozeA");
var darkPink = document.querySelectorAll(".rozeB");
var slightDarkPink = document.querySelectorAll(".rozeC");

/* CSS AANPASSEN, CLASS TOEVOEGEN */
function toggle() {
    orange.forEach(element => element.classList.toggle('oranje'));
    darkOrange.forEach(element => element.classList.toggle('donkerOranje'));
    green.forEach(element => element.classList.toggle('groen'));
    purple.forEach(element => element.classList.toggle('paars'));
    darkPurple.forEach(element => element.classList.toggle('donkerPaars'));
    red.forEach(element => element.classList.toggle('rood'));
    darkRed.forEach(element => element.classList.toggle('donkerRood'));
    yellow.forEach(element => element.classList.toggle('geel'));
    darkYellow.forEach(element => element.classList.toggle('donkerGeel'));
    pink.forEach(element => element.classList.toggle('roze'));
    slightDarkPink.forEach(element => element.classList.toggle('middenRoze'));
    darkPink.forEach(element => element.classList.toggle('donkerRoze'));
}

/*LUISTEREN NAAR EVENT*/
button.addEventListener('click', toggle);





