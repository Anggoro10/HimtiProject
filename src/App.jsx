import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './component/Footer'
import './App.css'

function App() {
  return(
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/events' element={<Events />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>

  )
};

export default App;
