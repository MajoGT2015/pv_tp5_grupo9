
import { Link } from 'react-router-dom';

const ListaAlumnos = ({ alumnos, onEliminar }) => {
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nombre}</td>
              <td>{a.apellido}</td>
              <td>{a.curso}</td>
              <td>
                <Link to={`/alumnos/${a.id}`}>Ver</Link>{' | '}
                <Link to={`/alumnos/${a.id}/editar`}>Editar</Link>{' | '}
                <button onClick={() => onEliminar(a.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAlumnos;