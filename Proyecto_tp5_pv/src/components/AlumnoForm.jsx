import { useState, useEffect } from 'react';

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
    <form onSubmit={handleSubmit}>
      {Object.entries(form).map(([key, value]) => (
        <div key={key}>
          <label>{key}:</label>
          <input
            name={key}
            value={value}
            onChange={handleChange}
            required
            disabled={key === 'id' && label === 'Editar'} // LU no editable al editar
          />
        </div>
      ))}
      <button type="submit">{label}</button>
    </form>
  );
};

export default AlumnoForm;