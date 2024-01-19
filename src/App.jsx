import Home from "./components/Home"
import UsuariosApi from "./components/UsersApi";
import ProductsApi from "./components/ProductsApi";
import NotFound from "./components/NotFound"
import ProductId from "./components/ProductId"
import TotalProductPanel from "./components/TotalProductPanel";
import TotalUserPanel from "./components/TotalUserPanel";

import { Link, Route, Routes, Switch } from 'react-router-dom'; 

// import MiComponente from "./components/MiComponente";
function App() {
  return (
      <div>
        <Link to="/">Home</Link> <br/>
        <Link to="/productsApi">Api de Productos</Link><Link to= "/ProductQuantity" style={{marginLeft:"30px"}}>Cantidad de Productos</Link><br/>
        <Link to="/usuariosApi">Api de Usuarios</Link><Link to= "/UserQuantity" style={{marginLeft:"30px"}}>Cantidad de Usuarios</Link><br/>
        <Link to="/Product">¡Chequeá nuestro ultimo producto agregado!</Link><br/>
        
        <hr/>
        
          <Routes>
            <Route exact path = "/" element= {<Home />} />
            <Route path = "/productsApi" element= {<ProductsApi />} />
            <Route path = "/usuariosApi" element= {<UsuariosApi />} />
            <Route path = "/Product" element= {<ProductId />} />
            <Route path = "/ProductQuantity" element= {<TotalProductPanel />} />
            <Route path = "/UserQuantity" element= {<TotalUserPanel />} />
            <Route path = "*" element= {<NotFound />} />
          </Routes>
      
      </div>
  );
}

export default App;
