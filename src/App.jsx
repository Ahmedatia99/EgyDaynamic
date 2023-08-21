import "@/assets/style/main.css";
import "@/assets/style/imports/funky.css";
import Nav from "./component/Nav";
import About from "./component/slider/About";
import Landing from "./component/LandPage/Landing";
import Comment from "./component/comments/Comment";
import Service from "./component/service/Service";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <main className=" mx-auto">
      <Nav />
      <About />
      <Landing />
      <Comment />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
}
export default App;
