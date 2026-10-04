import { model, Schema, Types } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    team: { type: Types.ObjectId, ref: 'Team' },
    period: { type: String, enum: ['weekly', 'monthly', 'all-time'], required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export default model('Leaderboard', leaderboardSchema);
