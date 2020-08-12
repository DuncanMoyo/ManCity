import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './Assets/css/app.css'
import {BrowserRouter} from 'react-router-dom'
import './firebase'


const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

