import React from 'react'
import Javascript from "./Javascript";
import CSS from "./CSS";
import Table from "./Table";
import Blog from "./Blog";

function Main() {
  return (
    <main className="wrapper">
      <Javascript />
      <CSS />
      <Table />
      <Blog />
    </main>
  )
}

export default Main