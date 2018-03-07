'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _magazine = require('./magazine.class');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = new function () {
    var obj = this;
    // Get all magazines
    obj.getUsers = function () {
        return new _promise2.default(function (resolve, reject) {
            $.ajax({
                url: 'http://localhost:43210/usuarios',
                dataType: 'json'
            }).then(function (resp) {
                resolve(resp);
            }, function (jqXHR, textStatus, errorThrown) {
                reject(jqXHR, textStatus, errorThrown);
            });
        });
    };
    // Get all user's recommended magazines
    obj.getRecommendedMagazines = function (user_id) {
        return new _promise2.default(function (resolve, reject) {
            $.ajax({
                url: 'http://localhost:43210/usuarios/' + user_id,
                dataType: 'json'
            }).then(function (res) {
                resolve(res);
            }, function (jqXHR, textStatus, errorThrown) {
                console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
            });
        });
    };
    // Get all user's recommended magazines
    obj.printRecommendedMagazines = function (user_id) {
        return new _promise2.default(function (resolve, reject) {
            obj.getRecommendedMagazines.then(function (res) {
                for (var i = 0; i < res.recommendedMagazines.length; i++) {
                    _magazine.Magazine.printRecommendedMagazine(res.recommendedMagazines[i]);
                }
                console.log("estoy aqui");
            }, function (jqXHR, textStatus, errorThrown) {
                console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
            });
        });
    };
}();