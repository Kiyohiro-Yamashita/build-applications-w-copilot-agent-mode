import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function Dashboard() {
  return (
    <main className="container py-4">
      <section className="p-4 p-md-5 bg-light rounded-3" aria-labelledby="workspace-title">
        <p className="small text-secondary text-uppercase mb-2">Fitness tracker</p>
        <h2 id="workspace-title" className="display-6">Welcome to OctoFit Tracker</h2>
        <p className="text-secondary mb-4">
          Track activity, find your team, and see how you rank.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <Link className="btn btn-primary" to="/activities">View activities</Link>
          <Link className="btn btn-outline-primary" to="/leaderboard">Open leaderboard</Link>
        </div>
      </section>
    </main>
  )
}

function NotFound() {
  return (
    <main className="container py-5">
      <h2>Page not found</h2>
      <p><Link to="/">Return to the dashboard</Link></p>
    </main>
  )
}

function App() {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container flex-wrap">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src="/octofitapp-small.png" alt="" width="36" height="36" />
            <span>OctoFit Tracker</span>
          </Link>
          <nav className="d-flex flex-wrap gap-3" aria-label="Main navigation">
            {[
              ['Activities', '/activities'],
              ['Leaderboard', '/leaderboard'],
              ['Teams', '/teams'],
              ['Users', '/users'],
              ['Workouts', '/workouts'],
            ].map(([label, path]) => (
              <NavLink
                className={({ isActive }) => `text-white${isActive ? ' fw-bold' : ''}`}
                key={path}
                to={path}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
