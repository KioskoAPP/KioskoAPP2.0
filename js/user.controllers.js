function getUsers(){
    $.ajax({
        url: 'http://localhost:43210/users',
        data: null,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            console.log(res);
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); });  };
    

            
function getUser(email){
    $.ajax({
        url: 'http://localhost:43210/users?email='+ email,
        data: null,
        type: 'GET',
        dataType: 'json'})
        .then(function(res){
            console.log(res);
        },
        function(jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); }); }