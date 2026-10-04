import CollectionView from './CollectionView.jsx'
import { fetchCollection as fetch } from '../api.js'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'User' },
  { key: 'team', label: 'Team' },
  { key: 'period', label: 'Period' },
  { key: 'points', label: 'Points' },
]

export default function Leaderboard() {
  return <CollectionView title="Leaderboard" path="/api/leaderboard/" columns={columns} fetcher={fetch} />
}
