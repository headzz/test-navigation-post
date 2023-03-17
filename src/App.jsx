import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {LoginSocialTiktok} from 'reactjs-social-login'

function App() {
  const fetchDataTikTok = async () => {
    window.location = `https://www.tiktok.com/auth/authorize/?client_key=${import.meta.env.VITE_CLIENT_TEST}&scope=user.info.basic,video.list&state=_tiktok&redirect_uri=https://headzz.github.io/test-navigation-post/&response_type=code`
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
      <LoginSocialTiktok client_key={import.meta.env.VITE_CLIENT_TEST} 
      onReject={(data) => console.log('bla', data)}
      onResolve={({ provider, data }) => {console.log(provider,data)}}>Login with Tiktok</LoginSocialTiktok>
    </div>
  )
}

export default App
