import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Fragment, useState, useEffect } from "react";
import Home from "./pages/home/Home";
import HotelList from "./pages/HotelList/HotelList";
import Hotel from "./pages/hotel/Hotel"
import OverLay from "./overlay/OverLay";

function App() {

  const [isMobileScreen, setIsMobileScreen] = useState(false)


  const handleResize = () => {
     if (window.innerWidth < 711) {
        setIsMobileScreen(true)
      } else {
        setIsMobileScreen(false)
      }
  }

  // create an event listener to monitor the screen size
  useEffect(()=>{
    window.addEventListener("resize", handleResize)
    if (window.screen.width < 711) {
      setIsMobileScreen(true)
    }
  }, [])


  return (
    <Fragment>

      { isMobileScreen ? <OverLay /> : <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Home/>}/>
          <Route path="/hotels-list" element={<HotelList />}/>
            <Route path="/hotels/:id" element={<Hotel />}/>
          </Routes>

        </BrowserRouter>
      }



    </Fragment>
  );
}

export default App;
