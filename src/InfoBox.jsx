export default function InfoBox() {
    let info = {
        feelsLike: 30.24,
        humidity: 54,
        temp: 29.05,
        tempMax: 29.05,
        tempMi: 29.05,
        weather: "haze",
    };
    return (
        <div className="InfoBox">
            <h1>WeatherInfo</h1>
        </div>
    );
}