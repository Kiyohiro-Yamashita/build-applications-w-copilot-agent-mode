# OctoFit Tracker frontend

The React 19 presentation tier is built with Vite, React Router, and Bootstrap.

## API configuration

During local and Codespaces development, Vite proxies `/api` requests to the
backend at `http://localhost:8000`. The browser therefore makes same-origin
requests through the frontend on port 5173; keep the backend running on port
8000.

To use a different API URL, set `VITE_API_BASE_URL` in
`octofit-tracker/frontend/.env.local` and restart the Vite development server.
For production builds without an override, the frontend derives the API host
from a `-5173.app.github.dev` browser hostname.

Outside Codespaces, a production build without an override uses
`http://localhost:8000`.
