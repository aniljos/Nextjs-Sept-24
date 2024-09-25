'use client'

import React, { useEffect } from "react";

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
const Message:React.FC<MessageProps> = ({color='green', text}) => {


    //console.log("props", props);

    useEffect(() => {
        console.log("Message component mounted...");


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
}

export default Message;

