import { Sidebarra } from '../../components/sidebarra/sidebarra';

const Pantalla = () => {
    return (
        <div className="flex">
            <div className="h-screen">
                <Sidebarra />
            </div>
            <div>aqui van las pantallas</div>
        </div>
    );
};

export default Pantalla;
