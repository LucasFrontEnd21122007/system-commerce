// Objeto para armazenar as rotas e seus manipuladores
const routes = {
    '/': {
      template: 'index.html',
      handler: () => showHome(),
    },
    '/products': {
      template: 'products.html',
      handler: () => showProducts(),
    },
    '/cart': {
      template: 'cart.html',
      handler: () => showCart(),
    },
  };
  
  // Função para carregar o conteúdo da rota
  const loadContent = async (path) => {
    const response = await fetch(path);
    const content = await response.text();
    document.getElementById('main-content').innerHTML = content;
  };
  
  // Função para navegar para uma rota
  const navigateTo = (path) => {
    history.pushState({}, '', path);
    loadContent(routes[path].template);
    routes[path].handler();
  };
  
  // Adicione mais funções de manipuladores aqui conforme necessário
  
  // Manipulador da página inicial
  const showHome = () => {
    // Lógica específica da página inicial (se houver)
  };
  
  // Manipulador da página de produtos
  const showProducts = async () => {
    // Recupera os produtos do servidor (simulado com PHP no exemplo anterior)
    const response = await fetch('php/products.php');
    const products = await response.json();
  
    // Exibe os produtos na página (simulado com console.log no exemplo)
    console.log('Produtos:', products);
  };
  
  // Manipulador da página do carrinho
  const showCart = () => {
    // Lógica específica da página do carrinho (se houver)
  };
  
  // Exporta a função de navegação
  export { navigateTo };
  // ... (código existente)

// Manipulador da página de produtos
const showProducts = async () => {
  // Recupera os produtos do servidor (simulado com PHP no exemplo anterior)
  const response = await fetch('php/products.php');
  const products = await response.json();

  // Exibe os produtos na página
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.innerHTML = `
      <p><strong>${product.name}</strong></p>
      <p>Price: $${product.price}</p>
      <hr>
    `;
    productList.appendChild(productItem);
  });
};

// ... (código existente)
