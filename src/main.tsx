import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './sass/main.scss'
import ErrorBoundary from './pages/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!)
    .render(<ErrorBoundary><App /></ErrorBoundary>)
