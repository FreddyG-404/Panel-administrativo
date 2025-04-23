import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clientes from './pages/Clientes';
import Proveedor from './pages/Proveedor';
import Usuarios from './pages/Usuarios';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
