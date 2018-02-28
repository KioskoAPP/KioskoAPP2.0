// Botón de "Mis direcciones" //
function goToDir(){
    location.href='/misdirecciones.html'
}

$(document).ready(function() {
    $('#abm_myAdress').click(goToDir);

});

// Botón de "Pásate a premium" //
function goToPrem(){
    location.href='/premium.html'
}

$(document).ready(function() {
    $('#abm_premBtn').click(goToPrem);

});


/***********************************************************
FUNCIÓN PARA MOSTRAR LOS DATOS DEL USUARIO ***********************************************************/

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
