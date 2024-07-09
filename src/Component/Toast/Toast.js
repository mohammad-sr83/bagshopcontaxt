import React, { useContext } from 'react'
import Productcontext from '../../Context/ProductContects'

export default function Toast() {
    const IsShoToast = useContext(Productcontext)
    return (
        <>
            {IsShoToast.isShowToast && (
                <div className="toast-conteiner  position-fixed  bottom-0 me-4 end-0 mb-4" >
                    <div className="toast show align-items-center   bg-primary text-white">
                        <div className='d-flex justify-content-betwen alighn-items-center'>
                            <div className="toast-body">
                                محصول شما با موفقیت وارد سبد خرید شد .
                            </div>
                            <button type="button" className="btn-close me-2 m-auto" onClick={() => IsShoToast.setIsShowToast(false)}></button>
                        </div>
                        
                    </div>
                </div>

            )}
        </>
    )
}
