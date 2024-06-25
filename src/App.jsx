import  React from 'react'
import './App.css'
import Navbar from "./Starting/Navbar.jsx";
import SecondContainer from "./Containers/SecondBlock/SecondContainer.jsx";
import ThirdContainer from "./Containers/ThirdBlock/ThirdContainer.jsx";
import FourthContainer from "./Containers/FourthBlock/FourthContainer.jsx";
import FifthContainer from "./Containers/FifthBlock/FifthContainer.jsx";



function App() {

  return (
      <div className="main">
          <Navbar/>
          <SecondContainer/>
          <ThirdContainer/>
          <FourthContainer/>
          <FifthContainer/>
      </div>
  )
}

export default App
