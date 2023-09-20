import React, { useEffect, useState } from "react";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const fetchdata = async () => {
    const {data} = await axios.get("http://localhost:3000/api/chats");
    console.log(data);
    setChats(data);
  
  }
  useEffect(() => {
    fetchdata();
  }, []);
 
  return (
    <>
    <div>
      {chats.map(chat => (
        <div>{chat.chatName}</div>
      ))}
    </div>
  </>
  );
  }

export default Chats;

