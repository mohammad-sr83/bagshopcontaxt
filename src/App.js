import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import ProductSection from "./Component/Product/ProductSection";
import products from "./products";
import Toast from "./Component/Toast/Toast";
import Cart from "./Component/Cart/Cart";
import Productcontext from "./Context/ProductContects";
import './App.css'

export default function App() {
  const [allProduct, setAllProduct] = useState(products)
  const [productBag, setProductBag] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowBag, setShowBag] = useState(false)
  
  
  return (
    <>
      <Productcontext.Provider value={
        {allProduct,productBag ,setProductBag,isShowToast, setIsShowToast,isShowBag, setShowBag}
        }>
        <Navbar />
        <main className="pb-5">
          <div className="conteiner">
            <h1 className="text-center main-title">All Prouduct</h1>
            <ProductSection />
          </div>
        </main>
        <Toast />
        <Cart />
      </Productcontext.Provider>
    </>
  );
}

