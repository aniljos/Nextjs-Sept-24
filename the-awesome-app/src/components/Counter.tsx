'use client'

import { MouseEvent, useEffect, useState } from "react";
import Message from "./Message";

// <Counter initialValue={5}/>

type CounterProps= {
    initialValue: number
}



function Counter(props: CounterProps){

    //let ctr = props.initialValue;
    
    //state
    const [ctr, setCtr] = useState(props.initialValue);
    
    useEffect(() => {

        console.log("useEffect: ctr updated", ctr);

    }, [ctr]);

    function inc(evt: MouseEvent<HTMLButtonElement>){

        console.log("inc invoked", evt);
        //props.initialValue++;
        //setCtr(ctr + 1);
        //setCtr(ctr + 1);
        //console.log("ctr", ctr);

        setCtr(prevCtr => prevCtr + 1);
        //setCtr(prevCtr => prevCtr + 1);
    }
    function decr(){
        setCtr(ctr - 1);
        console.log("ctr", ctr);
    }

    return (
        <div>
            <h4>Counter: {ctr}</h4>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            {ctr > 10 ? <Message text={ctr.toString()} /> : null}
             
        </div>
    )
}
export default Counter;