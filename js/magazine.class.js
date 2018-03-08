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
                        resolve(resp); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); } ); }); };


        // Get one magazine
        obj.getMagazine = function(magazine_id) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/magazines/' + magazine_id,
                    dataType: 'json',
                }).then(
                    function (resp) {
                        resolve(resp); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); } ); }); };


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
                        resolve(resp); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); } ); }); };


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
                        resolve(resp); },
                    function (jqXHR, textStatus, errorThrown) {
                        reject(jqXHR, textStatus, errorThrown); } ); }); };

})();

export var Magazine;