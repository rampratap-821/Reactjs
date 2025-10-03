import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Categories from "./pages/Categories";
import PopularProducts from "./pages/PopularProducts";
import DailyBestSells from "./pages/DailyBestSells";
import Dealspages from "./pages/Dealspages";
import Alldatapages from "./pages/Alldatapages";
import Simpleimage from "./pages/Simpleimage";
import FooterPages from "./components/FooterPages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* ✅ Home page पर सभी components दिखाएं */}
        <Route path="/" element={
          <div>
            <Slider />
            <Categories />
            <PopularProducts />
            <DailyBestSells/>
            <Dealspages/>
            <Alldatapages/>
            <Simpleimage/>
            <FooterPages/>
          </div>
        } />
        
        {/* ✅ अलग-अलग routes */}
        <Route path="/slider" element={<Slider />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/popularProducts" element={<PopularProducts />} />
        <Route path="/dailyBestSells" element={<DailyBestSells />} />
        <Route path="/dealspages" element={<Dealspages />} />
        <Route path="/alldatapages" element={<Alldatapages />} />
        <Route path="/simpleimage" element={<Simpleimage />} />
        <Route path="/footerPages" element={<FooterPages/>} />
        
        {/* Account related routes */}
        <Route path="/account" element={<div>My Account Page</div>} />
        <Route path="/orders" element={<div>My Orders Page</div>} />
        <Route path="/wishlist" element={<div>Wishlist Page</div>} />
        <Route path="/tracking" element={<div>Order Tracking Page</div>} />
        <Route path="/settings" element={<div>Settings Page</div>} />
        {/* ... other routes */}
      </Routes>
    </>
  );
}

export default App;