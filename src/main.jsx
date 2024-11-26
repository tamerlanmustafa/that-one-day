import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

    

createRoot(document.getElementById('root')).render(
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <App />
    </BrowserRouter>
)
