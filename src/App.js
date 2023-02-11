import './App.css';

/* Extrarnal */
import 'swiper/css';
import 'swiper/css/pagination';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
