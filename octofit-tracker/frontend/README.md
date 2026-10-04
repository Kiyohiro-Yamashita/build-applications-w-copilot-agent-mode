# OctoFit Tracker frontend

The React 19 presentation tier is built with Vite, React Router, and Bootstrap.

## API configuration

During local and Codespaces development, Vite proxies `/api` requests to the
backend at `http://localhost:8000`. The browser therefore makes same-origin
requests through the frontend on port 5173; keep the backend running on port
8000.

For a production build deployed to Codespaces, define `VITE_CODESPACE_NAME` in
`octofit-tracker/frontend/.env.local` (the Codespace name without a port or
domain) and restart the Vite development server before building. If it is not
set, the frontend can infer the name from a `-5173.app.github.dev` browser
hostname. To use a different API URL, set `VITE_API_BASE_URL`; this takes
precedence over the Codespaces setting.

Outside Codespaces, a production build without an API URL override or a
Codespaces hostname safely falls back to `http://localhost:8000`.
