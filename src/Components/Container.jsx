import React from 'react'
import Header from './Header'
import Item from './Item'

var item=[
    {
        "id": "biriyani",
        "name": "Chicken Biriyani",
        "image": "/image/biriyani.jpg",
        "category": "ff"
    },
    {
        "id": "cock",
        "name": "Coca Cola",
        "image": "/image/cocacola.jpg",
        "category": "cd"
    },
    {
        "id": "burger",
        "name": "Burger",
        "image": "/image/burger.jpg",
        "category": "ff"
    },
    {
        "id": "iceCream",
        "name": "Ice Cream",
        "image": "/image/ice-cream.jpg",
        "category": "cd"
    },
    {
        "id": "pizza",
        "name": "Pizza",
        "image": "/image/pizza.jpg",
        "category": "ff"
    },
    {
        "id": "pepsi",
        "name": "Pepsi",
        "image": "/image/pepsi.jpg",
        "category": "cd"
    }
]


export default class Container extends React.Component {
    constructor(props){
        super(props);
        console.log("Container rendered");
        this.state={
            type: "All",
            selectedItem: new Set()
        }
       
        
    }

    selectCategory=(value)=>{
        console.log(value);
        this.setState({
            type: value,    
        });
        
    }
    selectItem=(e)=>{
        const selectedItem=this.state.selectedItem;

        if(selectedItem.has(e.target.value)){
            this.setState(({selectedItem})=>{
                const newSelectedItem = new Set(selectedItem);
                newSelectedItem.delete(e.target.value);
                return{
                    selectedItem: newSelectedItem
            }})
        }else{
        this.setState(({selectedItem})=>{
            const newSelectedItem=new Set(selectedItem);
            newSelectedItem.add(e.target.value);
            return{
                selectedItem: newSelectedItem
            } 
        })
    }
    this.props.getSelectedItem(selectedItem);
        console.log(selectedItem);
    }
    
    render() {
        return (
                <div className="mainMenu">
                    <Header change={this.selectCategory} orderClickHandler={this.props.orderClickHandler}/>
                    {item.map((itm) =>{
                        if(this.state.type==="All"){
                            if(this.state.selectedItem.has(itm.name))
                                return <Item key={itm.id} items={itm} selectItem={this.selectItem} select="select"/>
                            else
                                return <Item key={itm.id} items={itm} selectItem={this.selectItem}/>
                        }else{
                        if(itm.category===this.state.type)
                            if(this.state.selectedItem.has(itm.name))
                                return <Item key={itm.id} items={itm} selectItem={this.selectItem} select="select"/>
                            else
                                return <Item key={itm.id} items={itm} selectItem={this.selectItem}/>
                        }
                        return null;
                    })}
                    
                </div>
        )
    }
}
