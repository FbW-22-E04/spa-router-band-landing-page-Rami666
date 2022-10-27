import { Outlet } from "react-router-dom";

function Footer() {
    return ( 
        <div>
            <Outlet/>
            <p>here is the footer</p>
        </div>
     );
}

export default Footer;