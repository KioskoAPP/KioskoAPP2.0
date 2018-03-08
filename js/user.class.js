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
                        resolve(resp); },
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
                }).then(
                    function(res){
                        resolve(res);},
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
    }
)();

export var User;


