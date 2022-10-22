import { createBrowserRouter } from 'react-router-dom';
import Home from "../../modules/home/infrastructure/ui";
import UserDetails from "../../modules/userDetail/infrastructure/ui";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/userDetail/:name',
        element: <UserDetails />,
    },
]);

export default router;
