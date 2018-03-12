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
    document.getElementById("formlogin").submit();
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




