'use client'

import React, { useEffect, forwardRef, useImperativeHandle } from "react";

type MessageProps = {
    text: string,
    color?: string
}
// function Message1({color, text}: MessageProps){
//     return (
//         <div></div>
//     )
// }


//function Message(props: MessageProps){

export type MessageType = {
    about: string;
    showMessage: () => void
}
const Message:React.FC<MessageProps> = React.forwardRef(({color='green', text}, ref: any) => {


    //console.log("props", props);

    useImperativeHandle(ref, () => {

        return {
            about: "This is the Message component",
            showMessage: () => {
                alert("This is an alert from the Message component")
            },
            focus: ()=>{

            },
            setValue: () => {
                
            }
        }

    })

    useEffect(() => {

    
        console.log("Message component mounted...", ref);


        return () => {
            console.log("Message component unmounted...");
        }
    }, [])

    useEffect(() => {
        console.log("Message component updated(props.text has changed)...");
    }, [text])

    useEffect(() => {
        console.log("Message component updated(props.color has changed)...");
    }, [color])

    return (
        <div>
            <h4 style={{color: color}}>Message: Hello {text}</h4>
            <p>This is a functional component</p>
            <p>Evaluate expression: {5 + 7}</p>
        </div>
    )
});

export default Message;

