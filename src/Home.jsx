import React from "react";

import { useNavigate } from 'react-router-dom';
const Home=()=>{
    const navigate = useNavigate();
    const handleClick=()=>{


        navigate('/products');
    };

    return (
        <div>
            <h1>Welcome to the TeamSystem Shop</h1>
            <button onClick={handleClick}>Start Shopping</button>
        </div>
    )
}
export default Home;