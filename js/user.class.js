import { Magazine } from './magazine.class.js';

var User = new (
    function(email, pass) {
        var obj = this;
        var user = { id: '',
                    name:'', 
                    lastName:'', 
                    email:'', 
                    pass:'', 
                    birthdate:'', 
                    completeAddress: [{
                        address:'',
                        streetName: '',
                        number: '',
                        cityName: '',
                        postCodeName: '',
                        countryName: ''
                    }],
                    liked: [
                        "2",
                        "4",
                        "6"
                    ],
                    recommendedmagazine:[
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    cart: [],
                    downloads: []
                    }
        
        //Registrar usuario
        obj.setUser = function(email, pass) {
            return new Promise(function (resolve, reject) {
                user.email = email;
                user.pass = pass;
                $.ajax({
                    url: 'http://localhost:43210/usuarios/',
                    method: 'POST',
                    headers: { 'Content-Type':'application/json' },
                    data: JSON.stringify(user),
                    dataType: 'json'
                }).then(
                    function (res) {
                        resolve(res); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };

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
                        resolve(res); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        obj.findUserByEmail = function(email) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios?email=' + email,
                    dataType: 'json',
                }).then(
                    function (res) {
                        resolve(res); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        }
        
        // Update one user
        obj.updateUser = function(user) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios/' + user.id,
                    method: 'PUT',
                    headers: { 'Content-Type':'application/json' },
                    data: JSON.stringify(user),
                    dataType: 'json'
                    
                }).then(
                    function (res) {
                        resolve(res[0]); },
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
                        resolve(res);},
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); });
            });
        };
        obj.findUserLikedMagazine = function(user, magazine_id) {
            for(var i = 0; i < user.liked.length; i++){
                if(user.liked[i]==magazine_id){
                    return true; } }
            return false;
        };
        obj.findUserBoughtMagazine = function(user, magazine_id) {
            for(var i = 0; i < user.cart.length; i++){
                if(user.cart[i]==magazine_id){
                    return true; } }
            return false;
        };
        obj.findUserDownloadedMagazine = function(user, magazine_id) {
            for(var i = 0; i < user.downloads.length; i++){
                if(user.downloads[i]==magazine_id){
                    return true; } }
            return false;
        };

        obj.addToCart = function(user, magazine_id){
            if(!this.findUserBoughtMagazine(user, magazine_id)){
                user.cart.push(magazine_id);
                this.updateUser(user); }
            
        };

        obj.addToDownloads = function(user, magazine_id){
            if(!this.findUserDownloadedMagazine(user, magazine_id)){
                user.downloads.push(magazine_id);
                this.updateUser(user); }
        };
    }
)();

export var User;


