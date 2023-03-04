/* Seleciona o elemento HTML com o ID "modo-toggle" e o armazena na constante "modoToggle" */
const modoToggle = document.querySelector('#modo-toggle');

/* Seleciona o elemento HTML "body" e o armazena na constante "body" */
const body = document.body;

/* Adiciona um evento de clique ao elemento "modoToggle" que alterna a classe "dark-mode" do elemento "body" e o texto do elemento "modoToggle" */
modoToggle.addEventListener('click', () => {
    
    /* Alterna a classe "dark-mode" do elemento "body" ao clicar no elemento "modoToggle" */
    body.classList.toggle('dark-mode');

    /* Verifica se a classe "dark-mode" está presente no elemento "body" e altera o texto do elemento "modoToggle" de acordo com isso */
    if (body.classList.contains('dark-mode')) {
        modoToggle.textContent = 'Modo Claro';
    } else {
        modoToggle.textContent = 'Modo Escuro';
    }
});


/* 
O código acima adiciona um evento de clique ao botão toggle para alternar o modo claro e escuro da página,
bem como alterar o texto do botão para refletir o novo modo. Se a classe "dark-mode" estiver presente no elemento "body",
significa que a página está no modo escuro e o texto do botão deve ser "Modo Claro", 
caso contrário, o texto deve ser "Modo Escuro". 
A função "toggle" da classe "classList" é usada para alternar a classe "dark-mode" do elemento "body".
*/