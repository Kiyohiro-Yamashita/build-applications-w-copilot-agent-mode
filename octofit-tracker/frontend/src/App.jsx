import { Route, Routes } from 'react-router-dom'

function Dashboard() {
  return (
    <main className="container py-5">
      <header className="d-flex align-items-center gap-3 mb-5">
        <img
          src="/octofitapp-small.png"
          alt=""
          width="56"
          height="56"
          className="object-fit-contain"
        />
        <div>
          <p className="small text-secondary text-uppercase mb-1">Fitness tracker</p>
          <h1 className="h2 mb-0">OctoFit Tracker</h1>
        </div>
      </header>
      <section className="border-top pt-4" aria-labelledby="workspace-title">
        <h2 id="workspace-title" className="h4">Workspace ready</h2>
        <p className="text-secondary mb-0">Your fitness tracking workspace is ready to configure.</p>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default App
