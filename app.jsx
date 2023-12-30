document.addEventListener('DOMContentLoaded', function () {
    // Configuração de rotas
    const routes = {
        '/': 'index.html',
        '/products': 'products.html',
        '/cart': 'cart.html'
    };

    // Função para carregar o conteúdo da rota
    const loadContent = async (path) => {
        const response = await fetch(path);
        const content = await response.text();
        document.getElementById('main-content').innerHTML = content;
    };

    // Navegação inicial
    const initialPath = window.location.pathname;
    loadContent(routes[initialPath]);

    // Navegação de página
    const navigateTo = (path) => {
        history.pushState({}, '', path);
        loadContent(routes[path]);
    };

    // Atualiza o conteúdo ao clicar nos links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = e.target.getAttribute('href');
            navigateTo(path);
        });
    });

    // Atualiza o conteúdo ao usar os botões "Voltar" e "Avançar" do navegador
    window.addEventListener('popstate', () => {
        const path = window.location.pathname;
        loadContent(routes[path]);
    });
});
