'use client'

import React from "react";

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

    return (
        <div>
            <h4 style={{color: color}}>Message: Hello {text}</h4>
            <p>This is a functional component</p>
            <p>Evaluate expression: {5 + 7}</p>
        </div>
    )
}

export default Message;

