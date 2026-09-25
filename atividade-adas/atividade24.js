const cadastro = document.getElementById("cadastro");

cadastro.addEventListener("submit", function (evento) {
  evento.preventDefault();
  //addEventListener: é um evento adicionado na variavel cadastro
  //submit: envia as informacoes e atualiza a pagina
  //preventDefault: previne o comportamento padrão

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const idade = Number(document.getElementById("idade").value);
  /*O addEventListener significa:observe e faça alguma coisa coisa quando estiver com algo */
  /* if significa se e serve para verificar uma condição */
  /*else significa se não */
  /* O === significa comparar se duas coisas são exatamente iguais */
  /* "" é uma string que não tem nada dentro */
  /*|| significa OU */
  /*textContent permite acessar ou alterar o texto que está dentro daquele elemento */
  /*Uma função é um bloco de código que pode ser executado quando necessário */

  console.log(nome);
  console.log(idade);
  console.log(email);

  if (nome === "" || idade === 0 || email === "") {
    document.getElementById("mensagem").textContent =
      "preencha todos os campos";
  } else {
    document.getElementById("mensagem").textContent = "oi," + nome;
  }
});
