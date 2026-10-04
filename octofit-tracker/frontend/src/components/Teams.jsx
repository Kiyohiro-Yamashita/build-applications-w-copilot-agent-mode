import CollectionView from './CollectionView.jsx'
import { fetchCollection as fetch } from '../api.js'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Description' },
  { key: 'members', label: 'Members' },
  { key: 'totalPoints', label: 'Points' },
]

export default function Teams() {
  return <CollectionView title="Teams" path="/api/teams/" columns={columns} fetcher={fetch} />
}
