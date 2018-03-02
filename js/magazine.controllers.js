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

function printMagazineAttribute(magazine, attribute, selector){
    switch(attribute) {
        case 'thumbnail':
           $(selector).css('background-image', 'url(http://10.2.201.158:43210/' + magazine[attribute] + ')');
        break;
        case 'tags':
            for(var i = 0; i < magazine[attribute].length; i++){
                $(selector).append("<i class='ss_tag'>" + magazine[attribute][i] + '</i>');
            }
        break;
        default:
            $(selector).html(magazine[attribute]);
        break;
    }
   
} 
