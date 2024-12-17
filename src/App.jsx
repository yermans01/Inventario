import { Sidebarra } from './components/sidebarra';
import { Tarjeta } from './components/tarjeta';

function App() {
    return (
        <div className="flex">
            <div>
                <Sidebarra />
            </div>
            <div className="pt-2">
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
        </div>
    );
}

export default App;
