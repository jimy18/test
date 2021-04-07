"use strict";
document.getElementById('email').addEventListener('input', function() {
  var  campo = event.target;
    var  valido = document.getElementById('emailOK');

    var email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(campo.value)) {
      valido.innerText = "";
    } else {
      valido.innerText = "El E-mail es incorrecto";
    }
});
