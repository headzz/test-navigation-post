import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const fetchDataTikTok = () => {
    const csrfState = Math.random().toString(36).substring(2);
    document.cookie = `csrfState=${csrfState}; expires=Thu, 29 Jun 2023 23:55:00 UTC`
    const url = `https://www.tiktok.com/auth/authorize/client_key=${import.meta.env.VITE_CLIENT_TEST}&response_type=code&scope=user.info.basic,video.list&redirect_uri=https://headzz.github.io/test-navigation-post/&state=${csrfState}`
    window.location = url
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={fetchDataTikTok}>
          Testing Tiktok
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
