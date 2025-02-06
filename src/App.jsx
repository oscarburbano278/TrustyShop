
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import IngresoDatos from "./pages/ingresoDatos/ingresoDatos";
import DinerApp from "./pages/obtDineroApp/dinerApp";

function App() { 

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/IngresoDatos" element={<IngresoDatos />} />
            <Route path="/DinerApp" element={<DinerApp />} />
        </Routes>
        
    );

}

export default App;
