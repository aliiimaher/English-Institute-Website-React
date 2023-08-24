import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");