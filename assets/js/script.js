var color0 = #9cbdde;
var color1 = #cf3300;
var color2 = #008000;
var color3 = #ffaf00;
var color4 = #006fb1;
var colors = [color0, color1, color2, color3, color4];

var navTags = ["home", "about", "portfolio", "blog"];

var changeNavColor = function() {
    for id in navTags {
        var x = document.getElementById('id');
        x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
};

$(document).ready(function() {
    changeNavColor();
});
