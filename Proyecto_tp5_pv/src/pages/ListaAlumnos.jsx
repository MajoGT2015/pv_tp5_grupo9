
import { Link as RouterLink } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Stack
} from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

const ListaAlumnos = ({ alumnos, onEliminar }) => {
  return (
    // 'Paper' es un contenedor de MUI que da un efecto de elevación.
    <Paper sx={{ width: '100%', overflow: 'hidden', p: 2, mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Lista de Alumnos
      </Typography>

      {/* 'TableContainer' es clave para que la tabla sea responsive y tenga scroll si es necesario */}
      <TableContainer>
        <Table stickyHeader aria-label="tabla de alumnos">
          <TableHead>
            <TableRow>
              {/* Usamos la prop 'sx' para dar estilos, como el texto en negrita */}
              <TableCell sx={{ fontWeight: 'bold' }}>LU</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Apellido</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Curso</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alumnos.map((a) => (
              <TableRow key={a.id} hover>
                <TableCell component="th" scope="row">
                  {a.id}
                </TableCell>
                <TableCell>{a.nombre}</TableCell>
                <TableCell>{a.apellido}</TableCell>
                <TableCell>{a.curso}</TableCell>
                <TableCell align="right">
                  {/* 'Stack' es perfecto para agrupar elementos como botones, con espaciado uniforme */}
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Tooltip title="Ver Detalles">
                      {/*
                        Integramos React Router con MUI usando la prop 'component'.
                        'IconButton' ahora se comportará como un 'Link' de react-router.
                      */}
                      <IconButton component={RouterLink} to={`/alumnos/${a.id}`} color="primary">
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar Alumno">
                      <IconButton component={RouterLink} to={`/alumnos/${a.id}/editar`} color="secondary">
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar Alumno">
                      {/* El color 'error' le da un tono rojo, indicando una acción destructiva */}
                      <IconButton onClick={() => onEliminar(a.id)} color="error">
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ListaAlumnos;