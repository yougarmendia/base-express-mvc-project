const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hola a todos, mi nombre es You Garmendia');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
