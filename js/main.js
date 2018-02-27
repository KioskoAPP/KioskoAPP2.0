function menuBar(x) {
    x.classList.toggle("change");
    switch(window.getComputedStyle(document.getElementById('toggle-menu'),'display').getPropertyValue('display')) {
        case 'inline-block':
            document.getElementById('toggle-menu').style.setProperty('display', 'none');
        break;
        case 'none':
            document.getElementById('toggle-menu').style.setProperty('display', 'inline-block');
        break; } }


$(document).ready(function() { 
    $('header').load('../header.html');
});