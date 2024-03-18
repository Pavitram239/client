import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductList />
    </div>
  );
};
export default App;
