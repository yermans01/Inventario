import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../views/Home/index';
import Users from '../views/Users/index';
import Error404 from '../views/Error404';

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
        element: <div>compus</div>,
    },
    {
        path: '/pantalla',
        element: <div>pantalla</div>,
    },
    {
        path: '/impresora',
        element: <div>impresora</div>,
    },
    {
        path: '/proyectores',
        element: <div>proyectores</div>,
    },
    {
        path: '/ingreso',
        element: <div>ingreso</div>,
    },
    {
        path: '/egreso',
        element: <div>egreso</div>,
    },
    {
        path: '/bodega',
        element: <div>bodega</div>,
    },
]);
const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
