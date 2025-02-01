import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/blue" element={<div className="blue">Blue</div>} />
          <Route path="/red" element={<div className="red">Red</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
