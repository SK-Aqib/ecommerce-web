import React from "react";
import '../Navbar/Navbar.css'
import { useCart } from "../../Context/CounterContext";
import { Link } from 'react-router-dom'
import CartUI from "../../Pages/CartUI";

const Navbar=()=>{
    const counterState = useCart();

    console.log('counterState' , counterState);
    return (
        <div className="nav">
            <h1>React-App</h1>
            <div className="cart">
                <Link to='/CartUI'> Cart <span className="count">  {counterState.counter} </span></Link>
            </div>
        </div>
    )
}

export default Navbar;