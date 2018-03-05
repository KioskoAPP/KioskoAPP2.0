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

// Función para añadir las direcciones del usuario
function newAddress(){
    var newUserAdd = $ ('form');
    var dir ={};
    newUserAdd.forEach(function (item) {
        dir[item.Address] = item.value;        
    });
    $.ajax({
        url: 'http://localhost:43210/usuarios',
        method: 'POST',
        dataType: 'json',
        data: dir        
    }).then(
        function(){
            $('#abm_newAdressBtn').off('click', newAddress);
            volver();
        },
        function(jqXHR, textStatus, errorThrown) {
        $('errorMsg').html(
            '<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
        }
    );

}


function setUserAddresses(id){
    $.ajax({
        url: 'http://localhost:43210/usuarios?_id=' + id,
        type: 'POST',
        dataType: 'json',
    })
        .then(
            function(res){
            console.log("aa" + res);
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p> class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); 
        });  
    }

// Función para mostrar las direcciones del usuario
/*function seeUserAddresss(verDir){
    $.ajax({
        url: 'http://localhost:43210/usuarios/' + verDir,
        dataType: 'json',
        //console.log($("#Address").val())
    }).then(
        function (resp){
            var userAddress = '<h4>';
            userAddress += Address + '</h4>' + '<br>' + '<p>' + streetName + ', '+ number + '.' + '<br>' + postCodeName + ' ' + cityName + ' (' + countryName + ').';
            userAddress +='</p>';
        },
        //console.log(userAddress),
        )   
    $('#abm_myAdressDir1').html(userAddress);
}*/

function seeUserAddresss (){
    $.get('http://localhost:43210/usuarios/', function (address){
        var rslt = $('<h4>' + Address + '</h4>' + '<br>' + '<p>' + streetName + ', '+ number + '.' + '<br>' + postCodeName + ' ' + cityName + ' (' + countryName + ').');
        userAddress +='</p>';
        $('#list').empty().append(rslt);
        for (var i=0; i<address.length; i++){
           var tr = $('<h4>');
           tr.append($(address[i].Address + '</h4>'));
           tr.append($('<p>' + address[i].streetName + ', </p>'));
           tr.append($('<p>' + address[i].number + '.</p><br>'));
           tr.append($('<p>' + address[i].postCodeName + ' </p>'));
           tr.append($('<p>' + address[i].cityName + ' </p>'));
           tr.append($('<p>(' + address[i].countryName + ').</p>'));
        }
    }, 'json');
}



$(document).ready(function() {
    $('#abm_premBtn').click(goToPrem);
    $('#abm_bePremBtn').click(goToBePrem);
    $('#abm_myAdress').click(goToDir);
    $('#abm_myCreditCards').click(goToCreditCards);
    $('#abm_newAdress').click(seeUserAddresss);
    $('#abm_newAdressBtn').on('click', newAddress);
    setUserAddresses(id);
});
