'use client';

import Counter from "@/components/Counter";
 import Message from "@/components/Message";
// import { useEffect, useRef } from "react";

//import Message from '../components/Message';


export default function Home() {

  //const messageRef = useRef<MessageType>(null);

  // useEffect(() => {
  //   //console.log("messageRef", messageRef.current);
  //   //messageRef.current?.showMessage();
  // }, [])


  return (
    <div>
      <h3>Welcome to next.js</h3>

      {/* <Message text="React" color="blue"/>
      <Message text="Next.js" /> */}
      <Counter initialValue={5}/>
      {/* <Counter initialValue={10}/> */}

      <Message text="Next.js" />
    </div>
  );
}
