import React from 'react'

function ListForCounter({id,count,setCount,setItem}) {
    return (
        <li key={id}>
            <button type="button" class="btn btn-warning" style={{margin: '5px', width: '80px'}}>{count ? count : 'Zero'}</button>
            <button type="button" class="btn btn-info" style={{margin: '5px'}} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            {count ? <button type="button" class="btn btn-primary" style={{margin: '5px'}} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            : <button type="button" class="btn btn-primary" style={{margin: '5px'}}>-</button>}               
            <button type="button" class="btn btn-danger" style={{margin: '5px'}} onClick={() => setItem(false)}>delete</button>
        </li>
    )
}

export default ListForCounter
