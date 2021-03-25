
import './App.css';
import Header from './component/Header';
import image1 from "./assets/images/cryptonews.54869ee3.png"
import RatePalate from './component/RatePalate';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="first_banner">
        <img src={image1} className="banner1" />
      </div>
      <RatePalate />
      <Footer />
    </div>
  );
}

export default App;
