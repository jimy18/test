document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');

    email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(campo.value)) {
      valido.innerText = "";
    } else {
      valido.innerText = "El E-mail es incorrecto";
    }
});
