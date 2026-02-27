import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Changed extension from .tsx to .jsx
import './index.css'

// Removed the "!" after getElementById
createRoot(document.getElementById("root")).render(<App />);