var Magazine = new (
    function() {
        var obj = this;
        // Get all magazines
        obj.getMagazines = function() {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/magazines',
                    dataType: 'json',
                }).then(
                    function (resp) {
                        resolve(resp);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown);
                    }
                );
            });
        };
        // Get one magazine
        obj.getMagazine = function(magazine_id) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/magazines/' + magazine_id,
                    dataType: 'json',
                }).then(
                    function (resp) {
                        resolve(resp);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown);
                    }
                );
            });
        };
        // Get one magazine
        obj.addMagazine = function(magazine) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/magazines',
                    dataType: 'json',
                    method: 'POST',
                    data: magazine
                }).then(
                    function (resp) {
                        resolve(resp);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown);
                    }
                );
            });
        };
        // Update one magazine
        obj.updateMagazine = function(magazine) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/magazines/',
                    dataType: 'json',
                    method: 'PUT',
                    data: magazine
                }).then(
                    function (resp) {
                        resolve(resp);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown);
                    }
                );
            });
        };
        // Get all user's recommended magazines
        obj.getRecommendedMagazines = function(user_id) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/usuarios/' + user_id,
                    dataType: 'json',
                }).then(function(res){
                    for(var i = 0; i < res.recommendedMagazines.length; i++){
                        Magazine.printRecommendedMagazine(res.recommendedMagazines[i]); }
                },
                function(jqXHR, textStatus, errorThrown) {
                    console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); });
            });
        };
        // Print one recommended magazine
        obj.printRecommendedMagazine = function(magazine_id) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/magazines/' + magazine_id,
                    dataType: 'json',
                }).then(function(res){
                    console.log("aa" + res);
                        $('.ss_recommended-content').append("<div class='row ss_recommended-item'><div data-id='" + res.id + "'class='col-xs-12'><div class='row'><a href='http://10.2.201.158:3000/detail.html?id=" +  res.id + "'><img src='http://localhost:43210/" +  res.thumbnail + "' alt''></a></div><i class='glyphicon glyphicon-eye-open'></i></div></div>");
                },
                function(jqXHR, textStatus, errorThrown) {
                    console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>'); });
            });
        };
    }
);