import { Sidebarra } from './components/sidebarra';
import { Tarjeta } from './components/tarjeta';

function App() {
    return (
        <div className="flex">
            <div className="h-screen">
                <Sidebarra />
            </div>
            <div className="w-full p-40 grid grid-cols-2 gap-6 justify-center items-center">
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
        </div>
    );
}

export default App;
