import {useState,useEffect} from "react";
import { collection,
    addDoc,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,} from "firebase/firestore";
import {auth,db} from "../firebase-config";
export const Chat = (props) => {
    const {room} = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messageRef = collection(db,"messages")

    useEffect (() => {
    const queryMessages = query(messageRef,where("room", "==",room), orderBy("createdAt")
    
    );
    const unsubscribe = onSnapshot(queryMessages,(snapshot)=>{
        let messages = [];
        snapshot.forEach((doc)=>{
            messages.push({...doc.data(),id:doc.id});
            
        });
       
        console.log(messages);
       
        setMessages(messages);
    });
    return () =>unsubscribe();
    },[]);
    const handleSubmit = async(e) => {

        e.preventDefault();
        if (newMessage === "") return;
        await addDoc(messageRef,{
            text:newMessage,
            createdAt:serverTimestamp(),
            user:auth.currentUser.displayName,
            room,
          

        });
        setNewMessage("");
            
        
    };
    return <div className="a4"> 
      <div className="header">
        <h1>Welcome to: {room.toUpperCase()}</h1>
      </div>
      <div className="messages">
      {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      
    <form  onSubmit={handleSubmit} className="a5"> 
    <input className="a6" placeholder="type your message" onChange={(e)=> setNewMessage(e.target.value)} 
    value={newMessage}/>
    <button className="a7">send</button>
    </form></div>
}