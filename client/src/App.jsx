import './App.css'

import { Outlet } from 'react-router-dom';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
 <Nav/> 
 <Outlet/>
 <Footer/>
    </div>
  )
}

export default App
