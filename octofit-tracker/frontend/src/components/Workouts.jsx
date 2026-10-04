import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'category', label: 'Category' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'description', label: 'Description' },
  { key: 'exercises', label: 'Exercises' },
]

export default function Workouts() {
  return <CollectionView title="Workouts" path="/api/workouts/" columns={columns} />
}
