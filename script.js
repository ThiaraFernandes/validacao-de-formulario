const inputs = document.querySelectorAll(".input-text");
const botao = document.getElementById("botao");
const limparFormulario = document.querySelector('.inputs');

botao.addEventListener("click", function(event) {
  event.preventDefault();

  inputs.forEach((input) => {
    const span = input.nextElementSibling;

    if (input.value !== "") {
      input.classList.add("campo-preenchido");
      span.style.display = 'none';
      
    } else {
      input.classList.add("campo-nao-preenchido");
      span.style.display = 'block';
    }
  });

  limparFormulario.reset();

});



