import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import db from './config/database';
import Activity from './models/Activity';
import Leaderboard from './models/Leaderboard';
import Team from './models/Team';
import User from './models/User';
import Workout from './models/Workout';
import { createCollectionRouter } from './routes/collectionRouter';

const app = express();
const port = Number(process.env.PORT || 8000);
export const baseUrl = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors());
app.use(express.json());

app.use('/api/users/', createCollectionRouter(User));
app.use('/api/teams/', createCollectionRouter(Team));
app.use('/api/activities/', createCollectionRouter(Activity));
app.use('/api/leaderboard/', createCollectionRouter(Leaderboard));
app.use('/api/workouts/', createCollectionRouter(Workout));

app.get('/api/health', (_request, response) => {
  const databaseStatus = ['disconnected', 'connected', 'connecting', 'disconnecting'][
    db.readyState
  ] ?? 'unknown';

  response.json({
    status: 'ok',
    database: databaseStatus,
  });
});

app.use(
  (
    error: unknown,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction,
  ) => {
    if (
      error instanceof mongoose.Error.ValidationError ||
      error instanceof mongoose.Error.CastError
    ) {
      response.status(400).json({ error: error.message });
      return;
    }

    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      error.code === 11000
    ) {
      response.status(409).json({ error: 'A record with these unique fields already exists.' });
      return;
    }

    console.error('API request failed:', error);
    response.status(500).json({ error: 'An unexpected server error occurred.' });
  },
);

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit API listening at ${baseUrl} (port ${port})`);
});