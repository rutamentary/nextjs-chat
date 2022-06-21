import type { NextPage } from 'next'
import React, {useState} from "react";
import Room from './[roomName]';

const Home: NextPage = () => {

  const [chatroomName, setChatroomName] = useState<string>('');

  if(chatroomName.trim().length > 0)
  {
    return (
      <Room />
    )
  }
  return (
      <form onSubmit={e => {
          e.preventDefault();
          //TODO: navigate to room
      }}>
        <label>Enter name of chatroom</label>
        <br/>
        <input type="text" value={chatroomName} onChange={(e) => {setChatroomName(e.target.value)}}/>
        <br/>
        <input type="button" value="Submit"/>
      </form>
  )
}

export default Home
