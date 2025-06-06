import { useState, useEffect } from 'react';
import { TextField, Button, Box } from "@mui/material";
const AlumnoForm = ({ initialData, onSubmit, label }) => {
  const [form, setForm] = useState(initialData);

  useEffect(() => {
    setForm(initialData); // Actualiza el formulario si cambian los datos
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
   <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, mx: "auto" }}
    >
      {Object.entries(form).map(([key, value]) => (
        <TextField
          key={key}
          label={key}
          name={key}
          value={value}
          onChange={handleChange}
          required
          disabled={key === "id" && label === "Editar"} // LU no editable al editar
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        {label}
      </Button>
    </Box>
  );
};

export default AlumnoForm;