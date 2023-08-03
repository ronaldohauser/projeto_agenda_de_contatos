// Elementos do DOM
const formContato = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');
const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');

// Array para armazenar os contatos
const contatos = [];

// Event listener para o formulário de cadastro
formContato.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter os valores do formulário
    const nome = inputNome.value;
    const telefone = inputTelefone.value;

    // Verifica se os campos estão preenchidos
    if (nome.trim() !== '' && telefone.trim() !== '') {
        // Verifica se o telefone já está cadastrado
        if (verificarTelefoneRepetido(telefone)) {
            // Exibir alerta para confirmar o cadastro mesmo assim
            if (confirm('Número de telefone já cadastrado. Deseja cadastrar mesmo assim?')) {
                // Adicionar contato
                adicionarContato(nome, telefone);
                // Limpar campos do formulário
                inputNome.value = '';
                inputTelefone.value = '';
            }
        } else {
            // Adiciona contato
            adicionarContato(nome, telefone);
            // Limpa campos do formulário
            inputNome.value = '';
            inputTelefone.value = '';
        }
    }
});

// Função para verificar se o telefone já está cadastrado
function verificarTelefoneRepetido(telefone) {
    return contatos.some(contato => contato.telefone === telefone);
}

// Função para adicionar um contato
function adicionarContato(nome, telefone) {
    const contato = {
        nome: nome,
        telefone: telefone
    };

    contatos.push(contato);

    const linha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaTelefone = document.createElement('td');

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaTelefone);

    tabelaContatos.appendChild(linha);
}
