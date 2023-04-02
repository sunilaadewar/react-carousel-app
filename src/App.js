import React, {createContext, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";
import Carousel3 from "./components/Carousel3";
import Carousel4 from "./components/Carousel4";
import Carousel5 from "./components/Carousel5";
import "./App.css"


export const MyContainer = createContext(null)

function App() {

    const [carousel, setCarousel] = useState("carousel1")

    return (
        <>
            <div className="app-container">
                <MyContainer.Provider value={{
                    carousel: carousel,
                    setCarousel: setCarousel
                }}>
                    {carousel === "carousel1" && <Carousel1/>}
                    {carousel === "carousel2" && <Carousel2/>}
                    {carousel === "carousel3" && <Carousel3/>}
                    {carousel === "carousel4" && <Carousel4/>}
                    {carousel === "carousel5" && <Carousel5/>}
                    <NavBar/>
                </MyContainer.Provider>

            </div>
        </>
    );

}

export default App