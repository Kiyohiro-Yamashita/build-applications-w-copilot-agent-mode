import { Router } from 'express';
import type { Model } from 'mongoose';

export function createCollectionRouter<T>(model: Model<T>) {
  const router = Router();

  router.get('/', async (_request, response) => {
    const records = await model.find().exec();
    response.json(records);
  });

  router.post('/', async (request, response) => {
    const record = await model.create(request.body);
    response.status(201).json(record);
  });

  return router;
}
