import './App.css';

/* Extrarnal */
import { Toaster } from 'react-hot-toast';
import 'swiper/css';
import 'swiper/css/pagination';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
