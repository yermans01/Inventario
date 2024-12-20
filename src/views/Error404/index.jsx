import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="../../../public/ucmito.png" alt="Ucmito error" />
            <h1 className="text-7xl "> {error.status} ¡Ops!</h1>
            <p className="text-5xl mt-6">¡Esta página no fue encontrada!</p>
            <p className="mt-8">{error.data}</p>
        </div>
    );
};
export default Error404;
