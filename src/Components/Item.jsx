import React from 'react'
import style from './Item.module.css'

export default function Item({items,selectItem,select}) {
    console.log("item render")
    
    
    return (
       <div className={style.foodList}>
            <div className={style.itemBox}>
                <input type="checkbox" id={items.id} value={items.name} onClick={selectItem}/>
                <label htmlFor={items.id}>
                    <div className={[style.item,select].join(' ')}>
                        <div>{items.name}</div>
                        <img src={items.image} alt={items.name}/>
                    </div>
                </label>
            </div>
       </div>
    )
}
