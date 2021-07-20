import Card from './components/Card'
import './style.css'
import Chess from './components/Chess';
import Calmenu from './components/Day_17/Calorie';
import Calmenucc from './components/Day_18/Calorie';

function App() {
    return (
        <div className="App">
            <Card />
            <Chess />
            <Calmenu />
            <Calmenucc />
        </div>
    );
}

export default App;