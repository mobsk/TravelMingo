function addInteractiveText(text, link) {
    const container = document.querySelector('.interactive-texts'); // Seleciona o container
    const anchor = document.createElement('a'); // Cria o elemento <a>
    anchor.href = link; // Define o link
    anchor.textContent = text; // Define o texto clicável
    anchor.target = "_self"; // Abre na mesma aba (ou "_blank" para nova aba)
    anchor.style.cursor = 'pointer'; // Estiliza o ponteiro para indicar interatividade
    container.appendChild(anchor); // Adiciona o link ao container
}
