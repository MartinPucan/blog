import React, { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import './App.scss'

function App() {
  return (
    <section className="container">
      <Header />
      <Main />
      <Footer />
    </section>
  )
}

export default App
