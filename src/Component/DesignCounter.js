import React, { useState,useEffect } from 'react'
import ListForCounter from './ListForCounter'

function DesignCounter() {

    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)
    const [countThree,setCountThree] = useState(0)
    const [countFour,setCountFour] = useState(0)
    const [countFive,setCountFive] = useState(0)

    const [itemOne,setItemOne] = useState(true)
    const [itemTwo,setItemTwo] = useState(true)
    const [itemThree,setItemThree] = useState(true)
    const [itemFour,setItemFour] = useState(true)
    const [itemFive,setItemFive] = useState(true)
    

    const[totalSelectedItem, setTotalSelectedItem] = useState(0)
    useEffect(()=>{
        let one=0,two=0,three=0,four=0,five=0,total=0;
        if(countOne !== 0)
            one=1;
        if(countTwo !== 0)
            two=1;
        if(countThree !== 0)
            three=1;
        if(countFour !== 0)
            four=1;
        if(countFive !==0)
            five=1;
        total = one + two + three + four + five;
        setTotalSelectedItem(total)
    },[countOne,countTwo,countThree,countFour,countFive])


    const reset = () => {
        setCountOne(0)
        setCountTwo(0)
        setCountThree(0)
        setCountFour(0)
        setCountFive(0)
    }

    

    return (
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
                            <span class="badge badge-info"> {totalSelectedItem} </span>
                        </div>
                        
                        <div class="col-12 col-sm-1">
                            Itmes
                        </div>
                    </div>
                </div>
            </header>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 offset-1 col-sm-3">
                    <button type="button" class="btn btn-success"  onClick={reset}>reset</button>
                        <ul>
                            {itemOne && <ListForCounter key='one' id={1} count={countOne} setCount={setCountOne} setItem={setItemOne}  />}
                            {itemTwo && <ListForCounter key='two' id={2} count={countTwo} setCount={setCountTwo} setItem={setItemTwo}  />}
                            {itemThree && <ListForCounter key='three' id={3} count={countThree} setCount={setCountThree} setItem={setItemThree}  />}
                            {itemFour && <ListForCounter key='four' id={4} count={countFour} setCount={setCountFour} setItem={setItemFour}  />}
                            {itemFive && <ListForCounter key='five' id={5} count={countFive} setCount={setCountFive} setItem={setItemFive}  />}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DesignCounter
