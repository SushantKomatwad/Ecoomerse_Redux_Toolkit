import React, { useEffect, useState } from 'react'
import { add } from '../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProduct } from '../Redux/ProductSlice';

const Home = () => {

    const dispatch = useDispatch();

    const { data: products, status } = useSelector((state) => state.product);

    const [currentPage, setCurrentPage] = useState(1)

    const productsPerPage = 4;


    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if (status === STATUSES.LOADING) {
        return <h2 className='text-neutral-900 text-center font-bold text-3xl mt-80'>...LOADING...</h2>
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <div className="flex flex-wrap mt-8 mx-4">
            {currentProducts.map((product) => (
                <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 mt-12">
                    <div className="border p-4 h-96 bg-slate-900 rounded-3xl">
                        <div className="transition-transform transform-gpu hover:brightness-100 hover:scale-105 duration-300">
                            <img src={product.image} alt="Product" className="w-full h-48 object-cover mb-2 rounded-lg" />
                        </div>
                        <h4 className="text-lg font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis mt-4">{product.title}</h4>
                        <p className="text-white mt-4">$ {product.price} /-</p>
                        <button className="bg-violet-500 rounded-xl hover:bg-violet-600 text-white px-4 py-2 mt-4" title="Special Offers Availabel Now" onClick={() => handleAdd(product)}>Add To Cart</button>
                    </div>
                </div>
            ))}
            <div className="flex justify-center items-center w-full mt-8">
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                    <button key={index} className={`border-2 border-black mx-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === index + 1 ? 'bg-blue-800' : ''}`} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Home