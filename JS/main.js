'use strict'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}