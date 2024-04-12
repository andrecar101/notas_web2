// Promedio HTML
var html1 = document.getElementById("nota1_html");
var html2 = document.getElementById("nota2_html");
var html3 = document.getElementById("nota3_html");
var promedio_html = document.getElementById("promedio_html");

var nota1_html = +prompt("Ingrese la nota 1 de HTML: "); // + transforma la cadena en número
var nota2_html = +prompt("Ingrese la nota 2 de HTML: ");
var nota3_html = +prompt("Ingrese la nota 3 de HTML: ");

var promedio_html_final = ((nota1_html + nota2_html + nota3_html) / 3).toFixed(2);

html1.innerHTML = nota1_html;
html2.innerHTML = nota2_html;
html3.innerHTML = nota3_html;
promedio_html.innerHTML = promedio_html_final;

// Promedio CSS


var css1 = document.getElementById("nota1_css");
var css2 = document.getElementById("nota2_css");
var css3 = document.getElementById("nota3_css");
var promedio_css= document.getElementById("promedio_css");

var nota1_css = +prompt("Ingrese la nota 1 de CSS: "); // + transforma la cadena en número
var nota2_css = +prompt("Ingrese la nota 2 de CSS: ");
var nota3_css = +prompt("Ingrese la nota 3 de CSS: ");

var promedio_css_final = ((nota1_css + nota2_css + nota3_css) / 3).toFixed(2);

css1.innerHTML = nota1_css;
css2.innerHTML = nota2_css;
css3.innerHTML = nota3_css;
promedio_css.innerHTML = promedio_css_final;


// Promedio 

var js1 = document.getElementById("nota1_js");
var js2 = document.getElementById("nota2_js");
var js3 = document.getElementById("nota3_js");
var promedio_css= document.getElementById("promedio_css");

var nota1_js = +prompt("Ingrese la nota 1 de JS: "); // + transforma la cadena en número
var nota2_js = +prompt("Ingrese la nota 2 de JS: ");
var nota3_js = +prompt("Ingrese la nota 3 de JS: ");

var promedio_jss_final = ((nota1_js + nota2_js + nota3_js) / 3).toFixed(2);

js1.innerHTML = nota1_js;
js2.innerHTML = nota2_js;
js3.innerHTML = nota3_js;
promedio_js.innerHTML = promedio_jss_final;













