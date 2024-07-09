import React, { useContext } from 'react'
import { IoIosHelp } from "react-icons/io";
import { AiOutlineClose } from 'react-icons/ai'
import Productcontext from '../../Context/ProductContects';
import './Cart.css'
export default function Cart() {
    const bagPro = useContext(Productcontext)
    return (
        <aside className={bagPro.isShowBag ? 'bag-sidebar active ' :"bag-sidebar"}>
            <h3 className='bag-title'>
                <span>
                    Bag
                    <IoIosHelp />
                </span>
                <span>
                    <AiOutlineClose className='close' onClick={()=>bagPro.setShowBag(false)} />
                </span>
            </h3>
            
                {bagPro.productBag.map((product)=>(
                    <div className='row bag-wrapper '>
                    <div className='col-12 mt-5'>
                    <div className='card py-3 px-3'>
                        <div className='col-12 text-center'>
                            <img src={product.img} className='cart-img-top w-75' />
                        </div>
                        <div className='card-body d-flex flex-column justify-content-center alighn-items-center text-center'>
                            <p className='card-text'>{product.title}</p>
                            <p className='price'>${product.price}</p>
                            <br></br>
                            <a href='#' className='btn btn-danger'>bay</a>
                            <br></br>
                            <a href='#' className='btn btn-outline-dark mt-3 text-capitalize'>More information</a>
                            <br></br>
                            <p className='number'> number:{product.count}</p>
                        </div>
                    </div>
                </div>
                </div>
                ))}
            
        </aside>
    )
}
