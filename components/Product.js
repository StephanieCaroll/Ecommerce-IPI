
export default function Product({ product, onClick }) {
  return (
    <div
      className="card h-100 text-center shadow-sm"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3"
        style={{ height: '150px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title fs-5 fw-bold">{product.title}</h3>
        <p className="card-text text-primary fw-semibold">
          $ {product.price.toFixed(2)}
        </p>
        <button className="btn btn-primary mt-auto" onClick={onClick}>Add to Cart</button>
     
      </div>
    </div>
  );
}