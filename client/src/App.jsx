import './App.css'

import { Outlet } from 'react-router-dom';
import Nav from './components/nav/nav';
import Footeres from './components/footer/footer/footer/Footer';


const App = () => {
  return (
    <div>
 <Nav/> 
 <Outlet/>
 <Footeres/>
    </div>
  )
}

export default App
