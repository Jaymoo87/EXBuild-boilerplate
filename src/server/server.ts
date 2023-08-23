import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'World' });
});

app.listen(3000);
