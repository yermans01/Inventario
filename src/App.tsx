import { Sidebarra } from './components/sidebarra';
import { Tarjeta } from './components/tarjeta';

function App() {
    return (
        <div className="flex">
            <div className="h-screen">
                <Sidebarra />
            </div>
            <div className="grid grid-cols-2 gap-4 p-52 justify-items-center">
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
        </div>
    );
}

export default App;
