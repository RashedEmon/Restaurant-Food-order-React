import Container from './Container';
import OrderProcessor from './OrderProcessor' 

import React, { Component } from 'react'

export default class Layout extends Component {
    constructor(props){
        super(props);
        console.log("Layout Rendered...");
       
    }
    state={
        orderButtonClick: false,
        crossButtonClick: true,
        orderedItem: []
    }
    getSelectedItem=(item)=>{
        let itemArr=[];
        itemArr=Array.from(item);
        this.setState({
            orderedItem: itemArr
        })
    }
    orderClickHandler=()=>{
        
        console.log("order button clicked...")
        this.setState({
            orderButtonClick: true,
            crossButtonClick: false
        })
    }

    crossClickHandler=()=>{
        console.log("cross button clicked...")
        this.setState({
            crossButtonClick: true,
            orderButtonClick: false
        })
    }



    render() {
        return (
            <div className="container">
                <Container orderClickHandler={this.orderClickHandler} getSelectedItem={this.getSelectedItem} />
                { (this.state.orderButtonClick===true) && (this.state.crossButtonClick===false)? <OrderProcessor selectedItem={this.state.orderedItem} crossClick={this.crossClickHandler} />: null}
            </div>
        )
    }
}
