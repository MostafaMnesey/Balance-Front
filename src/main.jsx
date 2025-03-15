import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import'../node_modules/flowbite/dist/flowbite.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/flowbite-datepicker/dist/js/datepicker.js'
import '../node_modules/flowbite-datepicker/dist/css/datepicker.css'
createRoot(document.getElementById('root')).render(
 
    <App />

)
