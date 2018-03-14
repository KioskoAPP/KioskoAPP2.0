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
                localStorage.setItem('kioskoUser', JSON.stringify(res[0]));
                window.location.href = "home.html";
            }else {
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


function sendregistro() {
    if (validarregistro()) 
        document.getElementById("frmresgistrar").submit();
}









