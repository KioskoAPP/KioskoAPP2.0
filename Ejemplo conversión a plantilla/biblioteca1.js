var Biblioteca = new (
    function () {
        var obj = this;
        // obj.pidePaginas = function() {
        //     return $.ajax({
        //         url: 'http://localhost:43210/biblioteca?_page=count&_rows=5',
        //         dataType: 'json',
        //     });
        // };
        // obj.pideFilas = function() {
        //     return $.ajax({
        //         url: 'http://localhost:43210/biblioteca?_page=0&_rows=5',
        //         dataType: 'json',
        //     });
        // };

        // obj.pintaFilas = function(envios) {
        //     var rslt = $('<table class="table table-striped table-hover"><tr class="info"><th>Título</th><th><input type="button" class="btn btn-success" value="Añadir" onclick="añadir()"></th></tr></table>');
        //     $('#listado').empty().append(rslt);
        //     for (var i = 0; i < envios.length; ++i) {
        //         var tr = $('<tr/>');
        //         if (envios[i].titulo.length > 20)
        //             tr.addClass('danger');
        //         tr.append($('<td><input type="button" class="btn btn-link" value="' + envios[i].titulo + '" onclick="ver(' + envios[i].id + ');"></td>'));
        //         var td = $('<td/>');
        //         td.addClass('btn-group');
        //         td.append($('<input type="button" class="btn btn-info" value="Ver" onclick="ver(' + envios[i].id + ');">'));
        //         td.append($('<button class="btn btn-success" onclick="editar(' + envios[i].id + ');"><span class="glyphicon glyphicon-pencil"></span></button>'));
        //         td.append($('<button class="btn btn-danger" onclick="borrar(' + envios[i].id + ');"><span class="glyphicon glyphicon-trash"></span></button>'));
        //         tr.append(td);
        //         rslt.append(tr);
        //     }
        // };
        // obj.pidePaginasSrv1 = function() {
        //     return $.ajax({
        //         url: 'http://localhost:43210/biblioteca',
        //         dataType: 'json',
        //     });
        // };
        // obj.pidePaginasSrv2 = function() {
        //     return $.ajax({
        //         url: 'http://otro/biblioteca',
        //         dataType: 'json',
        //     });
        // };
        // obj.pidePaginasSrv3 = function() {
        //     return $.ajax({
        //         url: 'http://mas/biblio',
        //         dataType: 'json',
        //     });
        // };
        // Promise.race(obj.pidePaginasSrv1, obj.pidePaginasSrv2, obj.pidePaginasSrv3).then(obj.pintaFilas, obj.PintaError);

        // Promise.all(obj.pidePaginas, obj.pideFilas).then(obj.pintaFilas, obj.PintaError);
        //obj.pidePaginas().then(obj.pideFilas).then(obj.pintaFilas);

        obj.get = function () {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: 'http://localhost:43210/biblioteca',
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

        obj.listar = function () {
            obj.get().then(function (envios) {
                var FxP = 5;
                $('#listado').empty()
                    .append($('<div id="content"></div>'))
                    .append($('<div id="page-selection"></div>'));
                $('#page-selection').bootpag({
                    total: envios.length,
                    maxVisible: FxP,
                    page: 1
                }).on("page", function (event, /* page number here */ numPag) {
                    var rslt = $('<table class="table table-striped table-hover"><tr class="info"><th>Título</th><th><input type="button" class="btn btn-success" value="Añadir" onclick="Biblioteca.añadir()"></th></tr></table>');
                    $("#content").empty().html(rslt);
                    for (var i = numPag * FxP; i < envios.length && i < (numPag * FxP + FxP); ++i) {
                        var tr = $('<tr/>');
                        tr.append($('<td><input type="button" class="btn btn-link" value="' + envios[i].titulo + '" onclick="Biblioteca.ver(' + envios[i].id + ');"></td>'));
                        var td = $('<td/>');
                        td.addClass('btn-group');
                        td.append($('<input type="button" class="btn btn-info" value="Ver" onclick="Biblioteca.ver(' + envios[i].id + ');">'));
                        td.append($('<button class="btn btn-success" onclick="Biblioteca.editar(' + envios[i].id + ');"><span class="glyphicon glyphicon-pencil"></span></button>'));
                        td.append($('<button class="btn btn-danger" onclick="Biblioteca.borrar(' + envios[i].id + ');"><span class="glyphicon glyphicon-trash"></span></button>'));
                        tr.append(td);
                        rslt.append(tr);
                    }
                });
                $('#page-selection').trigger(jQuery.Event("page"), 1);
            });
        };
        obj.listar_ficha = function () {
            obj.get().then(function (envios) {
                var rslt = $('<div class="panel panel-default" />');
                $('#listado').empty();
                //.append(rslt);
                for (var i = 0; i < envios.length; ++i) {
                    var tr = $('<div class="panel panel-info" />');
                    tr.append($('<div class="panel-heading"><input type="button" class="btn btn-link" value="' + envios[i].titulo + '" onclick="ver(' + envios[i].id + ');"></div>'));
                    var cuerpo = $('<div class="panel-body"></div>');
                    cuerpo.append($('<p><b>Autor:</b> ' + envios[i].autor + '<br>' +
                        '<b>Nº Páginas:</b> ' + envios[i].numPag + '</p>'))
                    var td = $('<div/>');
                    td.addClass('btn-group');
                    td.append($('<input type="button" class="btn btn-info" value="Ver" onclick="ver(' + envios[i].id + ');">'));
                    td.append($('<button class="btn btn-success" onclick="editar(' + envios[i].id + ');"><span class="glyphicon glyphicon-pencil"></span></button>'));
                    td.append($('<button class="btn btn-danger" onclick="borrar(' + envios[i].id + ');"><span class="glyphicon glyphicon-trash"></span></button>'));
                    cuerpo.append(td);
                    tr.append(cuerpo);
                    $('#listado').append(tr);
                }
            });
        };
        obj.listar_old = function () {
            obj.get().then(function (envios) {
                var rslt = $('<table class="table table-striped table-hover"><tr class="info"><th>Título</th><th><input type="button" class="btn btn-success" value="Añadir" onclick="añadir()"></th></tr></table>');
                $('#listado').empty().append(rslt);
                for (var i = 0; i < envios.length; ++i) {
                    var tr = $('<tr/>');
                    if (envios[i].titulo.length > 20)
                        tr.addClass('danger');
                    tr.append($('<td><input type="button" class="btn btn-link" value="' + envios[i].titulo + '" onclick="ver(' + envios[i].id + ');"></td>'));
                    var td = $('<td/>');
                    td.addClass('btn-group');
                    td.append($('<input type="button" class="btn btn-info" value="Ver" onclick="ver(' + envios[i].id + ');">'));
                    td.append($('<button class="btn btn-success" onclick="editar(' + envios[i].id + ');"><span class="glyphicon glyphicon-pencil"></span></button>'));
                    td.append($('<button class="btn btn-danger" onclick="borrar(' + envios[i].id + ');"><span class="glyphicon glyphicon-trash"></span></button>'));
                    tr.append(td);
                    rslt.append(tr);
                }
            });
        };
        obj.añadir = function () {
            $('#listado').hide();
            $('#frmPrincipal').show().each(function (i, item) {
                item.reset();
            });
            $('#btnEnviar').on('click', obj.enviarNuevo);
        };
        obj.editar = function (id) {
            $.ajax({
                url: 'http://localhost:43210/biblioteca/' + id,
                dataType: 'json',
            }).then(
                function (resp) {
                    for (var name in resp) {
                        $('[name="' + name + '"]').val(resp[name]);
                    }
                    $('#listado').hide();
                    $('#frmPrincipal').show();
                    $('#btnEnviar').on('click', obj.enviarModificado);
                }
            );
        };

        obj.borrar = function (id) {
            if (!window.confirm("¿Estas seguro?")) return;
            var srv = new DAO('http://localhost:43210/biblioteca/');

            srv.remove(id).then(
                //     $.ajax({
                //     url: 'http://localhost:43210/biblioteca/' + id,
                //     method: 'DELETE',
                //     dataType: 'json',
                // }).then(
                function (resp) {
                    volver();
                },
                function (jqXHR, textStatus, errorThrown) {
                    $('errorMsg').html(
                        '<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
                }
            );
        };

        obj.ver = function (id) {
            $.ajax({
                url: 'http://localhost:43210/biblioteca/' + id,
                dataType: 'json',
            }).then(
                function (resp) {
                    var rslt = '<p>';
                    rslt += 'Código: ' + resp.id + '<br>' +
                        'Título: ' + resp.titulo + '<br>' +
                        'Autor: ' + resp.autor + '<br>' +
                        'Nº Páginas: ' + resp.numPag;
                    rslt += '</p>';
                    rslt += '<input type="button" value="Volver" onclick="Biblioteca.volver()">';

                    $('#listado').html(rslt);
                }
            );
        };


        obj.enviarNuevo = function () {
            var datos = $('#frmPrincipal').serializeArray();
            var envio = {};
            var esValido = true;
            datos.forEach(function (item) {
                if (!this.validar(item.name)) {
                    esValido = false;
                    return;
                }
                envio[item.name] = item.value;
            });
            if (!esValido)
                return;
            $.ajax({
                url: 'http://localhost:43210/biblioteca',
                method: 'POST',
                dataType: 'json',
                data: envio
            }).then(
                function () {
                    $('#btnEnviar').off('click', obj.enviarNuevo);
                    obj.volver();
                },
                function (jqXHR, textStatus, errorThrown) {
                    $('errorMsg').html(
                        '<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
                }
            );
        };

        obj.validar = function (name) {
            var cntr = $('[name="' + name + '"');
            var esValido = true;
            cntr.each(function (i, item) {
                switch (item.dataset.validacion) {
                    case 'mayusculas':
                        if (cntr.val().toUpperCase() != cntr.val())
                            item.setCustomValidity('Tiene que estar en mayusculas');
                        else
                            item.setCustomValidity('');
                        break;
                    case 'minusculas':
                        if (cntr.val().toLowerCase() != cntr.val())
                            item.setCustomValidity('Tiene que estar en minusculas');
                        else
                            item.setCustomValidity('');
                        break;
                }
                // switch (name) {
                //     case 'titulo':
                //         if (cntr.val().toUpperCase() != cntr.val())
                //             item.setCustomValidity('Tiene que estar en mayusculas');
                //         else
                //             item.setCustomValidity('');
                //         break;
                // }
                if (item.validationMessage) {
                    if ($('#err_' + name).length) {
                        $('#err_' + name).text(item.validationMessage);
                    } else {
                        cntr.after('<div id="err_' + name + '" class="text-danger">' + item.validationMessage + '</div>');
                        cntr.parent().parent().addClass('has-error');
                    }
                    esValido = false;
                } else {
                    cntr.parent().parent().removeClass('has-error');
                    $('#err_' + name).remove();
                }
            });
            return esValido;
        };
        
        obj.enviarModificado = function () {
            $('#frmPrincipal').each(function (i, item) {
                // if(!item.checkValidity()) {
                //     alert("Error en el formulario.");
                // } else {
                var datos = $('#frmPrincipal').serializeArray();
                var envio = {};
                var esValido = true;
                datos.forEach(function (item) {
                    if (!obj.validar(item.name)) {
                        esValido = false;
                        return;
                    }
                    envio[item.name] = item.value;
                });
                if (!esValido)
                    return;
                $.ajax({
                    url: 'http://localhost:43210/biblioteca',
                    method: 'PUT',
                    dataType: 'json',
                    data: envio
                }).then(
                    function () {
                        $('#btnEnviar').off('click', obj.enviarModificado);
                        obj.volver();
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $('errorMsg').html(
                            '<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
                    }
                );
                // }
            });
        };

        obj.volver = function () {
            obj.listar();
            $('#listado').show();
            $('#frmPrincipal').hide();
        };
    }
)();
