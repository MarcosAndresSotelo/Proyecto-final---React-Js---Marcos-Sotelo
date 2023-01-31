
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import Inicio from "./componentes/pages/inicio/Inicio"
import AcercaDe from "./componentes/pages/acercaDe/AcercaDe"
import Contacto from "./componentes/pages/contacto/Contacto"
import CarritoCompras from './componentes/carrito/CarritoCompras';


function App() {
  return (
    <BrowserRouter>

    <NavBar />
      {/* <ItemListContainer /> */}
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/acercaDe' element={<AcercaDe />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/carrito' element={<CarritoCompras />} />
        
        <Route path='/livingcomedor' element={<ItemListContainer />} />
        <Route path='/livingcomedor/:categoria' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
