import { Sidebarra } from '../../components/sidebarra/sidebarra';

const Bodega = () => {
    return (
        <div className="flex">
            <div className="h-screen">
                <Sidebarra />
            </div>
            <div>aqui van los equipos de bodega</div>
        </div>
    );
};

export default Bodega;
