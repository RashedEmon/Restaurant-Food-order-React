import React from 'react'
import style from './Header.module.css'
export default function Header({change,orderClickHandler}) {
    console.log("header render");
    return (
        <div className={style.middle}>
            <div style={{flexBasis: "30%"}}>
                <label htmlFor="category">Choose a Category:</label>
                <select name="category" id="category" onChange={(e)=>change(e.target.value)}>
                    <option value="All">All</option>
                    <option value="ff">Fast Food</option>
                    <option value="cd">Cold Drinks</option>
                </select>
            </div>
            <div style={{flexBasis: "30%"}}>Menu</div>
            <div style={{flexBasis: "30%"}}><input type="button" value="Order" onClick={orderClickHandler}/></div>
        </div>
    );
}
