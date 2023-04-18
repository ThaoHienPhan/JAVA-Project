import "./App.css";
import Auth from "./Features/Auth/Auth";
import HomePage from "./Features/Home/components/HomePage";
import ListView from "./ListView";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <Auth /> */}
      <Footer/>
      {/* <ListView /> */}
    </div>
  );
}

export default App;
