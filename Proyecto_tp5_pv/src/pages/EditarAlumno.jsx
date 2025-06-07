import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm';
import { Box, Typography } from '@mui/material'; // Import MUI components

const EditarAlumno = ({ alumnos, onEditar }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find((a) => a.id === id);

  if (!alumno) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error">
          Alumno no encontrado
        </Typography>
      </Box>
    );
  }

  const handleEditar = (alumnoEditado) => {
    onEditar(alumnoEditado);
    navigate('/alumnos');
  };

  return (
    <Box sx={{ p: 3 }}> {/* Use Box for general layout and spacing */}
      <Typography variant="h4" component="h2" gutterBottom>
        Editar Alumno
      </Typography>
      <AlumnoForm
        initialData={alumno}
        onSubmit={handleEditar}
        label="Editar"
      />
    </Box>
  );
};

export default EditarAlumno;