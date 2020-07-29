import React, {useState,useEffect} from 'react'
import ShowCartItems from './ShowCartItems'


function CartDesign() {

    // Cart Items
    const [items,setItems] = useState([
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ])

    // Increment the value of Selected Cart Items
    const increase = (itemId) => {
        const index = items.findIndex(item => item.id == itemId )
        let copiedItem = [...items]
        copiedItem[index] = {...copiedItem[index], value: copiedItem[index].value + 1}
        setItems(copiedItem)
    }

    // total selected Cart Items
    const total = items.filter(item => item.value > 0 )
    console.log(total.length)

    // Decrement the value of Selected Cart Items
    const decrease = (itemId) => {
        const index = items.findIndex(item => item.id == itemId )
        let copiedItem = [...items]
        copiedItem[index] = {...copiedItem[index], value: copiedItem[index].value - 1}
        setItems(copiedItem)
    }

    // Delete the Cart Item from the display
    const deleteItem = (itemId) => {

        const index = items.findIndex(item => item.id == itemId )
        let copiedItem = [...items]
        copiedItem[index] = {...copiedItem[index], value: 0}
        setItems(copiedItem)

        const newItems = items.filter(item => item.id !== itemId)
        console.log(newItems)
        setItems(newItems)
    }

    //Reset all the value
    const reset = () => {
        const newItems = items.map(item => {
            item.value = 0
            return item
        })

        console.log(newItems)
        setItems(newItems)
    }

    
    return (
        <div>

            {/* header */}
            <div>
            <header class="jumbotron">
                <div class="container">
                    <div class="row h1">
                        
                        <div class="col-12 col-sm-1">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-archive-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM6 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                        </svg>
                        </div>
                        
                        <div>
                            <span class="badge badge-info"> {total.length} </span>
                        </div>
                        
                        <div class="col-12 col-sm-1">
                            Itmes
                        </div>
                    
                    </div>
                </div>
            </header>
            </div>


            {/* reset button */}
            <div style={{marginLeft: '125px'}}>
                <button type="button" class="btn btn-success"  onClick={reset}>reset</button>
            </div>
            <br></br>


            {/* display CartItems */}
            <div style={{marginLeft: '120px'}}>
                {items.map(item =>(
                <ShowCartItems key={item.id} id={item.id} value={item.value} increase={increase} decrease={decrease} deleteItem={deleteItem}/>
                ))}
            </div>            

        </div>
    )
}

export default CartDesign
