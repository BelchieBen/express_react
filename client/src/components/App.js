import '../css/App.css';
import React from 'react'
import {Link} from 'react-router-dom'

function App() {
  return (
    <nav>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default App;
