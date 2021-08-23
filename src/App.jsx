import React, { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="container">
      <Header />

      <main>

      </main>

      <Footer />
    </section>
  )
}

export default App
