import mongoose from 'mongoose';
import { Types } from 'mongoose';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const teams = [
  {
    _id: new Types.ObjectId('650000000000000000000001'),
    name: 'Trail Blazers',
    description: 'Outdoor runners and hikers.',
    totalPoints: 0,
  },
  {
    _id: new Types.ObjectId('650000000000000000000002'),
    name: 'Core Crushers',
    description: 'Strength and conditioning enthusiasts.',
    totalPoints: 0,
  },
];

const users = [
  {
    _id: new Types.ObjectId('650000000000000000000011'),
    username: 'alex_runner',
    displayName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    team: teams[0]._id,
    points: 420,
  },
  {
    _id: new Types.ObjectId('650000000000000000000012'),
    username: 'sam_hiker',
    displayName: 'Sam Rivera',
    email: 'sam.rivera@example.com',
    team: teams[0]._id,
    points: 350,
  },
  {
    _id: new Types.ObjectId('650000000000000000000013'),
    username: 'jordan_lifts',
    displayName: 'Jordan Lee',
    email: 'jordan.lee@example.com',
    team: teams[1]._id,
    points: 390,
  },
  {
    _id: new Types.ObjectId('650000000000000000000014'),
    username: 'taylor_moves',
    displayName: 'Taylor Kim',
    email: 'taylor.kim@example.com',
    team: teams[1]._id,
    points: 310,
  },
];

const activities = [
  {
    _id: new Types.ObjectId('650000000000000000000021'),
    user: users[0]._id,
    type: 'Running',
    durationMinutes: 35,
    distanceKm: 5.2,
    calories: 410,
    occurredAt: new Date('2026-09-28T07:30:00.000Z'),
  },
  {
    _id: new Types.ObjectId('650000000000000000000022'),
    user: users[1]._id,
    type: 'Hiking',
    durationMinutes: 65,
    distanceKm: 6.8,
    calories: 520,
    occurredAt: new Date('2026-09-29T08:00:00.000Z'),
  },
  {
    _id: new Types.ObjectId('650000000000000000000023'),
    user: users[2]._id,
    type: 'Strength Training',
    durationMinutes: 45,
    calories: 330,
    occurredAt: new Date('2026-09-29T17:00:00.000Z'),
  },
  {
    _id: new Types.ObjectId('650000000000000000000024'),
    user: users[3]._id,
    type: 'Cycling',
    durationMinutes: 40,
    distanceKm: 12,
    calories: 370,
    occurredAt: new Date('2026-09-30T16:30:00.000Z'),
  },
  {
    _id: new Types.ObjectId('650000000000000000000025'),
    user: users[0]._id,
    type: 'Yoga',
    durationMinutes: 25,
    calories: 120,
    occurredAt: new Date('2026-10-01T07:00:00.000Z'),
  },
  {
    _id: new Types.ObjectId('650000000000000000000026'),
    user: users[2]._id,
    type: 'Running',
    durationMinutes: 30,
    distanceKm: 4.5,
    calories: 360,
    occurredAt: new Date('2026-10-02T06:45:00.000Z'),
  },
];

const leaderboard = [
  { period: 'weekly', points: 420, rank: 1, user: users[0], team: teams[0] },
  { period: 'weekly', points: 390, rank: 2, user: users[2], team: teams[1] },
  { period: 'weekly', points: 350, rank: 3, user: users[1], team: teams[0] },
  { period: 'weekly', points: 310, rank: 4, user: users[3], team: teams[1] },
  { period: 'monthly', points: 1680, rank: 1, user: users[0], team: teams[0] },
  { period: 'monthly', points: 1510, rank: 2, user: users[2], team: teams[1] },
  { period: 'monthly', points: 1390, rank: 3, user: users[1], team: teams[0] },
  { period: 'monthly', points: 1220, rank: 4, user: users[3], team: teams[1] },
  { period: 'all-time', points: 8200, rank: 1, user: users[0], team: teams[0] },
  { period: 'all-time', points: 7900, rank: 2, user: users[2], team: teams[1] },
  { period: 'all-time', points: 7350, rank: 3, user: users[1], team: teams[0] },
  { period: 'all-time', points: 6980, rank: 4, user: users[3], team: teams[1] },
].map(({ period, points, rank, user, team }, index) => ({
  _id: new Types.ObjectId(`6500000000000000000000${31 + index}`),
  period,
  points,
  rank,
  user: user._id,
  team: team._id,
}));

const workouts = [
  {
    _id: new Types.ObjectId('650000000000000000000051'),
    title: 'Beginner Full-Body Circuit',
    description: 'A balanced introduction to strength training.',
    category: 'Strength',
    difficulty: 'beginner',
    durationMinutes: 25,
    exercises: ['Bodyweight squats', 'Wall push-ups', 'Glute bridges', 'Plank'],
  },
  {
    _id: new Types.ObjectId('650000000000000000000052'),
    title: 'Tempo Run',
    description: 'Build aerobic fitness with a steady, sustained effort.',
    category: 'Running',
    difficulty: 'intermediate',
    durationMinutes: 35,
    exercises: ['5-minute warm-up', '20-minute tempo run', '10-minute cool-down'],
  },
  {
    _id: new Types.ObjectId('650000000000000000000053'),
    title: 'Mobility and Recovery',
    description: 'A gentle mobility session for rest and recovery days.',
    category: 'Recovery',
    difficulty: 'beginner',
    durationMinutes: 20,
    exercises: ['Cat-cow stretch', 'Hip flexor stretch', 'Thoracic rotations', 'Child’s pose'],
  },
  {
    _id: new Types.ObjectId('650000000000000000000054'),
    title: 'Advanced Strength Builder',
    description: 'A challenging compound-lift session for experienced athletes.',
    category: 'Strength',
    difficulty: 'advanced',
    durationMinutes: 50,
    exercises: ['Deadlifts', 'Bench press', 'Pull-ups', 'Walking lunges'],
  },
];

async function seedDatabase(): Promise<void> {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all(
      teams.map(({ _id, ...team }) => Team.updateOne({ _id }, { $set: team }, { upsert: true })),
    );

    await Promise.all(
      users.map(({ _id, ...user }) => User.updateOne({ _id }, { $set: user }, { upsert: true })),
    );

    await Promise.all([
      ...activities.map(({ _id, ...activity }) =>
        Activity.updateOne({ _id }, { $set: activity }, { upsert: true }),
      ),
      ...leaderboard.map(({ _id, ...entry }) =>
        Leaderboard.updateOne({ _id }, { $set: entry }, { upsert: true }),
      ),
      ...workouts.map(({ _id, ...workout }) =>
        Workout.updateOne({ _id }, { $set: workout }, { upsert: true }),
      ),
      ...teams.map((team) =>
        Team.updateOne(
          { _id: team._id },
          {
            $set: {
              members: users.filter((user) => user.team.equals(team._id)).map((user) => user._id),
              totalPoints: users
                .filter((user) => user.team.equals(team._id))
                .reduce((total, user) => total + user.points, 0),
            },
          },
        ),
      ),
    ]);

    const [userCount, teamCount, activityCount, leaderboardCount, workoutCount] = await Promise.all(
      [User, Team, Activity, Leaderboard, Workout].map((model) => model.countDocuments()),
    );
    console.log(
      `Database seeding complete: ${userCount} users, ${teamCount} teams, ${activityCount} activities, ${leaderboardCount} leaderboard entries, ${workoutCount} workouts.`,
    );
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
