import { createBrowserRouter } from "react-router-dom";
import HomeView from "../view/HomeView";
import CardView from "../view/CardView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },

    {
        path: "/image/:id",
        element: <CardView />
    }
]);

export default router;