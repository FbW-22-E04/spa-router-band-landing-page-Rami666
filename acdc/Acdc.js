import { BrowserRouter, Route, Routes } from "react-router-dom";
import Angus from './Angus'
import Phil from './Phil'
import Header from "./Header";
import Footer from './Footer'

function Acdc() {
    return ( 
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Angus />}/>
                <Route path='/phil' element={<Phil />}/>
                <Route path='/cliff' element={<Angus />}/>
                <Route element={<Footer />}>

                    <Route path='/brian' element={<Angus />}/>
                    <Route path='/stevie' element={<Angus />}/>

                </Route>

            </Routes>
        </BrowserRouter>
     );
}

export default Acdc;