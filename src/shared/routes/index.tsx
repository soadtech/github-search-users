import { createBrowserRouter } from 'react-router-dom';
import Home from "../../modules/home/infrastructure/ui";
import UserDetail from "../../modules/userDetail/infrastructure/ui";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/userDetail',
        element: <UserDetail />,
    },
]);

export default router;
