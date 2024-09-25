import Counter from "@/components/Counter";
//import Message from "@/components/Message";

//import Message from '../components/Message';


export default function Home() {
  return (
    <div>
      <h3>Welcome to next.js</h3>

      {/* <Message text="React" color="blue"/>
      <Message text="Next.js" /> */}
      <Counter initialValue={5}/>
      {/* <Counter initialValue={10}/> */}
    </div>
  );
}
