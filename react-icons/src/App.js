import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Left from './components/Left';

export default function App(){
  return (
    <body>
      <div className='container1'>
        <div className='container2'>
        <Left/>
        <div className='header-body-footer'>
          <Header/>
          <Body/>
          <Footer/>
        </div>
        
        </div>
      </div>
    </body>
  
  )
}
