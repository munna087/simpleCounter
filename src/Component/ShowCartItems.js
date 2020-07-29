import React from 'react'

function ShowCartItems({id,value,increase,decrease,deleteItem}) {



    return (
            <div key={id}>
                
                {/* Show How many number of items are selected for each item */}
                <button type="button" class="btn btn-warning" style={{margin: '5px', width: '80px'}}>{value ? value : 'Zero'}</button>
                
                {/* button for increment the selected numbers of each item */}
                <button type="button" class="btn btn-info" style={{margin: '5px'}} onClick={()=> increase(id)}>+</button>
                
                {/* button for decrement the selected numbers of each item */}
                <button type="button" disabled={value>0 ? false: true} class="btn btn-primary" style={{margin: '5px'}} onClick={() => decrease(id)}>-</button>

                {/* button for delete the selected item */}
                <button type="button" class="btn btn-danger" style={{margin: '5px'}} onClick={() => deleteItem(id)}>delete</button>

            </div>
    )
}

export default ShowCartItems
