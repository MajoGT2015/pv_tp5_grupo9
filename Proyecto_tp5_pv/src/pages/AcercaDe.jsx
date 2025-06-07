import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const AcercaDe = () => {
  return (
    <Box sx={{ p: 3 }}> {/* Box is a good general-purpose container, similar to a div */}
      <Typography variant="h4" component="h2" gutterBottom>
        Acerca de esta aplicación
      </Typography>
      <Typography variant="body1" paragraph>
        Esta aplicación fue desarrollada como parte del Trabajo Práctico N.º 5 de la materia Programación Visual.
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        Integrantes del grupo
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="Callahuanca Julio Ivan - usuario GitHub: Ivan1Julio" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Galarza Torres María - usuario GitHub MajoGT2015" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Portillo Maria Belén - usuario GitHub : belenpor" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Valeriano Hernán Joaquín - usuario GitHub: ValerianoHJ" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Vilte Luis Fernando - usuario GitHub: luivilte" />
        </ListItem>
      </List>

      <Typography variant="h5" component="h3" sx={{ mt: 4 }} gutterBottom> {/* mt for margin-top */}
        Tecnologías utilizadas
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="React + Vite" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="React Router DOM" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Eventos en React" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="JSX" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="JavaScript" />
        </ListItem>
      </List>
    </Box>
  );
};

export default AcercaDe;