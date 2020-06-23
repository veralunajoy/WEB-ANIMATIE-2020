/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/* ELEMENTEN SELECTEREN */
var button = document.querySelector(".kleurenKnop");
var orange = document.querySelector(".oranjeA");
var darkOrange = document.querySelector(".oranjeB");
var green = document.querySelector(".groenA");
var purple = document.querySelector(".paarsA");
var darkPurple = document.querySelector(".paarsB");
var red = document.querySelector(".roodA");
var darkRed = document.querySelector(".roodB");
var yellow = document.querySelector(".geelA");
var darkYellow = document.querySelector(".geelB");
var pink = document.querySelector(".rozeA");
var darkPink = document.querySelector(".rozeB");
var slightDarkPink = document.querySelector(".rozeC");

/* CSS AANPASSEN, CLASS TOEVOEGEN */
function toggle() {
    orange.classList.toggle('oranje');
    darkOrange.classList.toggle('donkerOranje');
    green.classList.toggle('groen');
    purple.classList.toggle('paars');
    darkPurple.classList.toggle('donkerPaars');
    red.classList.toggle('rood');
    darkRed.classList.toggle('donkerRood');
    yellow.classList.toggle('geel');
    darkYellow.classList.toggle('donkerGeel');
    pink.classList.toggle('roze');
    slightDarkPink.classList.toggle('middenRoze');
    darkPink.classList.toggle('donkerRoze');
}

/*LUISTEREN NAAR EVENT*/
button.addEventListener('click', toggle);