import './App.css';

/* Extrarnal */
import 'swiper/css';
import 'swiper/css/pagination';
import Header from './pages/SharedPage/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
