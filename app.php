<?php
// Simulação de recuperação de produtos do banco de dados
$products = [
    ['id' => 1, 'name' => 'Product 1', 'price' => 20.00],
    ['id' => 2, 'name' => 'Product 2', 'price' => 30.00],
    ['id' => 3, 'name' => 'Product 3', 'price' => 25.00],
];

echo json_encode($products);
?>