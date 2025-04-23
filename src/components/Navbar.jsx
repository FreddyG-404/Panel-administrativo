import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
      <div className="text-lg font-bold">Panel de administrador</div>
      <div className="flex gap-4">
        <NavLink to="/" className="hover:underline">Clientes</NavLink>
        <NavLink to="/proveedor" className="hover:underline">Proveedor</NavLink>
        <NavLink to="/usuarios" className="hover:underline">Usuarios</NavLink>
        <NavLink to="/logout" className="hover:underline">Logout</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
