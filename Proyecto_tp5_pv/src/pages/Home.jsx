import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Bienvenidos al Sistema de Gestión de Alumnos
        </Typography>
        <Typography variant="h6">
          Utilice el menú para navegar por la aplicación.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
