import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import HotelList from "../pages/hotellist/HotelList";
import SingleHotel from "../pages/singlehotel/SingleHotel";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/home",
        element:<Home/>
    },
    {
        path: "/hotels",
        element:<HotelList/>
    },
    {
        path: "/hotels/:id",
        element:<SingleHotel/>
    },
])

export default Router;