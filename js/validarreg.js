function validarx() {
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
    
    
    