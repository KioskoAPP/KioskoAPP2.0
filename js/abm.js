// Botón de "Pásate a premium" //
function goToPrem(){
    location.href='/premium.html';
}

// Botón de "Obtén premium" //
function goToBePrem(){
    location.href='/payment.html'
}

// Botón de "Mis direcciones" //
function goToDir(){
    location.href='/misdirecciones.html'
}

// Botón de "Mis tarjetas" //
function goToCreditCards(){
    location.href='/mistarjetas.html'
}

// Función para mostrar las direcciones del usuario
function seeUserAddresss(object){
    console.log("hola")
    for (i=0; i<object.length; i++){

        var userAddress = '<h4>' + Address + '</h4>' + '<br>' + '<p>' + streetName + ', '+ number + '.' + '<br>' + postCodeName + ' ' + cityName + ' (' + countryName + ').' + '</p>';
        console.log(userAddress);
    }
    
    $('#abm_myAdressDir1').html(userAddress);
}

function getUserAddresses(id){
    $.ajax({
        url: 'http://10.2.201.33:43210/usuarios?_id' + id,
        data: '_id = ' + id,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            console.log(res);
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); });  }


$(document).ready(function() {
    $('#abm_premBtn').click(goToPrem);
    $('#abm_bePremBtn').click(goToBePrem);
    $('#abm_myAdress').click(goToDir);
    $('#abm_myCreditCards').click(goToCreditCards);
    $('#abm_newAdress').click(seeUserAddresss);
    getUserAddresses(1);
});
