import { useState, useEffect } from 'react';
import Product from './Product';
import Sidebar from './Sidebar';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para o produto selecionado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para produtos filtrados

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Erro ao carregar produtos');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Inicializando a lista filtrada com todos os produtos
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleCategoryFilter = (category) => {
    if (category === 'all') {
      setFilteredProducts(products); // Se categoria for 'all', mostra todos os produtos
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered); // Filtra os produtos pela categoria
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Atualiza o produto selecionado
  };

  if (loading)
    return (

<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading products...</span>
  </div>
</div>

    );
  if (error)
    return (
      <div style={styles.center}>
        <p>Error loading products. Please try again!</p>
      </div>
    );

  return (
    <div style={styles.container}>
      {/* Barra Lateral com filtro de categoria */}
      <Sidebar onCategoryChange={handleCategoryFilter} />

      {/* Se um produto foi selecionado, mostra o produto selecionado */}
      {selectedProduct ? (
        <div style={styles.details}>
          <h2>{selectedProduct.title}</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            style={styles.productImage}
          />
          <p style={styles.description}>{selectedProduct.description}</p>
          <p style={styles.price}>Price: $ {selectedProduct.price.toFixed(2)}</p>
          <button style={styles.cartButton}>Add to Cart</button>
          <button onClick={() => setSelectedProduct(null)} style={styles.backButton}>
          To go back
          </button>
        </div>
        
      ) : (
        // Caso contrário, exibe todos os produtos filtrados
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)} // Ao clicar, chama a função para exibir detalhes
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
    flex: 1,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    fontSize: '18px',
    color: '#333',
  },
  details: {
    textAlign: 'center',
    padding: '20px',
  },
  productImage: {
    maxWidth: '300px',
    margin: '20px auto',
    display: 'block',
  },
  description: {
    margin: '10px 0',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#555',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  cartButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
