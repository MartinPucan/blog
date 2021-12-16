import React from 'react'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Javascript from "./components/Javascript";
import './App.scss'
import useLocalStorage from "use-local-storage";
import moon from './public/images/icons/moon.png'
import sun from './public/images/icons/sun.png'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CSS from "./components/CSS";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <section className="container" data-theme={theme}>
      <div className="switch-button">
        <button onClick={switchTheme} title="Activate dark mode">
          {theme === 'light' ? <img src={moon} className="rotate" width={32} alt="dark-mode" /> : <img src={sun} className="rotateConversely" width={32} alt="light-mode" /> }
        </button>
      </div>
      <BrowserRouter className="header">
        <Switch>
          <Route path="/">
            <Main />
            <CSS />
            <Footer />
          </Route>
          <Route path="/javascript">
            <Javascript />
          </Route>
        </Switch>
      </BrowserRouter>
      <Main />
      <Footer />
    </section>
  )
}

export default App
