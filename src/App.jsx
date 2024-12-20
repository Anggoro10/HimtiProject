import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'
import Events from './pages/Events'
import './App.css'

function App() {
  return(
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/events' element={<Events />}/>
      </Routes>
    </>
  )
};

export default App;
