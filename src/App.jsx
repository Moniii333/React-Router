import './App.css'
import { Routes, Route } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import Nav from './components/Nav'
import Fact from './components/Fact'
import Footer from './components/Footer'

function App() {

  return (
    <div id="container">
      <Nav />
    <div id="main-section">
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/red' element={ <Red /> } />
        <Route path='/blue' element={ <Blue /> } />
        <Route path='/fact' element={ <Fact /> } />
      </Routes>
    </div>
    <div className='footer'>
      <Footer />
    </div>
  </div>
  )
}

export default App
