import { Sidebarra } from '../../components/sidebarra/sidebarra';
import { Tarjeta } from '../../components/tarjeta/tarjeta';

const Home = () => {
    return (
        <div className="flex">
            <div className="h-screen">
                <Sidebarra />
            </div>
            <div className="w-full p-40 grid grid-cols-2 gap-2 justify-center">
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
        </div>
    );
};

export default Home;
