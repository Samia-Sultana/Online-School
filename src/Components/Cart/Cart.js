import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    var courseCount = 0;
    var cost = 0;
    const courseArray = props.courseInfo;
    for(var element of courseArray){
        courseCount = courseCount+1;
        cost = cost + element.price;
        
    }
        var vat = cost*0.5;
        var totalCost = cost+vat;
        var discount = cost*0.3;
        var grandTotal = totalCost-discount;
    return (
        <div className="cart">
            <div><h4>Order summery</h4></div>
            <p>Price:{cost.toFixed(2)}</p>
            <p>Vat:{vat.toFixed(2)}</p>
            <p>Total cost:{totalCost.toFixed(2)}</p>
            <p>Discount:{discount.toFixed(2)}</p>
            <p>Grand total:{grandTotal.toFixed(2)}</p>
            <div><Button variant="danger" className="payButton">Proceede to pay</Button></div>

        </div>
    );
};

export default Cart;