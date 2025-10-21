import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
    const INIT_URL = 
        "https://images.unsplash.com/photo-1722858344552-7acf888a7046?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687";

    let info = {
        city: "Delhi",
        feelsLike: 30.24,
        humidity: 54,
        temp: 29.05,
        tempMax: 29.05,
        tempMin: 29.05,
        weather: "haze",
    };
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className="cardContainer"> 
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={INIT_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Maximum Temp = {info.tempMax}&deg;C</p>
                    <p>Minimum Temp = {info.tempMin}&deg;C</p>
                    <p>The Weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}