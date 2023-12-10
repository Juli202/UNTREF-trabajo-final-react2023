import {createRoot}from 'react-dom/client'
import App from './App.jsx'

let entry = document.getElementById("root");
const root = createRoot(entry); 
root.render(<App />);
