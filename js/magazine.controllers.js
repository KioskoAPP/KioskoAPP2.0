function getMagazines(){
    $.ajax({
        url: 'http://localhost:43210/magazines',
        data: null,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            console.log(res);
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
            console.log(res);
            return res;
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); }); }

function printMagazineInfo(id, attribute, selector){
    $.ajax({
        url: 'http://localhost:43210/magazines?id='+ id,
        data: null,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            $(selector).html(res[0][attribute]);
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); }); }