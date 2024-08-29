document.getElementById('commandInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = event.target.value;
        handleCommand(input);
        event.target.value = ''; 
    }
});

function handleCommand(input) {
    const outputDiv = document.getElementById('output');


    switch (input.trim().toLowerCase()) {
        case '/cursos':
            outputDiv.innerHTML += '<div>> Lista de Cursos: HTML, CSS, JavaScript, PHP, Python</div>';
            break;
        case '/ajuda':
            outputDiv.innerHTML += '<div>> Comandos disponíveis: /cursos, /ajuda</div>';
            break;
        default:
            outputDiv.innerHTML += `<div>> Comando "${input}" não reconhecido. Tente /ajuda.</div>`;
    }

    outputDiv.scrollTop = outputDiv.scrollHeight;
}
