import React, { useEffect, useState } from 'react'
import '../Collection/Collection.css'
import products from '../../Data/Products'

import { useCart } from '../../Context/CounterContext'

const Collection = () => {
    const CounterState = useCart();

    const [item, setItem] = useState([]);

    useEffect(()=>{
        setItem(products);
    },[]);

    return (
        <div className='collect'> 
            <h2>Collections</h2>
            <p> This page created for a collection </p>

            <div className='collet-wrap'>
                {item.map((item)=>(
                    <div key={item.id} className='collet-child'>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>₹{item.price}</p>
                        <p>{item.description}</p>
                        <button 
                        className='button' 
                        onClick={() => {
                             CounterState.setCounter(CounterState.counter + 1);
                             alert("Product Saved In Cart!!");
                        }}>
                        Add To Cart</button>
                    </div>
                ))
                } 
            </div>
        </div>
    )
}

export default Collection;