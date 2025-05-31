
import { useParams } from 'react-router-dom';

const DetalleAlumno = ({ alumnos }) => {
  const { id } = useParams();
  const alumno = alumnos.find((a) => a.id === id);

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div>
      <h2>Detalle del Alumno</h2>
      <ul>
        {Object.entries(alumno).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetalleAlumno;