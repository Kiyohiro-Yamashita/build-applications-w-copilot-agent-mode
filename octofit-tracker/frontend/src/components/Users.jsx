import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
]

export default function Users() {
  return <CollectionView title="Users" path="/api/users/" columns={columns} />
}
