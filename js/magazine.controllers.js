function getMagazines(){
    $.ajax({
        url: 'http://10.2.201.158:43210/magazines',
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
        url: 'http://10.2.201.158:43210/magazines?id='+ id,
        data: null,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            // console.log(res);
            return res;
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); }); }

function printMagazineInfo(id, attribute, selector){
    if(attribute==='thumbnail'){
        $.ajax({
            // barra + id
            url: 'http://10.2.201.158:43210/magazines?id='+ id,
            data: null,
            type: 'GET',
            dataType: 'json'})
            .then(function(res){
                $(selector).css('background-image', 'url(http://10.2.201.158:43210/' + res[0][attribute] + ')');
            },
            function(jqXHR, textStatus, errorThrown) {
                console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); });
    }else{
        $.ajax({
            url: 'http://10.2.201.158:43210/magazines?id='+ id,
            data: null,
            type: 'GET',
            dataType: 'json'})
            .then(function(res){
                $(selector).html(res[0][attribute]);
            },
            function(jqXHR, textStatus, errorThrown) {
                console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); }); }
} 
