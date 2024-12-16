// components/Sidebar.js
export default function Sidebar({ onCategoryChange }) {
  const categories = ['all', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

  return (
    <div className="d-flex flex-column p-3 bg-light shadow-sm rounded" style={{ width: '250px' }}>
      <h3 className="mb-4">Categories</h3>
      <ul className="list-unstyled">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategoryChange(category)}  // Passa a categoria para o ProductList
            className="p-2 border-bottom"
            style={{ cursor: 'pointer' }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
