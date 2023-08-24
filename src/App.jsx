import "./assets/style/main.css";
import Nav from "./components/Nav";
import Navigation from "./components/navigation/Navigation";
import Customer from "./components/Customer";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <main className=" mx-auto">
      <Nav />
      <Navigation />
      <Customer />
      <Footer />
    </main>
  );
}
export default App;
