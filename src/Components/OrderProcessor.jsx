import React from 'react'
import style from './OrderProcessor.module.css'
import SelectedItem from './SelectedItem'
export default function OrderProcessor({crossClick,selectedItem}) {

    return (
        <div className={style.orderPlacement}>
        <div className={style.mainSection}>
            <div className={style.orderPlacementHeader}><div><div><button>Order</button></div><div className={style.tableName}><input type="text" placeholder="Table no."/></div><button onClick={crossClick}>X</button></div></div>
            <div className={style.orderPlacementSubSection}>
                
                {selectedItem.map((item)=>{
                    return <SelectedItem key={item} Item={item}/>
                })}
            </div>
        </div>
    </div>
    )
}
