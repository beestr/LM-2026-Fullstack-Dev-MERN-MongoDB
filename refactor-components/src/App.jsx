import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 800
    },
    {
      id: 2,
      name: "Keyboard",
      price: 50
    },
    {
      id: 3,
      name: "Mouse",
      price: 25
    }
  ];

  return (
    <div>
      <Header title="Refactor Components Demo" />
      <ProductList products={products} />
    </div>
  );
}

export default App;