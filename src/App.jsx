import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import Shoppages from "./pages/Shoppages";
import Pagesdata from "./pages/Pagesdata";
import MegaMenupags from "./pages/MegaMenupags";
import Venderpages from "./pages/Venderpages";
import Blogpages from "./pages/Blogpages";
import Slider from "./components/Slider";
import Categories from "./pages/Categories";
import PopularProducts from "./pages/PopularProducts";
import DailyBestSells from "./pages/DailyBestSells";
import Dealspages from "./pages/Dealspages";
import Alldatapages from "./pages/Alldatapages";


function App() {
  return (
    <>
      <Header />
      <Slider/>
      
      <Routes>
        <Route path="/" element={<h1 className="p-4">This is Home Page</h1>} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/shop" element={< Shoppages />} />
        <Route path="/blog" element={< Blogpages />} />
        <Route path="/vendors" element={< Venderpages />} />
        <Route path="/megamenu" element={< MegaMenupags />} />
        <Route path="/pages" element={< Pagesdata />} />
         <Route path="/categories" element={< Categories/>} />
         <Route path="/popularProducts" element={< PopularProducts/>} />
         <Route path="/dailyBestSells" element={< DailyBestSells/>} />
          <Route path="/dealspages" element={< Dealspages/>} />
          <Route path="/alldatapages" element={< Alldatapages/>} />



         


        

      </Routes>
    </>
  );
}

export default App;
