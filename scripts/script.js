// Módulo de comandos
const commands = {
    /**
     * Lista de comandos disponíveis
     */
    '/cursos': () => 'Lista de Cursos: HTML, CSS, JavaScript, PHP, Python',
    '/ajuda': () => 'Comandos disponíveis: /cursos, /github, /curriculo',
    '/github': () => 'https://github.com/ThiagoCabralWasem',
    '/curriculo': () => {
      const link = '../archives/curriculum.pdf'; // caminho para o arquivo ou o link
      const a = document.createElement('a');
      a.href = link;
      a.download = 'curriculum.pdf'; // nome do arquivo que quer realizar o download
      a.click();
      return 'Currículo baixado com sucesso!';
    },
  };
  
  // Módulo de saída
  const output = {
    /**
     Adiciona uma mensagem à div de saída
     * @param {string} mensagem
     */
    imprimir: (mensagem) => {
      const outputDiv = document.getElementById('output');
      if (mensagem.startsWith('https://')) {
        outputDiv.innerHTML += `<div><a href="${mensagem}" target="_blank">${mensagem}</a></div>`;
      } else {
        outputDiv.innerHTML += `<div>> ${mensagem}</div>`;
      }
      outputDiv.scrollTop = outputDiv.scrollHeight;
    },
  };
  
  // Módulo de entrada
  const input = {
    /**
     * Processa o comando de entrada
     * @param {string} input
     */
    processar: (input) => {
      const comando = commands[input.trim().toLowerCase()];
      if (comando) {
        output.imprimir(comando());
      } else {
        output.imprimir(`Comando "${input}" não reconhecido. Tente /ajuda.`);
      }
    },
  };
  
  // Inicialização
  document.getElementById('commandInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const inputValor = event.target.value;
      input.processar(inputValor);
      event.target.value = '';
    }
    const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.querySelector('a').setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseout', () => {
        dropdown.querySelector('a').setAttribute('aria-expanded', 'false');
    });
});
  });