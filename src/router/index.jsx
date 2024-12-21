import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../views/Home/index';
import Users from '../views/Users/index';
import Error404 from '../views/Error404';
import Computadores from '../views/Computadores/index';
import Pantalla from '../views/Pantalla';
import Impresora from '../views/Impresoras';
import Proyector from '../views/Proyector';
import Ingreso from '../views/Ingreso';
import Egreso from '../views/Egreso';
import Bodega from '../views/Bodega';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: '/usuarios',
        element: <Users />,
    },
    {
        path: '/computadores',
        element: <Computadores />,
    },
    {
        path: '/pantalla',
        element: <Pantalla />,
    },
    {
        path: '/impresora',
        element: <Impresora />,
    },
    {
        path: '/proyectores',
        element: <Proyector />,
    },
    {
        path: '/ingreso',
        element: <Ingreso />,
    },
    {
        path: '/egreso',
        element: <Egreso />,
    },
    {
        path: '/bodega',
        element: <Bodega />,
    },
]);
const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
