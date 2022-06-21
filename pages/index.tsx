import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, {useState, useEffect, useRef, useMemo} from "react";
import io from "socket.io-client";
import styles from '../styles/Home.module.css'
import ChatRoom from "../components/ChatRoom";

interface ChatMessage {
  user: string;
  message: string;
  timeSent: string;
}

const Home: NextPage = () => {

  const [chatroomName, setChatroomName] = useState<string>('');
  if(!!chatroomName)
  {
    return (
        <ChatRoom/>
    )
  }
  return (
      <form onSubmit={e => {
          e.preventDefault()

      }}>
        <label htmlFor="">Enter name of chatroom</label>
          <br/>
        <input type="text"/>
          <br/>
        <input type="submit" id="submitChatroomName" value="Submit"/>
      </form>
  )
}

export default Home
