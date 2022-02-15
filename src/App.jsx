import React from 'react'
import Footer from "./components/Footer";
import Main from "./components/Main";
import './App.scss'
import useLocalStorage from "use-local-storage";
import { Routes, Route } from 'react-router-dom';
import Javascript from "./pages/Javascript";
import CSS from "./pages/CSS";
import Header from "./components/Header";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <section className="container" data-theme={theme}>
      <Header stateChanger={setTheme} stateTheme={theme} />
      <main className="wrapper">
        <Routes>
          <Route exact path="/" />
          <Route path="/css" element={<CSS />} />
          <Route path="/javascript" element={<Javascript />} />
        </Routes>
      </main>
      <Footer />
    </section>
  )
}

export default App
