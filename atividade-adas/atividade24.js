const cadastro = document.getElementById("cadastro");
const cadastros = []
// array que vai guardar todos os cadastros 
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
  } 
   else {
    // Cria um objeto com as informações do cadastro
    const novoCadastro = {
      nome: nome,
      email: email,
      idade: idade
    };

    // Coloca o cadastro dentro do array
    cadastros.push(novoCadastro);

    // Mostra os cadastros na tela
    mostrarCadastros();

    // Limpa os campos do formulário
    cadastro.reset();
  }
});
function mostrarCadastros() {
  const mensagem = document.getElementById("mensagem");

  // Limpa o conteúdo anterior
  mensagem.innerHTML = "";

  // Faz uma cópia do array e inverte a ordem
  const cadastrosInvertidos = [...cadastros].reverse();

  cadastrosInvertidos.forEach(function (cadastroAtual) {
    const indice = cadastros.indexOf(cadastroAtual);

    mensagem.innerHTML += `
      <div>
        <p>Nome: ${cadastroAtual.nome}</p>
        <p>Email: ${cadastroAtual.email}</p>
        <p>Idade: ${cadastroAtual.idade}</p>

        <button onclick="excluirCadastro(${indice})">
          Excluir
        </button>

        <hr>
      </div>
    `;
  });
}

function excluirCadastro(indice) {
  // Remove 1 item do array
  cadastros.splice(indice, 1);

  // Atualiza a lista na tela
  mostrarCadastros();
}
