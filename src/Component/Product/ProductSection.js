import React, { useContext } from 'react'
import Productcontext from '../../Context/ProductContects'
import './ProductSection.css'

export default function ProductSection() {
  const productscart = useContext(Productcontext)
  return (
    <>
      {productscart.allProduct.map((productsection) => (
        <div className='row justify-content-center mt-5'>
          <h3 className='text-center'>{productsection.CategoryTitle}</h3>

          {productsection.infos.map((product) => (
            <>
              <div className='col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5'>
                <div className='card py-3 px-3'>
                  <div className='col-12 text-center'>
                    <img src={product.img} alt='product' className='card-img-top w-75' />
                  </div>
                  <div className='card-body text-center'>
                    <p className='card-text'>{product.title}</p>
                    <p className='price'>${product.price}</p>
                    <br></br>
                    <a href='#' className='btn btn-danger' onClick={() => {
                      productscart.setIsShowToast(true)
                      {
                        setInterval(() => {
                          productscart.setIsShowToast(false)
                        }, 3000)
                      }
                      let newbagpost ={
                        id:productscart.productBag.length+1,
                        title:product.title,
                        img:product.img,
                        price:product.price,
                        count:1
                      }
                      productscart.setProductBag(prev=>[...prev,newbagpost])
                    }}>Add to cart</a>
                    <br></br>
                    <a href='#' className='btn btn-outline-dark mt-3 text-capitalize'>More information</a>
                    <br></br>
                    <p className='number'> number:{product.count}</p>
                  </div>
                  <br></br>
                </div>
              </div >
            </>
          ))}

        </div >
      ))
      }
    </>
  )
}
