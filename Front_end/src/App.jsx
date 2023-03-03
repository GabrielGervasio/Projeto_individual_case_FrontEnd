
import { Outlet } from 'react-router-dom'
import './App.css'


import NavbaReact from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
      <div className="App">
        <NavbaReact />
       <div /*className='container'*/>
         <Outlet />
       </div>
       
      </div>
    )
  }
  
  export default App
