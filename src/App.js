
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import CarritoCompras from './componentes/carrito/CarritoDeCompras';
import Footer from './componentes/footer/Footer';
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import NavBar from './componentes/navbar/NavBar';
import AcercaDe from "./componentes/pages/acercaDe/AcercaDe";
import Contacto from "./componentes/pages/contacto/Contacto";
import Inicio from "./componentes/pages/inicio/Inicio";
import { CartProvider } from './context/CarritoContext';

export const pathLivingComedor = 'livingcomedor';
export const pathDormitorioBano = 'dormitorioBano';


function App() {
  return (
    <BrowserRouter>

      <CartProvider>
        
      <NavBar />

        <Routes>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/acercaDe' element={<AcercaDe />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<CarritoCompras />} />

          <Route path='/livingcomedor' element={<ItemListContainer />} />
          <Route path='/livingcomedor/:categoria' element={<ItemListContainer />} />
          <Route path='/detail/:category/item/:id' element={<ItemDetailContainer />} />
          <Route path='/dormitorioBano' element={<ItemListContainer />} />
          <Route path='/dormitorioBano/:categoria' element={<ItemListContainer />} />
        </Routes>
      </CartProvider>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
