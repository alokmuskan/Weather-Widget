import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox() {
    return (
        <div>
            <h3>Search for the Weather</h3>
            <form>
                <TextField id="city" label="City Name" variant="outlined" required/>
                <Button variant="contained">Search</Button>
            </form>
        </div>
    );
}