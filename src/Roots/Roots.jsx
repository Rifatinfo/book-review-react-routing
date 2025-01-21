import { Outlet } from "react-router";
import Nav from "../Components/Nav/Nav";



const Roots = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet/>
        </div>
    );
};

export default Roots;