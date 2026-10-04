import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Description' },
  { key: 'members', label: 'Members' },
  { key: 'totalPoints', label: 'Points' },
]

export default function Teams() {
  return <CollectionView title="Teams" path="/api/teams/" columns={columns} />
}
