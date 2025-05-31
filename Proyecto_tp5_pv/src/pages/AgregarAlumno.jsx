import AlumnoForm from '../components/AlumnoForm';
import { useNavigate } from 'react-router-dom';

const AgregarAlumno = ({ onAgregar }) => {
  const navigate = useNavigate();

  const handleAgregar = (nuevoAlumno) => {
    onAgregar(nuevoAlumno);
    navigate('/alumnos');
  };

  const datosIniciales = {
    id: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
  };

  return (
    <div>
      <h2>Agregar Alumno</h2>
      <AlumnoForm
        initialData={datosIniciales}
        onSubmit={handleAgregar}
        label="Agregar"
      />
    </div>
  );
};

export default AgregarAlumno;