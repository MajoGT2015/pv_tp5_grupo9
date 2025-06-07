import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const DetalleAlumno = ({ alumnos }) => {
  const { id } = useParams();
  const alumno = alumnos.find((a) => a.id === id);

  if (!alumno) {
    return <Typography variant="h6">Alumno no encontrado</Typography>;
  }

  // Excluir 'id' de los detalles a mostrar en la lista
  const { id: alumnoId, ...detallesMostrables } = alumno;

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Detalle del Alumno
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          ID: {alumnoId}
        </Typography>
        <List>
          {Object.entries(detallesMostrables).map(([key, value]) => (
            <div key={key}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="body1">
                      <strong style={{ textTransform: 'capitalize' }}>{key}:</strong>
                    </Typography>
                  }
                  secondary={
                    <Typography component="span" variant="body2" color="text.secondary">
                      {String(value)}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default DetalleAlumno;