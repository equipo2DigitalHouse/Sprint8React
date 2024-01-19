import MiComponente from "./components/color";
import Prueba from "./components/prueba"
import UsuariosApi from "./components/UsersApi";
import ProductsApi from "./components/ProductsApi";
import NotFound from "./components/NotFound"

import { Link, Route, Routes, Switch } from 'react-router-dom'; 

// import MiComponente from "./components/MiComponente";
function App() {
  return (
      <div>
        <Link to="/">PRUEBA</Link> <br/>
        <Link to="/productsApi">Api de Productos</Link><br/>
        <Link to="/usuariosApi">Api de Usuarios</Link><br/>
        
        <hr/>
        
          <Routes>
            <Route exact path = "/" element={<Prueba/>} />
            <Route path = "/productsApi" element={<ProductsApi/>} />
            <Route path = "/usuariosApi" element={<UsuariosApi/>} />
            <Route  path = "*" element={<NotFound />} />
          </Routes>
      
      </div>
  );
}

export default App;
