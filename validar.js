function milogin() {
    var email = $('#email').val();
    var pass = $('#contraseña').val();
    // var userObject = '{ "name" : "' + email + '", "password": "' + pass  + '"}';
    var userObject = 'email=' + email + '&pass=' + pass;

    $.ajax({
        url: 'http://localhost:43210/usuarios?' + userObject,
        type: 'get',
        dataType: 'json'
    })
        .then(function (res) {
            if (res.length > 0) {
                window.location.href = "home.html";
            }
            else {
                alert("usuario o contraseña invalido");
            }
        },
        function (jqXHR, textStatus, errorThrown) {
            console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
        });
}

function validar() {
    var email, contraseña, login, g, f, recordarme, expresion;
    email = document.getElementById("email").value;
    contraseña = document.getElementById("contraseña").value;

    expresion = /\w+@\w+\.+[a-z]/;
    if (email === "" || contraseña === "") {
        alert("Ambos campos son obligatorios");
        return false;
    }
    else if (email.length > 100) {
        alert("El correo electrónico es muy largo");
        return false;
    }

    else if (!expresion.test(email)) {
        alert("El correo electrónico no es válido");
        return false;
    }
    else if (contraseña.length > 30) {
        alert("La contraseña debe tener menos de 30 caracteres");
        return false;
    }
    milogin();
    return true;
}

function validarregistro() {
    var contraseña1;
    contraseña1 = document.getElementById("contraseña1").value;

    if (contraseña1 === "") {
        alert("Debes escribir de nuevo tu contraseña");
        return false;
    }
    return true;
}
<<<<<<< HEAD
=======
function sendregistro() {
    if (validarregistro()) 
        document.getElementById("frmresgistrar").submit();
}
>>>>>>> 39ba3baa05f6bd5bf5f7fc9cc2d47302b0efca48





    function milogin() {
        var Adress = $('#Adress').val();
        var streetName = $('#streetName').val();
        var number = $('#number').val();
        var cityName = $('cityName').val();
        var postCodeName = $('postCodeName');
        var countryName = $('countryName');

        // var userObject = '{ "name" : "' + email + '", "password": "' + pass  + '"}';
        var userObject = 'email=' + email + '&pass=' + pass;

        $.ajax({
            url: 'http://localhost:43210/usuarios?' + userObject,
            type: 'get',
            dataType: 'json'
        })
            .then(function (res) {
                if (res.length > 0) {
                    window.location.href = "home.html";
                }
                else {
                    alert("usuario o contraseña invalido");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
                console.log('<p class="error">ERROR: ' + jqXHR.status + ': ' + jqXHR.statusText + '</p>');
            });
    }


function validar {
    var Address, streetName, number, cityName, postCodeName, countryName;
    Adress = document.getElementById("Adress").value;
    streetName = document.getElementById("Adress").value;
    number = document.getElementById("number").value;
    cityName = document.getElementById("cityName").value;
    postCodeName = document.getElementById("postCodeName").value;
    countryName = document.getElementById("countryName").value;
}

if (Adress === "" || streetName === "" || number === "" || cityName === "" || postCodeName === "" || countryName === "") {
    alert("Ambos campos son obligatorios");
    return false;
}

valor = document.getElementById("postCodename").value;
if( isNaN(valor) ) {
  return false;
}



else if (Adress.length > 100) {
    alert("La direccion es muy larga");
    return false;
}

else if (streetName > 100) {
    alert("El nombre de la calle es muy largo");
    return false;
}

else if (number > 10) {
    alert("El número es muy largo");
    return false;
}

else if (cityName > 100) {
    alert("El nombre de la ciudad es muy largo");
    return false;
}

else if (postCodeName > 5) {
    alert("El código postal es muy largo");
    return false;
}

else if (countryName > 30) {
    alert("El nombre del país es muy largo");
    return false;
}






