const products = [
  { title: 'Col', id: 1 },
  { title: 'Ajo', id: 2 },
  { title: 'Manzana', id: 3 },
];

export default function ProductosList() {
  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}