
    const modal = document.getElementById('loginModal');
    const mainContent = document.getElementById('main-content');
    const cadastrarModal = document.getElementById('cadastrarModal');

    // Modal de Login
    modal.addEventListener('show.bs.modal', function () {
    mainContent.classList.add('blur-transicao-login');
});

    modal.addEventListener('hidden.bs.modal', function () {
    mainContent.classList.remove('blur-transicao-login');
});

    // Modal de Cadastro
    cadastrarModal.addEventListener('show.bs.modal', function () {
    mainContent.classList.add('blur-transicao-cadastro');
});

    cadastrarModal.addEventListener('hidden.bs.modal', function () {
    mainContent.classList.remove('blur-transicao-cadastro');
});