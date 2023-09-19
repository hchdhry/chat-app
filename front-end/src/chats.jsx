import { React,useEffect } from "react";
import axios from "axios";

const Chats = () => {
  const fetchdata = async () => {
    const data = await axios.get("http://localhost:3000/api/chats");
    console.log(data);
  
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <h1>Chats</h1>  
    </>
  );
  }

export default Chats;