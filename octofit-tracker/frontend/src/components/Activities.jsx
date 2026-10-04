import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'user', label: 'User' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'distanceKm', label: 'Distance (km)' },
  { key: 'calories', label: 'Calories' },
  { key: 'occurredAt', label: 'Date' },
]

export default function Activities() {
  return <CollectionView title="Activities" path="/api/activities/" columns={columns} />
}
