import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import styles from '../styles/Home.module.css'

interface ChatMessage {
  user: string;
  message: string;
}

const Home: NextPage = () => {

  const [message, setMessage] = useState('');
  let socket: any; 

  useEffect(() => { socketInitialize() }, []);

  const socketInitialize = async () => {
    await fetch('/api/socketio')
    socket = io();

    socket.on('connect', () => {
      console.log('connected')
      socket.emit('hello');
    });
  }

  const handleSendMessage = () => {
    if(!message || !message.trim()) return;

    //emit message on the socket to those connected to the chat room
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Chat Room</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='chatMessages'>
          <p></p>
        </div>
        <div>
          <input 
            type='text' 
            className='chatInput' 
            placeholder='Enter a message' 
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
          >
          </input>
          <button onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
