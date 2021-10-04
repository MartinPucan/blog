import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Javascript from "./components/Javascript";
import './App.scss'

function App() {
  return (
    <section className="container">
      <Header />
      <Main />
      <Javascript />
      <Footer />
    </section>
  )
}

export default App
