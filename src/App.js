import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from "axios";
import Weather from './Weather';
function App() {

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setIsLoading(false);
        }, (error) => {
          alert(error);
        })
      }
      else {
        alert('Your browser dos not support geolocation!');
      }
    }, []);
  
    if (isLoading) {
      return (
       <P>Loading....</P>
      )
    }
      
     else {
    return (
        <div className='content'>
          <h3>Your position</h3>
          <p>
            Position:&nbsp;
            {lat.toFixed(3)},
            {lng.toFixed(3)}
    
          </p>
          <Weather lat={lat} lng={lng} />
        </div>
      ); 
    }
    }
  
    


export default App;
