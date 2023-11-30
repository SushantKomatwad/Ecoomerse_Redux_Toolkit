import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { remove } from '../Redux/CartSlice'

const Cart = () => {

    const dispatch = useDispatch()

    const cartitems = useSelector((state) => state.cart);

    const handleRemove = (id) => {
        dispatch(remove(id))
    }

    return (
        <>
            <h1 className='text-3xl font-bold text-center mt-6 text-amber-900'>Cart Page</h1>
            <div className="flex flex-wrap mt-8 mx-4">
                {cartitems.map((cartitem) => (
                    <div key={cartitem.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 mt-12">
                        <div className="border p-4 h-96 bg-teal-700 rounded-3xl">
                            <div className="transition-transform transform-gpu hover:brightness-100 hover:scale-105 duration-300">
                                <img src={cartitem.image} alt="cartitem" className="w-full h-48 object-cover mb-2 rounded-lg" />
                            </div>
                            <h4 className="text-lg font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis mt-2">{cartitem.title}</h4>
                            <p className='text-white mt-2 font-bold'>Category : {cartitem.category}</p>
                            <p className="text-white mt-4">$ {cartitem.price} /-</p>
                            <button className="bg-red-500 rounded-xl hover:bg-red-600 text-white px-4 py-2 mt-2" title="Special offer available!" onClick={()=>handleRemove(cartitem.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cart