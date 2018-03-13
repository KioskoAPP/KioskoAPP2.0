function validar() {
    var exampleInputEmail1, exampleInputPassword1, exampleInputPassword2, exampleInputName2, exampleInputEmail2, exampleInputName3, exampleInputEmail4;
    exampleInputEmail1 = document.getElementById("exampleInputEmail1").value;
    exampleInputPassword1 = document.getElementById("exampleInputPassword1").value;
    exampleInputPassword2 = document.getElementById("exampleInputPassword2").value;
    exampleInputName2 = document.getElementById("exampleInputName2").value;
    exampleInputEmail2 = document.getElementById("exampleInputEmail2").value;
    exampleInputEmail4 = document.getElementById("exampleInputEmail4").value;

    if (exampleInputEmail1 === "" || exampleInputPassword1 === "" || exampleInputPassword2 === "" || exampleInputName2 === "" || exampleInputEmail2 === "" || exampleInputEmail4 === "" ) {
        alert("El campo de texto está vacio");
        return false;
    }
}

function validarCodigoPostal() {
    var input = document.getElementById("exampleInputName3").value;
    console.log(parseInt(input));
    if (input.length == 5 && parseInt(input) >= 1000 && parseInt(input) <= 52999) {
        alert("codigo valido");
    }
    else {
        alert("codigo invalido");
    }
}





