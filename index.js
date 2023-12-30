function registerUser() {
    // Obtém os valores do formulário
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;

    // Calcula a idade do usuário
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();

    // Verifica se o usuário tem pelo menos 16 anos
    if (age < 16) {
        alert('Você deve ter pelo menos 16 anos para se cadastrar.');
    } else {
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor (por exemplo, usando AJAX)
        alert(`Usuário ${username} cadastrado com sucesso!`);
    }
}