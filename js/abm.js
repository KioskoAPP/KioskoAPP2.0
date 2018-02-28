// Botón de "Pásate a premium" //
function goToPrem(){
    location.href='/premium.html'
}

$(document).ready(function() {
    $('#abm_premBtn').click(goToPrem);

});

// Botón de "Obtén premium" //
function goToBePrem(){
    location.href='/payment.html'
}

$(document).ready(function() {
    $('#abm_bePremBtn').click(goToBePrem);

});



// Botón de "Mis direcciones" //
function goToDir(){
    location.href='/misdirecciones.html'
}

$(document).ready(function() {
    $('#abm_myAdress').click(goToDir);

});


// Botón de "Mis tarjetas" //
function goToCreditCards(){
    location.href='/mistarjetas.html'
}

$(document).ready(function() {
    $('#abm_myCreditCards').click(goToCreditCards);
});





/*******************************************
FUNCIÓN PARA MOSTRAR LOS DATOS DEL USUARIO *******************************************/

/*function ver(idLibro) {
    $.ajax({
        url: 'http://localhost:43210/libros/' + idLibro,
        dataType: 'json',
    }).then(
        function (resp) {
            var rslt = '<p>';
            rslt += 'ID: ' + resp.idLibro + '<br>' +
                'Título: ' + resp.titulo + '<br>' +
                'Autor: ' + resp.autor + '<br>' +
                'País: ' + resp.pais + '<br>' +
                'Fecha: ' + resp.fecha + '<br>' +
                'Páginas: ' + resp.paginas + '<br>' +
                'Wiki: ' + resp.wiki + '<br>' ;
            rslt += '</p>';
            rslt += '<input type="button" value="Volver" onclick="volver()">';

            $('#listado').html(rslt);
            $('#btnAñadir').hide();
        }
    )
}*/
