//Comprobar lo que falta por implementar en magazine.class y borrar este documento

function getMagazines(){
    $.ajax({
        url: 'http://localhost:43210/magazines',
        data: null,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            // console.log(res);
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); });  }

function getMagazine(id){
    $.ajax({
        url: 'http://localhost:43210/magazines?id='+ id,
        data: null,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            // console.log(res);
            return res;
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); }); }
