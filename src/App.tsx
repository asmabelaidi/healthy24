
import Header from 'components/header/header';
import './App.css';
import Navbar from './components/navbar/navbar';
import BlueCardicons from 'components/bluecards/blueCardIcons';
import About from 'components/about/about';
import WhyChoosing from 'components/whyChoosing/whyChoosing';
import GetApp from 'components/getApp/getApp';
import FindDoctors from 'components/findDoctors/findDoctors';
import WereHere from 'components/wereHere/wereHere';
import NearestHospitals from 'components/nearestHospitals/nearestHospitals';
import Testimonial from 'components/testimonial/testimonial';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <BlueCardicons />
        <About />
        <WhyChoosing />
         <GetApp /> 
        <FindDoctors />
        <WereHere />
        <NearestHospitals />
        <Testimonial />

    </div>
  );
}

export default App;
