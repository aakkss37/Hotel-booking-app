import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Fragment, useState, useEffect } from "react";
import Home from "./pages/home/Home";
import List from "./pages/HotelList/HotelList";
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
    console.log(window.screen.width)
  }
  // create an event listener

  useEffect(()=>{
    window.addEventListener("resize", handleResize)
    if (window.screen.width < 711) {
      setIsMobileScreen(true)
    }
    console.log(window.screen.width)
  }, [])


  return (
    <Fragment>

      { isMobileScreen ? <OverLay /> : <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
          </Routes>

        </BrowserRouter>
      }



    </Fragment>
  );
}

export default App;
