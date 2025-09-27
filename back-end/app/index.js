// const express = require('express')
// const cors = require('cors')

// const router = require('./routes')

// const app = express()
// app.use(cors())
// const PORT = process.env.PORT || 3000;

// app.use(router)

// app.listen(PORT, () => console.log(`Magic happens on port ${PORT}`))

const express = require('express');
const cors = require('cors');

const router = require('./routes');

const app = express();

// (1) Proxy & middlewares
app.set('trust proxy', 1);                 // utile derrière un reverse proxy (Render, Railway…)

const allowed = ['https://carolegrllt.github.io', 'http://localhost:5173'];
app.use(cors({ origin: allowed }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// (2) Healthcheck & racine (pratique pour tester que ça tourne)
app.get('/', (_req, res) => res.send('SportSee API is running'));
app.get('/healthz', (_req, res) => res.status(200).json({ status: 'ok' }));

// (3) Routes de l’API
app.use('/', router);

// (4) 404 & gestion d’erreurs
app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'Internal Server Error' });
});

// (5) Lancement — le host 0.0.0.0 est safe pour le déploiement
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Magic happens on http://${HOST}:${PORT}`);
});
