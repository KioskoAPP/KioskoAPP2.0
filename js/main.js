function menuBar(x) {
    x.classList.toggle("change");
    switch(window.getComputedStyle(document.getElementById('toggle-menu'),'display').getPropertyValue('display')) {
        default:
            document.getElementById('toggle-menu').style.setProperty('display', 'none');
            $('nav h1').show();
        break;
        case 'none':
            document.getElementById('toggle-menu').style.setProperty('display', 'inline-block');
            $('nav h1').hide();
        break; } }


$(document).ready(function() {
    //Añade el contenido del documento head.html a la etiqueta head
    $('head').load('../head.html');
    //Añade el menu contenido en el documento menu.html en aquellas etiquetas header que tengan la clase "menu"
    $('header[class="menu"]').load('../menu.html');
});