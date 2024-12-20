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
]);
const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
