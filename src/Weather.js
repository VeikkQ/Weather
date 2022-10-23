import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'https://openweathermap.org/img/wn/';
const API_KEY = '8a804c4131f1efdff4d7dde98224c0cb';

export default function Weather ({lat, lng}) {
const [temp, setTemp] = useState(0);
const [speed, setspeed] = useState(0);
const [direction, setdirection] = useState(0);
const [descprition, setdescprition] = useState(0);
const [icon, setIcon] = useState('');
useEffect(() => {
    const adress =API_URL +
    'lat=' + lat +
    '&lon=' + lng +
    '&units=metric' +
    '&appid=' + API_KEY;

    console.log(adress);

    axios.get(adress)
    .then((response) => {
        console.log(response.data);
        setTemp(response.data.main.temp);
        setspeed(response.data.wind.speed);
        setdirection(response.data.wind.deg);
        setdescprition(response.data.weather[0].description);
        setIcon(ICON_URL + response.data.weather[0].icon + '@2x.png');
        console.log(ICON_URL + response.data.weather[0].icon + '@2x.png')
    }) .catch((error) => {
        alert(error);
    });
}, [],) 
return(
    <>
    <h3>Weather on your location!</h3>
    <p>{temp} C&#176;</p>
    <p>{speed} m/s {direction} degrees</p>
    <p>{descprition}</p>
    <img src={icon} alt="" />
    </>
    )

} 