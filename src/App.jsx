import React from 'react'
import Footer from "./components/Footer";
import './App.scss'
import useLocalStorage from "use-local-storage";
import { Routes, Route } from 'react-router-dom';
import JavascriptPage from "./pages/JavascriptPage";
import CSSPage from "./pages/CSSPage";
import Header from "./components/Header";
import BlogPage from "./pages/BlogPage";
import Introduction from "./components/Main/Introduction";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <section className="container" data-theme={theme}>
      <Header stateChanger={setTheme} stateTheme={theme} />
      <main className="wrapper">
        <Routes>
          <Route exact path="/" element={<Introduction />}/>
          <Route path="/css" element={<CSSPage />} />
          <Route path="/javascript" element={<JavascriptPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact"/>
        </Routes>
      </main>
      <Footer />
    </section>
  )
}

export default App
