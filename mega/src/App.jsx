import './App.css';
import SiteRoutes from './SiteRoutes';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";


function App() {
  
  
  return (
    <>
    <Navbar/>
      <div className='container'>
        <div className='col-sm-12'>
          <SiteRoutes/>
          </div>
         
      <Footer/>
    </div>
    </>
  )
}

export default App
