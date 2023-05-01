import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './Pages/About';
import News from './Pages/News';
import Footer from './Components/Footer';
import CustomNavbar from './Components/Navbar';
import OurAnalysis from './Components/OurAnalysis';
import NewsComponent from './Components/TopNews';
import WeatherComponent from './Components/WeatherComponent';
import YoutubePlayer from './Components/YouTube';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <CustomNavbar/>
        <WeatherComponent/>
        <OurAnalysis/>
        <NewsComponent/>
        <YoutubePlayer/>
        <Footer/>

        <Routes>
        <Route path="/about" element = {<AboutUs />}></Route>
        </Routes>
        <Routes>
        <Route path="/news" element = {<News />}></Route>
        </Routes>

      </div>
    </Router>
    </>
  );
}

export default App;
