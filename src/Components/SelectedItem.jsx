import React from 'react'
import style from './SelectedItem.module.css'
export default function SelectedItem({Item}) {
    return (
        <div className={style.orderPlacementItemBox}>
        <div>
            <div className={style.itemListHeader}>
                <div>

                </div>
                <div>
                    <h3>{Item}</h3>
                </div>
                <div className={style.itemQuantity}>
                    Qt: <input type="number"/>
                </div>
            </div>
            <div className={style.itemListBody}>
                <input type="text" placeholder="Description..."/>
            </div>
        </div>
    </div>
    )
}
