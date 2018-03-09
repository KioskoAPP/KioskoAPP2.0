import { Magazine } from './magazine.class.js';

var User = new (
    function() {
        var obj = this;
        // Get all users
        obj.getUsers = function() {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios',
                    dataType: 'json',
                }).then(
                    function (res) {
                        resolve(res); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        // Get one user
        obj.getUser = function(user_id) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios/' + user_id,
                    dataType: 'json',
                }).then(
                    function (res) {
                        resolve(JSON.parse(res)); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        // Get one user
        obj.updateUser = function(user) {
            return new Promise(function (resolve, reject) {
                console.log(user);
                $.ajax({
                    url: 'http://localhost:43210/usuarios/' + user.id,
                    method: 'PUT',
                    data: JSON.stringify(user),
                    dataType: 'json',
                }).then(
                    function (res) {
                        console.log(res),
                        resolve(res); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        // Get user's recommended magazines
        obj.getUserRecommendedMagazines = function(user_id) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios/' + user_id,
                    dataType: 'json',
                }).then(
                    function(res){
                        resolve(JSON.parse(res));},
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        // Find liked magazine
        obj.findLikedMagazine = function(user_id) {
            return new Promise(function (resolve, reject) { 
                $.ajax({
                    url: 'http://localhost:43210/usuarios/' + user_id,
                    dataType: 'json',
                }).then(
                    function(res){
                        resolve(JSON.stringify(res)); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        
    }
)();

export var User;


