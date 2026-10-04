import CollectionView from './CollectionView.jsx'
import { fetchCollection as fetch } from '../api.js'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
]

export default function Users() {
  return <CollectionView title="Users" path="/api/users/" columns={columns} fetcher={fetch} />
}
