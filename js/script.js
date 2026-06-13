document.querySelectorAll(".form-cadastro").forEach(function (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    alert("Cadastro realizado com sucesso!");
    formulario.reset();
  });
});

