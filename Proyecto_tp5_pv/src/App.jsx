import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ListaAlumnos from './pages/ListaAlumnos';
import AgregarAlumno from './pages/AgregarAlumno';
import EditarAlumno from './pages/EditarAlumno';
import DetalleAlumno from './pages/DetalleAlumno';
import AcercaDe from './pages/AcercaDe';

function App() {
  const [alumnos, setAlumnos] = useState([
    {
      id: 'APU00999',
      nombre: 'María Eugenia',
      apellido: 'Diaz',
      curso: 'Tercero',
      email: 'mariadiaz@mail.com',
      domicilio: 'Av. Congreso 125',
      telefono: '3884895999',
    },
  ]);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  const editarAlumno = (alumnoEditado) => {
    setAlumnos(alumnos.map((a) => (a.id === alumnoEditado.id ? alumnoEditado : a)));
  };

  const eliminarAlumno = (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      setAlumnos(alumnos.filter((a) => a.id !== id));
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={
          <ListaAlumnos alumnos={alumnos} onEliminar={eliminarAlumno} />
        } />
        <Route path="/alumnos/nuevo" element={
          <AgregarAlumno onAgregar={agregarAlumno} />
        } />
        <Route path="/alumnos/:id/editar" element={
          <EditarAlumno alumnos={alumnos} onEditar={editarAlumno} />
        } />
        <Route path="/alumnos/:id" element={
          <DetalleAlumno alumnos={alumnos} />
        } />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
