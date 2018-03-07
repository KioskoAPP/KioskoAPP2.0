import { Magazine } from './magazine.class.js';


var User = new (
    function() {
        var obj = this;
        // Get all magazines
        obj.getUsers = function() {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios',
                    dataType: 'json',
                }).then(
                    function (resp) {
                        resolve(resp);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        // Get user's recommended magazines
        obj.getRecommendedMagazines = function(user_id) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios/' + user_id,
                    dataType: 'json',
                }).then(function(res){
                    for(var i = 0; i < res.recommendedMagazines.length; i++){
                        console.log(i);
                        // $('.ss_recommended-content').append("<div class='row ss_recommended-item'><div data-id='" + res[i] + "'class='col-xs-12'><div class='row'><a href='http://10.2.201.158:3000/detail.html?id=" +  res[i].id + "'><img src='http://localhost:43210/" +  res[i].thumbnail + "' alt''></a></div><i class='glyphicon glyphicon-eye-open'></i></div></div>"); 
                    }
                       
                        // resolve(resp);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown);
                    }
                );
            });
        };
      
        
    }
)();

export var User;


