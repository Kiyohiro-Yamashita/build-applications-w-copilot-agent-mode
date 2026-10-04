import CollectionView from './CollectionView.jsx'
import { fetchCollection as fetch } from '../api.js'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'category', label: 'Category' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'description', label: 'Description' },
  { key: 'exercises', label: 'Exercises' },
]

export default function Workouts() {
  return <CollectionView title="Workouts" path="/api/workouts/" columns={columns} fetcher={fetch} />
}
