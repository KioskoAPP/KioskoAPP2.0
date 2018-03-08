'use strict';

// Botón de "Login" en Index //
function goToLogIn() {
    location.href = '/login.html';
}

// Botón de "Regístrate" en Index//
function goToRegister() {
    location.href = '/register.html';
}

// Botón de "Pásate a premium" //
function goToPrem() {
    location.href = '/premium.html';
}

// Botón de "Obtén premium" //
function goToBePrem() {
    location.href = '/payment.html';
}

// Botón de "Mis direcciones" //
function goToDir() {
    location.href = '/misdirecciones.html';
}

// Botón de "Mis tarjetas" //
function goToCreditCards() {
    location.href = '/mistarjetas.html';
}

$(document).ready(function () {
    $('#abm_loginBtn').click(goToLogIn);
    $('#abm_registerBtn').click(goToRegister);
    $('#abm_premBtn').click(goToPrem);
    $('#abm_bePremBtn').click(goToBePrem);
    $('#abm_myAdress').click(goToDir);
    $('#abm_myCreditCards').click(goToCreditCards);
});