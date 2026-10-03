import { model, Schema, Types } from 'mongoose';

const activitySchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    distanceKm: { type: Number, min: 0 },
    calories: { type: Number, min: 0 },
    occurredAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true },
);

export default model('Activity', activitySchema);
