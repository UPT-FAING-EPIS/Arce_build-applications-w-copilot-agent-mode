const express = require('express');
const app = express();
const port = 3000;

// Esta aplicación fue generada con Copilot Agent Mode basada en la historia de Octofit
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a Octofit!</h1><p>Tu asistente inteligente de fitness.</p>');
});

app.get('/api/workouts', (req, res) => {
  res.json([
    { id: 1, name: 'Cardio', duration: 30 },
    { id: 2, name: 'Fuerza', duration: 45 }
  ]);
});

app.listen(port, () => {
  console.log(`Octofit App escuchando en http://localhost:${port}`);
});
