import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = "5c9b257ede27e4138f7654f28ec4ca19";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventdefault();
        console.log(city);
        setCity("");
    };

    return (
        <div className="SearchBox">
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                required 
                value={city}
                onChange={handleChange}
                />
                <br /><br />
                <Button 
                variant="contained" 
                type="submit">
                  Search
                </Button>
            </form>
        </div>
    );
}