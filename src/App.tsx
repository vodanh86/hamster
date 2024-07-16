import './App.css';
import WebApp from '@twa-dev/sdk'
import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './routes/Layout';
import Home from './routes/Home';
import About from './routes/About';
import Connect from './routes/Connect';
import NoMatch from './routes/NoMatch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Hamster Kombat</h1>

        <p>
          This example demonstrates some of the core features of React Router
          including nested <code>&lt;Route&gt;</code>s,{" "}
          <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
          "*" route (aka "splat route") to render a "not found" page when someone
          visits an unrecognized URL.
          <div className="card">
          <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
              Show Alert
          </button>
        </div>
        </p>

        {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="connect" element={<Connect />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App
